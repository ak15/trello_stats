import DS from 'ember-data';

export default DS.Model.extend({
  member: DS.belongsTo('member'),
  date: DS.attr(),
  lastUpdatedBy: DS.belongsTo('member')
});