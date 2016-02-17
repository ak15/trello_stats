export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('sprint')
  }
})