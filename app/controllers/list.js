import Ember from 'ember';

export default Ember.Controller.extend({
  categories: Ember.computed('model.meta.categories', function() {
    return this.get('model').get('meta').categories;
  }),
  actions: {
    handleCategoryChange(list) {
      if (list.get('hasDirtyAttributes')) {
        let category = list.get('category');
        let id = list.get('id');

        this.get('model').forEach(function(list) {
          if (list.get('category') == category && list.get('id') != id) {
            list.set('category', null);
          }
        });

        list.save().catch((response) => {
          this.get('errorHandler').showErrors(response);
        });
      }
    }
  }
});
