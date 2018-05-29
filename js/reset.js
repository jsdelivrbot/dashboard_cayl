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
        href: 'https://cdn.rawgit.com/waganse/dashboard_cayl/7fd1244a/css/reset.css'
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
  $customNode.append('<div class="custom-menu__cog"><a href="#" class="js-switch-cog"><span class="icon-edit"></span></a></div>');

  // CSS insert
  $style01.html(cssText);
  $parentNode.append($style01);
  $parentNode.append($style02);

})();