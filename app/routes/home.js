import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    return this.store.findAll('member')
  },
  afterModel(model, transition) {
    console.log(model)
  }
})