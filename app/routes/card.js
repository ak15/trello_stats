export default Ember.Route.extend({
  queryParams: {
    search: { refreshModel: true },
    list_ids: { refreshModel: true },
    member_ids: { refreshModel: true },
    sprint_ids: { refreshModel: true }
  },
  model(params) {
    return this.store.query('card', params)
  }
})