export function initialize(application) {
  application.inject('controller', 'localStorage', 'service:local-storage');
  application.inject('route', 'localStorage', 'service:local-storage');
}

export default {
  name: 'local-storage',
  initialize
};
