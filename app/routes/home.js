import Ember from 'ember';

export default Ember.Route.extend({
  authentication: Ember.inject.service(),
  model() {
    if (this.get('authentication').get('isAuthenticated')) {
      return this.store.query('member', {point_stats: true})
    }
  }
})