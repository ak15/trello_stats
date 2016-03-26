import Ember from 'ember';

export default Ember.Route.extend({
  isAuthenticated: Ember.computed.readOnly('authentication.isAuthenticated'),
  beforeModel() {
    if (this.get('isAuthenticated')) { this.transitionTo('home'); }
  }
});
