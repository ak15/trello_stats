import Ember from 'ember';

export default Ember.Component.extend({
  didRender:  function() {
    this.$('.points-field').ForceNumericOnly();
  },
  actions: {
    handlePointsChange: function(cardMember, updatedPoint) {
      this.sendAction('handlePointsChange', cardMember, updatedPoint);
    }
  }
});
