(function() {

  var cssText = `
  `;
  ///////////////////////////////////////////////////////////
  var svgPath = 'https://cdn.rawgit.com/waganse/src_bank/50b2df10/svg/cayl/svg-symbols.svg',
      $parentBody = $('body', parent.document),
      $parentNode = $('#pageData', parent.document),
      $customNode = $('<div>', {
        id: 'custom-dom'
      }),
      $style01 = $('<link>', {
        rel: 'stylesheet',
        href: 'https://cdn.rawgit.com/waganse/dashboard_cayl/4726660/css/reset.css'
      }),
      $style02 = $('<link>', {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
      });

  // SVG
  $.get(svgPath, function(data) {
    $parentBody.prepend(new XMLSerializer().serializeToString(data.documentElement));
  });

  // Custom DOM
  $parentNode.append($customNode);
  $customNode.append('<div class="custom-menu__cog"><div class="custom__overlay js-overlay"><svg class="brand-logo"><use xlink:href="#svg-icon2" /></svg></div></div>');

  // CSS insert
  $style01.html(cssText);
  $parentNode.append($style01);
  $parentNode.append($style02);

  $customNode.find('.js-overlay').on('click', function() {
    $parentNode.removeClass('config');
  });

})();