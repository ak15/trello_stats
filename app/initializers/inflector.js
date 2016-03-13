export function initialize(application) {
  Ember.Inflector.inflector.irregular('leave', 'leaves');
}

export default {
  name: 'inflector',
  initialize
};
