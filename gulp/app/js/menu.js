;(function ($) {
    'use strict';

    // Gnav
    $(function() {
          $('.js-menu-trigger').sideNav({
            edge: 'right'
          });

          // $('.js-menu-trigger').on('click', function() {
          //     $('body').addClass('nav-open');
          //     return false;
          // });

          // $('.js-menu-overlay').on('click', function() {
          //     $('body').removeClass('nav-open');
          // });
    });

})(jQuery);