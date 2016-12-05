// polyfills for older browsers
require('core-js/client/shim');

// libraries needed by Angular
require('zone.js/dist/zone');
require('reflect-metadata');

// library for module loading
require('systemjs/dist/system.src');

// Polyfill needed for platforms without Promise and Collection support
require('es6-shim');

require('./polyfills');