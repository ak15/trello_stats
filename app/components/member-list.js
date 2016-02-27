import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this.$('.points-field').ForceNumericOnly();
  }
});
