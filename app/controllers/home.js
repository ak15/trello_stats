import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    sendTrelloTokenToServer(token) {
      console.log(token);
    },
    pullAllData() {
      return this.get('ajax').request('/pull_all_data_from_trello');
    }
  }
})