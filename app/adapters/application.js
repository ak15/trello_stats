import Ember from 'ember';
import DS from 'ember-data';
import ENV from "../config/environment";

export default DS.JSONAPIAdapter.extend({
  authentication: Ember.inject.service(),
  host: ENV.APP.HOST,
  namespace: ENV.APP.NAMESPACE,

  // allows the multiword paths in urls to be underscored
  pathForType: function(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  },

  // allows queries to be sent along with a findRecord
  // hopefully Ember / EmberData will soon have this built in
  // ember-data issue tracked here:
  // https://github.com/emberjs/data/issues/3596
  urlForFindRecord(id, modelName, snapshot) {
    let url = this._super(...arguments);
    let query = Ember.get(snapshot, 'adapterOptions.query');
    if(query) {
      url += '?' + Ember.$.param(query);
    }
    return url;
  },

  headers: Ember.computed(function(){
    return this.get('authentication').getHeaders();
  }).volatile()
});