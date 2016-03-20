import Ember from 'ember';

export default Ember.Controller.extend({
  isAdminOrTeamLead: Ember.computed.bool('authentication.isAdminOrTeamLead'),
  leaveIsPresent: Ember.computed.notEmpty('model'),
  members: Ember.computed(function() {
    return this.store.peekAll('member');
  }),
  leaves: Ember.computed('model.@each.date', function() {
    return this.get('model').toArray().sort(function(itema, itemb) {
      return moment(itemb.get('date')).isAfter(itema.get('date'));
    });
  }),
  currentMemberId: Ember.computed.readOnly('localStorage.member-id'),
  showDeleteLeaveConfirmBox: false,
  recordToBeDeleted: null,
  recordToBeEdited: null,
  showLeaveForm: false,
  hideConfirmBox() {
    this.set('showDeleteLeaveConfirmBox', false);
  },
  showConfirmBox() {
    this.set('showDeleteLeaveConfirmBox', true);
  },
  actions: {
    hideConfirmBox() {
      this.hideConfirmBox();
    },
    markRecordForDeletion(leave) {
      this.showConfirmBox();
      this.set('recordToBeDeleted', leave);
    },
    deleteLeave(leave) {
      return this.get('recordToBeDeleted').destroyRecord().then(() => {
        this.hideConfirmBox();
      });
    },
    closeLeaveForm() {
      this.set('showLeaveForm', false);
    },
    showAddLeaveForm() {
      this.set('recordToBeEdited', null);
      this.set('showLeaveForm', true);
    },
    showEditLeaveForm(leave) {
      this.set('recordToBeEdited', leave);
      this.set('showLeaveForm', true);
    },
    createLeave(payload) {
      let record = this.store.createRecord('leave', {date: payload.date});
      record.set('member', this.store.peekRecord('member', payload.memberId));
      return record.save();
    },
    updateLeave(id, payload) {
      let leave = this.store.peekRecord('leave', id);
      leave.set('date', payload.date);
      leave.set('member', this.store.peekRecord('member', payload.memberId));
      return leave.save();
    }
  }
});
