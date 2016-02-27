import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    authenticate() {
      Trello.authorize({
        type: "popup",
        name: "Trello stats",
        scope: { read: "allowRead", write: "allowWrite", account: "allowAccount" },
        expiration: 'never',
        success: function() {
          this.sendAction('trelloAuthSuccess', localStorage.getItem('trello_token'));
        }.bind(this),
        error: function() {

        }
      });
    }
  }
});
