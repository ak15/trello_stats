import Ember from 'ember';

export default Ember.Controller.extend({
  search: '',
  list_ids: [],
  member_ids: [],
  sprint_ids: [],
  quick_filters: [],
  filterNameQueryName: {
    'List Name': 'list_ids',
    'Sprint Label': 'sprint_ids',
    'Member Name': 'member_ids'
  },
  filterNames: Ember.computed(function() {
    return Object.keys(this.get('filterNameQueryName'));
  }),
  cardPerPage: 20,
  selectedFilters: Ember.computed('model', function() {
    let selectedFiltersFromParams = {};
    this.get('filterNames').forEach((filterName) => {
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
    let filterNameQueryName = this.get('filterNameQueryName');
    let filterNames = this.get('filterNames');
    for (var i=0; i < filterNames.lenght; i++) {
      if (filterNameQueryName[filterNames[i]] == queryParam) {
        return keys[i]
      }
    }
  },
  getQueryParamFromFilterName(filterName) {
    return this.get('filterNameQueryName')[filterName];
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
    },
    applyQuickFilter(e) {
      let selectedFilter = $(e.target);
      let selectFilterName = selectedFilter.data('quick-filter-name');
      let quickFilers = this.get('quick_filters');
      if (quickFilers.indexOf(selectFilterName) == -1) {
        quickFilers.pushObject(selectFilterName);
        selectedFilter.addClass('selected');
      } else {
        quickFilers.removeObject(selectFilterName);
        selectedFilter.removeClass('selected');
      }
    }
  }
});
