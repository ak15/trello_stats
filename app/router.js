import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('card');
  this.route('home', {path: '/'});
  this.route('member');
  this.route('sprint');
  this.route('list');
  this.route('login');
  this.route('leave', function() {
    this.route('new');
  });
});

export default Router;
