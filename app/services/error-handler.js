import Ember from 'ember';

export default Ember.Service.extend({
  notify: Ember.inject.service(),
  showErrors(response) {
    // Showing errors functionality will be extended later
    try {
      console.log("Something went wrong");
      console.log(response);
      this.get('notify').error(response.errors[0].title);
    } catch(e) {
      console.log(e.message);
      this.get('notify').error('Something went wrong. Sorry for inconvinience');
    }
  }
});
