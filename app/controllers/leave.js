import Ember from 'ember';

export default Ember.Controller.extend({
  showDeleteLeaveConfirmBox: false,
  recordToBeDeleted: null,
  leaveIsPresent: Ember.computed.notEmpty('model'),
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
    editLeave() {

    }
  }
});
