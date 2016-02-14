import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loading(transition, originRoute) {
      $('.loader').show();
      transition.promise.finally(function() {
        $('.loader').hide();
      });
    }
  }
});
