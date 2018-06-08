(function() {

  var cssText = `
    #pageData #custom-dom-scrolltop {
      display: block;
      width: 60px;
      height: 60px;
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: url(https://cdn.rawgit.com/waganse/dashboard_cayl/81109573/img/icon_top.png) no-repeat;
      z-index: 9999;
      background-size: 60px;
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
  `,
  newUIFlag = ($('#pageData', parent.document).length)? false : true,
  $parentNode = (newUIFlag)? $('.grid-tab', parent.document) : $('#pageData', parent.document),
  $tmpDom = $('<div>', {
    id: 'custom-dom-scrolltop',
    class: 'custom-dom'
  }),
  $cutomDom,
  $style = $('<style>', {
    type: 'text/css'
  });

  // Init for custom node
  $parentNode.find('#custom-dom-scrolltop').remove();
  $parentNode.append($tmpDom);
  $customDom = $parentNode.find('#custom-dom-scrolltop');

  // CSS insert
  $style.html(cssText);
  $customDom.append($style);

})();