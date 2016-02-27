import Ember from 'ember';

export function filterSelected(params/*, hash*/) {
  let filterIds = params[0][params[1]];
  return filterIds && filterIds.indexOf(params[2]) !== -1;
}

export default Ember.Helper.helper(filterSelected);
