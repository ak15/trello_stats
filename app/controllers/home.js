import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendTrelloTokenToServer(token) {
      console.log(token);
    }
  }
})