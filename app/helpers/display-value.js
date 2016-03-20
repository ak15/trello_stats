import Ember from 'ember';

export function displayValue([value, defaultValue = '_____________']) {
  return value || defaultValue
}

export default Ember.Helper.helper(displayValue);

