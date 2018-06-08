(function() {

  var cssText = `
  `;

  var newUIFlag = ($('#pageData', parent.document).length)? false : true,
      $parentNode = (newUIFlag)? $('.grid-tab', parent.document) : $('#pageData', parent.document),
      $customNode = $('<div>', {
        id: 'custom-dom'
      }),
      $style = $('<link>', {
        rel: 'stylesheet',
        href: 'https://cdn.rawgit.com/waganse/dashboard_cayl/e80a082/css/reset.css'
      });

  // Init
  $parentNode.find('#custom-dom').remove();

  // Custom DOM
  $parentNode.append($customNode);

  // CSS insert
  $style.html(cssText);
  $parentNode.append($style);

})();