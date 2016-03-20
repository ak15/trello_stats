import Ember from 'ember';

export default Ember.Route.extend({
  isAuthenticated: Ember.computed.oneWay('authentication.isAuthenticated'),
  isAdmin: Ember.computed.oneWay('authentication.isAdmin'),
  errorHandler: Ember.inject.service(),
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
    error(response) {
      this.get('errorHandler').showErrors(response);
    }
  }
});
