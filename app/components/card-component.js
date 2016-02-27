import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this.$('.points-field').ForceNumericOnly();
  },
  actions: {
    handlePointsChange(cardMember, updatedPoint) {
      this.sendAction('handlePointsChange', cardMember, updatedPoint);
    }
  }
});
