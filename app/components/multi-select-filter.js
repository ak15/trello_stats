import Ember from 'ember';

export default Ember.Component.extend({
  didRender: function() {
    let self = this;
    this.$('#filter-select-list').searchableOptionList({
      maxHeight: '300px',
      texts: {
        searchplaceholder: 'Filter by list, sprint and members'
      }
    });
    this.$('#filter-select-list').change(function() {
      let optgroups = $('#filter-select-list').find('optgroup');
      let selectedFilterIdInGroups = {};
      optgroups.each(function() {
        let groupName = $(this).attr('label');
        selectedFilterIdInGroups[groupName] = $(this).find('option:selected').map(function() {
          return $(this).data('val');
        }).get();
      });
      self.sendAction('filterChanged', selectedFilterIdInGroups);
    });
  }
});
