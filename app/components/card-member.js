import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    handlePointsChange(updatedPoint) {
      this.sendAction('handlePointsChange', this.get('cardMember'), updatedPoint);
    }
  }
});
