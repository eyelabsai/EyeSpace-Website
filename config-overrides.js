const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@store': 'src/store',
    '@components': 'src/components',
    '@services': 'src/services',
    '@views': 'src/views',
  })(config);

  return config;
};