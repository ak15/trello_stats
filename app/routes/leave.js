import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      leaves: this.store.findAll('leave'),
      members: this.store.findAll('member')
    });
  },
  setupController(controller, models) {
    controller.set('leaves', models.leaves);
    controller.set('members', models.members);
  }
})
