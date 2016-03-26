import Ember from 'ember';

export default Ember.Component.extend({
  memberId: Ember.computed(function() {
    let recordToBeEdited = this.get('recordToBeEdited');
    if (!recordToBeEdited) {
      return this.get('members').get('firstObject').id;
    } else {
      return recordToBeEdited.get('member').get('id');
    }
  }),
  date: Ember.computed.oneWay('recordToBeEdited.date'),
  isEditForm: Ember.computed.notEmpty('recordToBeEdited'),
  showLoader: false,
  afterSave() {
    this.attrs.closeLeaveForm();
  },
  actions: {
    closeLeaveForm() {
      this.attrs.closeLeaveForm();
    },
    createOrUpdateLeave() {
      this.set('showLoader', true);
      let payload = {memberId: this.get('memberId'), date: this.get('date')};
      if (this.get('isEditForm')) {
        this.attrs.updateLeave(this.get('recordToBeEdited').id, payload)
          .then(this.afterSave.bind(this));
      } else {
        this.attrs.createLeave(payload).then(this.afterSave.bind(this));
      }
    }
  }
});
