import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('card');
  this.route('home');
  this.route('member');
  this.route('sprint');
});

export default Router;
