import $ from 'jquery';
import './styles/index.scss';

window.jQuery = $;
window.$ = $;

const Foundation = require('foundation-sites/js/foundation/foundation.js');
require('foundation-sites/js/foundation/foundation.accordion.js');

$(document).ready(() => {
  Foundation.set_namespace = () => {
    this.global.namespace = '';
  };

  console.log(andrew);

  $(document).foundation();
});
