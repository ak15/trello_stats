export function initialize(application) {
  application.inject('controller', 'authentication', 'service:authentication');
  application.inject('route', 'authentication', 'service:authentication');
}

export default {
  name: 'authentication',
  initialize
};
