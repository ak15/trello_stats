import Ember from 'ember';
import ENV from "../config/environment";
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  host: `${ENV.APP.HOST}/${ENV.APP.NAMESPACE}`,
  authentication: Ember.inject.service(),
  headers: Ember.computed(function() {
    return this.get('authentication').getHeaders();
  }).volatile()
});