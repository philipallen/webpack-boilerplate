import $ from 'jquery';
import './styles/index.scss';

window.jQuery = $;
window.$ = $;

require('foundation-sites/js/foundation/foundation.js');
require('foundation-sites/js/foundation/foundation.accordion.js');

$(document).ready(() => {
  $(document).foundation();
});
