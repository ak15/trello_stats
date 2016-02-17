import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    handleDateChange: function(sprint) {
      if (sprint.get('hasDirtyAttributes')) {
        sprint.save().catch((response) => {
          this.get('errorHandler').showErrors(response)
        });
      }
    }
  }
});
