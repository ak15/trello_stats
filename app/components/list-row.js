import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  actions: {
    handleCategoryChange(value) {
      let list = this.get('list');
      list.set('category', value);
      this.attrs.handleCategoryChange(list);
    }
  }
});
