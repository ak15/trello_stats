import Ember from 'ember';

export default Ember.Controller.extend({
  isAdminOrTeamLead: Ember.computed.bool('authentication.isAdminOrTeamLead'),
  actions: {
    handleDateChange(sprint) {
      if (sprint.get('hasDirtyAttributes')) {
        sprint.save().catch((response) => {
          this.get('errorHandler').showErrors(response);
        });
      }
    }
  }
});
