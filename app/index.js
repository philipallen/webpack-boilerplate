/**
 * Application entry point
 */
var $ = require('../node_modules/jquery/dist/jquery.js');
window.jQuery = $;
window.$ = $;
require('../node_modules/foundation-sites/js/foundation/foundation.js');
require('../node_modules/foundation-sites/js/foundation/foundation.accordion.js');
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================
$(document).ready(function () {
    //Fix for a strange bug in Foundation, where it changed the data-... tags to data-Times-...
    Foundation.set_namespace = function () { this.global.namespace = ''; };
    $(document).foundation();
});