import Ember from 'ember';

export default Ember.Service.extend({
  getKey(hash, valueToSelect) {
    let keys = Object.keys(hash);
    for(let i = 0; i < keys.length; i++) {
      if (valueToSelect == hash[keys[i]]) { return keys[i] }
    }
    return '_____________';
  }
});
