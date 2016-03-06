// TODOD: This will be refactored while implementing authorizations if possible

import Ember from 'ember';

export default Ember.Service.extend({
  setHeaders(data) {
    localStorage.setItem("access-token", data["access-token"]);
    localStorage.setItem("client", data.client);
    localStorage.setItem("expiry", data.expiry);
    localStorage.setItem("uid", data.uid);
  },
  getHeaders() {
    return {
      "access-token":  localStorage.getItem("access-token"),
      "client"      :  localStorage.getItem("client"),
      "expiry"      :  localStorage.getItem("expiry"),
      "uid"         :  localStorage.getItem("uid")
    }
  },
  logout() {
    localStorage.removeItem("access-token");
    localStorage.removeItem("client");
    localStorage.removeItem("expiry");
    localStorage.removeItem("uid");
    localStorage.removeItem('trello_token')
  },
  // Check https://github.com/funkensturm/ember-local-storage.
  isAuthenticated: Ember.computed(function() {
    return localStorage.getItem("access-token") != null;
  }).volatile(),
});
