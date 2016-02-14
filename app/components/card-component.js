import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    handlePointsChange: function(cardMember, updatedPoint) {
      this.sendAction('handlePointsChange', cardMember, updatedPoint);
    }
  }
});
