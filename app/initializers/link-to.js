import Ember from 'ember';

export function initialize() {
  Ember.LinkComponent.reopen({
    attributeBindings: ['data-role']
  });
}

export default {
  name: 'link-to',
  initialize
};

