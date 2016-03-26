import Ember from 'ember';

export default Ember.Route.extend({
  authentication: Ember.inject.service(),
  model() {
    return this.store.findAll('holiday');
  }
})