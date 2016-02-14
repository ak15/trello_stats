import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    handlePointsChange: function(updatedPoint) {
      this.sendAction('handlePointsChange', this.get('cardMember'), updatedPoint);
    }
  }
});
