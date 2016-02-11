export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  },
  keyForRelationship: function(key, relationship, method) {
     return Ember.String.underscore(key);
   }
});