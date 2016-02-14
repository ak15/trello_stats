import DS from 'ember-data';
var underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr) {
    return underscore(attr);
  },
  keyForRelationship: function(key, relationship, method) {
     return underscore(key);
   }
});