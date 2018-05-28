(function() {

  var cssText = `
    #pageData #custom-dom-fullvideo {
      position: fixed;
      top: 50px;
      left: 0;
      width: 100vw;
      height: 100vh;
      opacity: .6;
    }
    #pageData #custom-dom-fullvideo .covervid-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
  `,
  customCssText = window.css || '',
  $parentNode = $('#pageData', parent.document),
  $tmpDom = $('<div>', {
    id: 'custom-dom-fullvideo',
    class: 'custom-dom'
  }),
  $cutomDom,
  $style = $('<style>', {
    type: 'text/css'
  });

  // Override styling
  cssText += customCssText;

  // Init for custom node
  $parentNode.find('#custom-dom-fullvideo').remove();
  $parentNode.prepend($tmpDom);
  $customDom = $parentNode.find('#custom-dom-fullvideo');

  // CSS insert
  $style.html(cssText);
  $customDom.append($style);

})();