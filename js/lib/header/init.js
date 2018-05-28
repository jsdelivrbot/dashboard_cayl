(function() {
  var cssText = `
    #page #content #pageData {
      padding-top: 100px !important;
    }
    #page #custom-dom-header {
      position: fixed;
      top: 50px;
      right: 0;
      width: 100%;
      height: 80px;
      background: url(https://cdn.rawgit.com/waganse/src_bank/50b2df10/img/bg_white_transparent70.png) repeat;
      box-shadow: 2px 2px 2px #aaa;
      z-index: 9999;
    }
  `,
  customCssText = window.css || '',
  $parentNode = $('#pageData', parent.document),
  $tmpDom = $('<div>', {
    id: 'custom-dom-header',
    class: 'custom-dom'
  }),
  $cutomDom,
  $style01 = $('<style>', {
    type: 'text/css'
  });

  // Override styling
  cssText += customCssText;

  // Init for custom node
  $parentNode.find('#custom-dom-header').remove();
  $parentNode.append($tmpDom);
  $customDom = $parentNode.find('#custom-dom-header');

  // CSS insert
  $style01.html(cssText);
  $customDom.append($style01);

})();