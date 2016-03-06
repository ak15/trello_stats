import Ember from 'ember';

export default Ember.Component.extend({
  notify: Ember.inject.service(),
  actions: {
    authenticate() {
      Trello.authorize({
        type: "popup",
        name: "Trello stats",
        expiration: 'never',
        success: () => {
          this.sendAction('trelloAuthSuccess', localStorage.getItem('trello_token'));
        },
        error: () => {
          this.get("notify").error("Something went wrong. Please try authenticating again")
        }
      });
    }
  }
});
