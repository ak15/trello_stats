import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  points: DS.attr('number'),
  members: DS.hasMany('members'),
  cardMembers: DS.hasMany('cardMembers', { inverse: 'card' })
})