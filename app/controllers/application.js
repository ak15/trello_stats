import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  notify: Ember.inject.service(),
  isAuthenticated: Ember.computed.oneWay("authentication.isAuthenticated"),
  isAdmin: Ember.computed.oneWay("authentication.isAdmin"),
  actions: {
    logout() {
      Ember.$("#loader").show();
      this.get("ajax").request("logout")
        .then(() => {
          this.get("notify").success("Logout successfull");
          this.get("authentication").logout();
          this.transitionToRoute("login");
        });
    },
  }
});
