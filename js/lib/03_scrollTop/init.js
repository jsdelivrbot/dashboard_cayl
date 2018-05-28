(function() {

  var cssText = `
    #pageData #custom-dom-scrolltop {
      display: block;
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: #272a46;
      border-radius: 50%;
      z-index: 9999;
      transform: translateY(150%);
      transition: all .5s;
      cursor: pointer;
    }
    #pageData #custom-dom-scrolltop:hover {
      opacity: .6;
    }
    #pageData #custom-dom-scrolltop.active {
      transform: translateY(0);
    }
    #pageData.cog-mode #custom-dom-scrolltop {
      display: none;
    }
    #pageData #custom-dom-scrolltop .scroll-top {
      width: 60px;
      height: 60px;
      position: relative;
    }
    #pageData #custom-dom-scrolltop .scroll-top svg {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 50px;
      fill: #f7f7f7;
    }
  `,
  customCssText = window.css || '',
  $parentNode = $('#pageData', parent.document),
  $tmpDom = $('<div>', {
    id: 'custom-dom-scrolltop',
    class: 'custom-dom'
  }),
  $cutomDom,
  $style01 = $('<style>', {
    type: 'text/css'
  });

  // Override styling
  cssText += customCssText;

  // Init for custom node
  $parentNode.find('#custom-dom-scrolltop').remove();
  $parentNode.append($tmpDom);
  $customDom = $parentNode.find('#custom-dom-scrolltop');

  // CSS insert
  $style01.html(cssText);
  $customDom.append($style01);

})();