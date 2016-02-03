import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendTrelloTokenToServer(token) {
      alert(token)
    }
  }
})