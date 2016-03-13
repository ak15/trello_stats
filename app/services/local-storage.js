import Ember from 'ember';

export default Ember.Service.extend({
  unknownProperty(key) {
    return localStorage.getItem(key);
  },
  setUnknownProperty(key, value) {
    if(Ember.isNone(value)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
    this.notifyPropertyChange(key);
    return value;
  },
  remove(key) {
    localStorage.removeItem(key);
    this.notifyPropertyChange(key);
  },
  clear: function() {
    // this.beginPropertyChanges();
    // for (var i=0, l=localStorage.length; i<l; i++){
    //   this.set(localStorage.key(i));
    // }
    // localStorage.clear();
    // this.endPropertyChanges();
  }
});