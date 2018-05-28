(function() {

  var cssText = `
  `,
  $parentNode = $('#pageData', parent.document),
  $tmpDom = $('<div>', {
    id: 'custom-dom-webfonts',
    class: 'custom-dom'
  }),
  $cutomDom,
  $style = $('<style>', {
    type: 'text/css'
  });

  // Init for custom node
  $parentNode.append($tmpDom);
  $customDom = $parentNode.find('#custom-dom-webfonts');

  // CSS insert
  $style.html(cssText);
  $customDom.append($style);

})();