import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$('#filter-select-list').searchableOptionList({
      maxHeight: '300px',
      texts: {
        searchplaceholder: 'Filter by list, sprint and members'
      }
    });
  },
  actions: {
    handleFilterSelection(e) {
      let optgroups = this.$('#filter-select-list').find('optgroup');
      let selectedFilterIdInGroups = {};
      optgroups.each(function() {
        let groupName = $(this).attr('label');
        selectedFilterIdInGroups[groupName] = $(this).find('option:selected').map(function() {
          return $(this).data('val');
        }).get();
      });
      this.sendAction('filterChanged', selectedFilterIdInGroups);
    }
  }
});
