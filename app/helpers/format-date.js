import Ember from 'ember';

export function formatDate([date, format = "MMM Do YYYY"]) {
  return moment(date).format(format)
}

export default Ember.Helper.helper(formatDate);

