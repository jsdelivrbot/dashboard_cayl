(function() {

  var cssText = `
    #pageData #custom-dom-internallink {
      display: block;
      position: fixed;
      bottom: 30px;
      right: 15px;
    }
    #pageData.cog-mode #custom-dom-internallink {
      display: none;
    }
    #pageData #custom-dom-internallink .list-group {
      margin: 0;
    }
    #pageData #custom-dom-internallink .list-group-item {
      padding: 0;
    }
    #pageData #custom-dom-internallink .list-group-item a {
      display: block;
      padding: 10px 15px;
      text-decoration: none;
      color: #303030;
    }
    #pageData #custom-dom-internallink .list-group-item a:hover {
      text-decoration: none;
      background: #303030;
      color: #f7f7f7;
    }
  `,
  customCssText = window.css || '',
  $parentNode = $('#pageData', parent.document),
  $tmpDom = $('<div>', {
    id: 'custom-dom-internallink',
    class: 'custom-dom'
  }),
  $cutomDom,
  $style01 = $('<style>', {
    type: 'text/css'
  });

  // Init
  $parentNode.find('#custom-dom-internallink').remove();

  // Override styling
  cssText += customCssText;

  // Init for custom node
  $parentNode.find('#custom-dom-internallink').remove();
  $parentNode.append($tmpDom);
  $customDom = $parentNode.find('#custom-dom-internallink');

  // CSS insert
  $style01.html(cssText);
  $customDom.append($style01);

})();