export function initialize(application) {
  application.inject('controller', 'errorHandler', 'service:error-handler');
}

export default {
  name: 'error-handler',
  initialize
};
