import Ember from 'ember';

export default Ember.Component.extend({
  name: Ember.computed.oneWay('recordToBeEdited.name'),
  date: Ember.computed.oneWay('recordToBeEdited.date'),
  isEditForm: Ember.computed.notEmpty('recordToBeEdited'),
  showLoader: false,
  afterSave() {
    this.attrs.closeHolidayForm();
  },
  actions: {
    closeHolidayForm() {
      this.attrs.closeHolidayForm();
    },
    createOrUpdateHoliday() {
      this.set('showLoader', true);
      let payload = {name: this.get('name'), date: this.get('date')};
      if (this.get('isEditForm')) {
        this.attrs.updateHoliday(this.get('recordToBeEdited').id, payload)
          .then(this.afterSave.bind(this));
      } else {
        this.attrs.createHoliday(payload).then(this.afterSave.bind(this));
      }
    }
  }
});
