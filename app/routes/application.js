import Ember from 'ember';

export default Ember.Route.extend({
  isAuthenticated: Ember.computed.oneWay('authentication.isAuthenticated'),
  isAdmin: Ember.computed.oneWay('authentication.isAdmin'),
  beforeModel(transition) {
    this.redirectToLoginIsNotAuthenticated(transition);
  },
  redirectToLoginIsNotAuthenticated(transition) {
    if (!this.get("isAuthenticated") && transition.targetName != "login") {
      transition.abort();
      this.transitionTo('login');
    }
  },
  redirectToHomePageIfNotAuthorized(transition) {
    if (this.get("isAuthenticated") && this.get("isAdmin")) {
      // transition.abort();
      // this.transitionTo('home');
    }
  },
  actions: {
    willTransition(transition) {
      this.redirectToLoginIsNotAuthenticated(transition);
      this.redirectToHomePageIfNotAuthorized(transition);
    },
    loading(transition) {
      Ember.$('.loader').show();
      transition.promise.finally(function() {
        Ember.$('.loader').hide();
      });
    },
    error(response) {
      console.log("Something went wrong");
      console.log(response);
    }
  }
});
