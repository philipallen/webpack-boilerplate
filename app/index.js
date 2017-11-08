/**
 * Application entry point
 */
var $ = require('../node_modules/jquery/dist/jquery.js');
window.jQuery = $;
window.$ = $;
require('../node_modules/foundation-sites/js/foundation/foundation.js');
require('../node_modules/foundation-sites/js/foundation/foundation.magellan.js');
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================
$(document).ready(function () {
    //Fix for a strange bug in Foundation, where it changed the data-... tags to data-Times-...
    Foundation.set_namespace = function () { this.global.namespace = ''; };
    $(document).foundation({
        "magellan-expedition": {
            active_class: 'active', // specify the class used for active sections
            threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
            destination_threshold: 20, // pixels from the top of destination for it to be considered active
            throttle_delay: 50, // calculation throttling to increase framerate
            fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
            offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
        }
    });
});