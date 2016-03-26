import Ember from 'ember';

export default Ember.Controller.extend({
  isAdmin: Ember.computed.bool('authentication.isAdmin'),
  holidayIsPresent: Ember.computed.notEmpty('model'),
  sortedHolidays: Ember.computed('model.@each.date', function() {
    return this.get('model').toArray().sort(function(itema, itemb) {
      return moment(itemb.get('date')).isAfter(itema.get('date'));
    });
  }),
  showDeleteHolidayConfirmBox: false,
  recordToBeDeleted: null,
  recordToBeEdited: null,
  showHolidayForm: false,
  hideConfirmBox() {
    this.set('showDeleteHolidayConfirmBox', false);
  },
  showConfirmBox() {
    this.set('showDeleteHolidayConfirmBox', true);
  },
  actions: {
    hideConfirmBox() {
      this.hideConfirmBox();
    },
    markRecordForDeletion(holiday) {
      this.showConfirmBox();
      this.set('recordToBeDeleted', holiday);
    },
    deleteHoliday(holiday) {
      return this.get('recordToBeDeleted').destroyRecord().then(() => {
        this.hideConfirmBox();
      });
    },
    closeHolidayForm() {
      this.set('showHolidayForm', false);
    },
    showAddHolidayForm() {
      this.set('recordToBeEdited', null);
      this.set('showHolidayForm', true);
    },
    showEditHolidayForm(holiday) {
      this.set('recordToBeEdited', holiday);
      this.set('showHolidayForm', true);
    },
    createHoliday(payload) {
      let record = this.store.createRecord('holiday', payload);
      return record.save();
    },
    updateHoliday(id, payload) {
      let holiday = this.store.peekRecord('holiday', id);
      holiday.set('name', payload.name);
      holiday.set('date', payload.date);
      return holiday.save();
    }
  }
});
