import DS from 'ember-data';
var underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr) {
    return underscore(attr);
  },
  keyForRelationship: function(key, relationship, method) {
    return underscore(key);
  },
  // serializeHasMany: function(snapshot, json, relationship) {
  //   // Current we don't wants to send has_many association while saving and updating record
  // },
  // serializeBelongsTo: function(snapshot, json, relationship) {
  //   // Current we don't wants to send belongs association while saving and updating record
  // }
});