import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loading(transition) {
      $('.loader').show();
      transition.promise.finally(function() {
        $('.loader').hide();
      });
    },
    error(errors) {
      console.log("Something went wrong");
      console.log(errors);
    }
  }
});
