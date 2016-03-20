// TODOD: This will be refactored while implementing authorizations if possible

import Ember from 'ember';

export default Ember.Service.extend({
  localStorage: Ember.inject.service(),
  storeHeaders(data) {
    this.get('localStorage').set('access-token', data['access-token']);
    this.get('localStorage').set('client', data.client);
    this.get('localStorage').set('expiry', data.expiry);
    this.get('localStorage').set('uid', data.uid);
    this.get('localStorage').set('user-role', data['user-role']);
    this.get('localStorage').set('member-id', data['member-id']);
  },
  getHeaders() {
    return {
      'access-token':  this.get('localStorage').get('access-token'),
      'client'      :  this.get('localStorage').get('client'),
      'expiry'      :  this.get('localStorage').get('expiry'),
      'uid'         :  this.get('localStorage').get('uid')
    };
  },
  logout() {
    this.get('localStorage').remove('access-token');
    this.get('localStorage').remove('client');
    this.get('localStorage').remove('expiry');
    this.get('localStorage').remove('uid');
    this.get('localStorage').remove('trello_token');
    this.get('localStorage').remove('user-role');
  },
  isAuthenticated: Ember.computed.notEmpty('localStorage.access-token'),
  role: Ember.computed.readOnly('localStorage.user-role'),
  role: Ember.computed.readOnly('localStorage.user-role'),
  isAdmin: Ember.computed.equal('localStorage.user-role', 'admin'),
  isTeamLead: Ember.computed.equal('localStorage.user-role', 'team_lead'),
  isAdminOrTeamLead: Ember.computed.or('isAdmin', 'isTeamLead'),
});
