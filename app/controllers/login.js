import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  notify: Ember.inject.service(),
  actions: {
    sendTrelloTokenToServer(token) {
      Ember.$('.loader').show();
      this.get('ajax').request(`/authenticate?token=${token}`)
        .then((response) => {
          this.get("notify").success("Logging successful");
          this.get("authentication").storeHeaders(response.meta.auth_headers);
          Ember.$('.loader').hide();
          this.transitionToRoute('home');
        })
        .catch((response) => {
          Ember.$('.loader').hide();
          this.get('notify').error(response.errors[0].title);
        });
    },
  }
});
