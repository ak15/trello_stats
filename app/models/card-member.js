export default DS.Model.extend({
  individualsPoint: DS.attr('number'),
  member: DS.belongsTo('member'),
  card: DS.belongsTo('card')
})