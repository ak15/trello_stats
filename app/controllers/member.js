import Ember from 'ember';

export default Ember.Controller.extend({
  isAdmin: Ember.computed.bool('authentication.isAdmin'),
  isAdminOrTeamLead: Ember.computed.bool('authentication.isAdminOrTeamLead'),
  jobProfiles: Ember.computed.readOnly('model.meta.job_profiles'),
  roles: Ember.computed.readOnly('model.meta.roles'),
  actions: {
    handleRecordChange(member) {
      if (member.get('hasDirtyAttributes')) {
        member.save().catch((response) => {
          this.get('errorHandler').showErrors(response);
        });
      }
    }
  }
});
