import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  beforeModel() {
    return this.get('ajax').request('/members/leaves').then((response) => {
      this.store.pushPayload(response);
    });
  },
  model() {
    return this.store.peekAll('leave');
  }
})