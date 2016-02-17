export default Ember.Component.extend({
  didRender: function() {
    this.$('.points-field').ForceNumericOnly();
  },
  actions: {
    handleExpectedPointChange: function(member) {
      this.sendAction('handleExpectedPointChange', member);
    }
  }
});
