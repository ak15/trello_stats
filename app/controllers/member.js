import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    handleExpectedPointChange: function(member) {
      if (member.get('hasDirtyAttributes')) {
        member.save().catch((response) => {
          this.get('errorHandler').showErrors(response)
        });
      }
    }
  }
});
