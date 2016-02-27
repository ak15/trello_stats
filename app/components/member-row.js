import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  actions: {
    handleJobProfileChange(value) {
      this.get('member').set('jobProfile', value);
      this.attrs.handleRecordChange(this.get('member'))
    }
  }
});
