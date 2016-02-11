export default DS.Model.extend({
  userName: DS.attr('string'),
  fullName: DS.attr('string'),
  pointStats: DS.attr(),
  completedPercentage: Ember.computed('pointStats.expected_points',
    'pointStats.accepted', function() {
    let acccepted = this.get('pointStats.accepted');
    let expected_points = this.get('pointStats.expected_points');
    if (acccepted == 0) { return 0 }
    return Math.round((acccepted * 100) / expected_points)
  }),
  incompletePercentage: Ember.computed('completedPercentage', function() {
    return (100 - this.get('completedPercentage'))
  }),
  cardMembers: DS.hasMany('cardMembers')
});
