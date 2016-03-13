import DS from 'ember-data';

export default DS.Model.extend({
  member: DS.belongsTo('member'),
  date: DS.attr(),
  creator: DS.belongsTo('member')
});