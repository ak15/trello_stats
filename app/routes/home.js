export default Ember.Route.extend({
  model() {
    return this.store.query('member', {point_stats: true})
  }
})