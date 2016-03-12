import Ember from 'ember';

export default Ember.Controller.extend({
  isAuthenticated: Ember.computed.oneWay('authentication.isAuthenticated'),
  ajax: Ember.inject.service(),
  lastSyncedTime: Ember.computed('model.meta.last_synced_time', function() {
    return moment(this.get('model').get('meta').last_synced_time).fromNow();
  }),
  actions: {
    pullAllData() {
      return this.get('ajax').request('/pull_all_data_from_trello');
    }
  }
});
