import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  getByValue: Ember.inject.service(),
  selectedCategory: Ember.computed('categories', 'list.category', function() {
    if (!this.get('isEditable')) {
      return this.get('getByValue').getKey(
        this.get('categories'), this.get('list').get('category'));
    }
  }),
  actions: {
    handleCategoryChange(value) {
      let list = this.get('list');
      list.set('category', value);
      this.attrs.handleCategoryChange(list);
    }
  }
});
