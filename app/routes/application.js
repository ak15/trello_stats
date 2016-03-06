import Ember from 'ember';

export default Ember.Route.extend({
  isAuthenticated: Ember.computed.oneWay('authentication.isAuthenticated'),
  beforeModel(transition) {
    this.redirectToLoginIsNotAuthenticated(transition);
  },
  redirectToLoginIsNotAuthenticated(transition) {
    if (!this.get("isAuthenticated") && transition.targetName != "login") {
      transition.abort();
      this.transitionTo('login');
    }
  },
  actions: {
    willTransition(transition) {
      this.redirectToLoginIsNotAuthenticated(transition);
    },
    loading(transition) {
      Ember.$('.loader').show();
      transition.promise.finally(function() {
        Ember.$('.loader').hide();
      });
    },
    error(errors) {
      console.log("Something went wrong");
      console.log(errors);
    }
  }
});
