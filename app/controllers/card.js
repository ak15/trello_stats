import Ember from 'ember';

export default Ember.Controller.extend({
  search: '',
  list_ids: [],
  member_ids: [],
  sprint_ids: [],
  filterNames: ['lists', 'sprints', 'members'],
  cardPerPage: 20,
  selectedFilters: Ember.computed('model', function() {
    let selectedFiltersFromParams = {};
    this.filterNames.forEach((filterName) => {
      selectedFiltersFromParams[filterName] = this.get(this.getQueryParamFromFilterName(filterName));
    });
    return selectedFiltersFromParams;
  }),
  paginationRequired: Ember.computed('model', function() {
    return this.get('model').get('length') >= this.get('cardPerPage');
  }),
  filters: Ember.computed('model.meta.filters', function() {
    return this.get('model').get('meta').filters;
  }),
  getFilterNameFromQueryParam(queryParam) {
    return Ember.String.pluralize(queryParam.replace('_ids'));
  },
  getQueryParamFromFilterName(filterName) {
    return `${Ember.String.singularize(filterName)}_ids`;
  },
  actions: {
    handleSearchTermChange(e) {
      if (e.keyCode == 13) {
        this.set('search', e.target.value);
      }
    },
    handleFilterChange(selectedFilterIdInGroups) {
      Object.keys(selectedFilterIdInGroups).forEach((filterName) => {
        let queryParam = this.getQueryParamFromFilterName(filterName);
        this.set(queryParam, selectedFilterIdInGroups[filterName]);
      });
    },
    handlePointsChange(cardMember, updatedPoint) {
      if (cardMember.get('individualsPoint') != updatedPoint) {
        cardMember.set('individualsPoint', updatedPoint);
        cardMember.save();
      }
    }
  }
});
