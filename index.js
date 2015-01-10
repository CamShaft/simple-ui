/**
 * Setup the environment
 */

if (typeof document !== 'undefined') {
  var scripts = document.getElementsByTagName('script');
  var src = scripts[scripts.length - 1].getAttribute('src');
  window.__webpack_public_path__ = src.substr(0, src.lastIndexOf('/') + 1);
}

/**
 * Module dependencies
 */

var inherits = require('util').inherits;
var DEVELOPMENT = process.env.NODE_ENV === 'development';

/**
 * Expose the PoeApp
 */

module.exports = PoeApp;

/**
 * Create a PoeApp
 *
 * @param {Object} routes
 * @param {String} name
 */

function PoeApp(routes, name) {
  // TODO load the hyper package
  // TODO load the feature flags
  if (DEVELOPMENT) window.app = this;
}

/**
 * Expose debugging in development
 */

if (DEVELOPMENT) PoeApp.prototype.debug = require('debug');
