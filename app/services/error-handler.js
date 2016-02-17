import Ember from 'ember';

export default Ember.Service.extend({
  showErrors: function(response) {
    // Showing errors functionality will be extended later
    console.log(response.errors);
  }
});
