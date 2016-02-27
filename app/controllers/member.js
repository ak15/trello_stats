import Ember from 'ember';

export default Ember.Controller.extend({
  jobProfiles: Ember.computed('model.meta.job_profiles', function() {
    return this.get('model').get('meta').job_profiles;
  }),
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
