(function() {

  var cssText = `
    #pageData #custom-dom-groupmenu {
      display: block;
      position: fixed;
      top: 50px;
      right: 0;
      box-shadow: 2px 2px 2px #aaa;
      z-index: 9999;
    }
    #pageData #custom-dom-groupmenu .custom-menu {
      min-height: auto;
      margin-bottom: 0;
    }
    #pageData #custom-dom-groupmenu .custom-menu .custom-menu__list {
      width: 100vw;
      background: #272a46;
      box-shadow: 3px 3px 5px #aaa;
    }
    #pageData #custom-dom-groupmenu .custom-menu .custom-menu__list li {
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    #pageData #custom-dom-groupmenu .custom-menu .custom-menu__list li a {
      display: block;
      line-height: 40px;
      padding: 0 15px;
      word-wrap: break-word;
      white-space: nowrap;
    }
    #pageData #custom-dom-groupmenu .custom-menu .custom-menu__list li a:hover {
      background: #383838;
      color: #cccece;
      text-decoration: none;
    }
    #pageData #custom-dom-groupmenu .custom-menu__group ol {
      position: absolute;
      top: 42px;
      height: 0;
      opacity: 0;
      overflow: hidden;
      transition: opacity .4s;
      background: #f5f5f5;
      z-index: 1;
    }
    #pageData #custom-dom-groupmenu .custom-menu__group.open ol {
      height: auto;
      opacity: 1;
    }
    #pageData #custom-dom-groupmenu .custom-menu .custom-menu__overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgb(30, 30, 30, 0.3);
    }
    #pageData #custom-dom-groupmenu .custom-menu.open .custom-menu__overlay {
      display: block;
    }
    #pageData #custom-dom-groupmenu .custom-menu.open .custom-menu__overlay img {
      width: 150px;
      opacity: .4;
      position: absolute;
      right: 50px;
      bottom: 50px;
    }
  `,
  customCssText =+ window.css || '',
  $parentNode = $('#pageData', parent.document),
  $tmpDom = $('<div>', {
      id: 'custom-dom-groupmenu',
      class: 'custom-dom'
  }),
  $cutomDom,
  $style01 = $('<style>', {
      type: 'text/css'
  });

  // Override styling
  cssText += customCssText;

  // Init for custom node
  $parentNode.find('#custom-dom-groupmenu').remove();
  $parentNode.append($tmpDom);
  $customDom = $parentNode.find('#custom-dom-groupmenu');

  // CSS insert
  $style01.html(cssText);
  $customDom.append($style01);

})();