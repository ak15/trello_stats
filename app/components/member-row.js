import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  getByValue: Ember.inject.service(),
  selectedJobProfile: Ember.computed('jobProfile', 'member.jobProfile', function() {
    if (!this.get('isEditable')) {
      return this.get('getByValue').getKey(
        this.get('jobProfiles'), this.get('member').get('jobProfile'));
    }
  }),
  selectedRole: Ember.computed('jobProfile', 'member.jobProfile', function() {
    if (!this.get('canChangeRole')) {
      return this.get('getByValue').getKey(
        this.get('roles'), this.get('member').get('role'));
    }
  }),
  actions: {
    handleJobProfileChange(value) {
      this.get('member').set('jobProfile', value);
      this.attrs.handleRecordChange(this.get('member'))
    },
    handleRoleChange(value) {
      this.get('member').set('role', value);
      this.attrs.handleRecordChange(this.get('member'))
    }
  }
});
