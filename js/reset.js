(function() {

  var cssText = `
  `;
  ///////////////////////////////////////////////////////////
  var $parentBody = $('body', parent.document),
      $parentNode = $('#pageData', parent.document),
      $customNode = $('<div>', {
        id: 'custom-dom'
      }),
      $style = $('<link>', {
        rel: 'stylesheet',
        href: 'https://cdn.rawgit.com/waganse/dashboard_cayl/e80a082/css/reset.css'
      });

  // Init
  $parentBody.find('#custom-dom').remove();

  // Custom DOM
  $parentNode.append($customNode);

  // CSS insert
  $style01.html(cssText);
  $parentNode.append($style);

})();