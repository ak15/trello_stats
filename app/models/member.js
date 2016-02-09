import DS from 'ember-data';

export default DS.Model.extend({
  user_name: DS.attr('string'),
  full_name: DS.attr('string'),
  point_stats: DS.attr(),
  completed_percentage: Ember.computed('point_stats.expected_points',
    'point_stats.accepted', function() {
    let acccepted = this.get('point_stats.accepted');
    let expected_points = this.get('point_stats.expected_points');
    if (acccepted == 0) { return 0 }
    return Math.round((acccepted * 100) / expected_points)
  }),
  incompleted_percentage: Ember.computed('completed_percentage', function() {
    return (100 - this.get('completed_percentage'))
  }),
});
