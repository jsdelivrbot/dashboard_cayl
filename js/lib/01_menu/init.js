(function() {
  var cssText = `
    #page #custom-dom-header {
      position: fixed;
      top: 50px;
      right: 0;
      width: 100%;
      height: 80px;
      background: url(https://cdn.rawgit.com/waganse/sandbox/d04210f8/img/logo.svg) 50% 50% no-repeat, url(http://cdn.backgroundhost.com/backgrounds/subtlepatterns/leather_1.png) repeat;
      background-size: 150px auto, auto;
      box-shadow: 2px 2px 2px #aaa;
      z-index: 9999;
    }
    #page #custom-dom-header .custom-menu {
      position: absolute;
      top: 28px;
      right: 25px;
    }
    #page #custom-dom-header .custom-menu .custom-menu__list {
      display: none;
      position: absolute;
      top: 30px;
      right: 0;
      width: 250px;
      background: #f7f7f7;
      max-height: 80vh;
      overflow: scroll !important;
      box-shadow: 3px 3px 5px #aaa;
    }
    #page #custom-dom-header .custom-menu .custom-menu__trigger .glyphicon {
      color: #303030;
      font-size: 2rem;
    }
    #page #custom-dom-header .custom-menu .custom-menu__list li a {
      display: block;
      line-height: 40px;
      padding: 0 10px;
    }
    #page #custom-dom-header .custom-menu .custom-menu__list li a:hover {
      background: #383838;
      color: #cccece;
      border-left: 3px solid #cccece;
      text-decoration: none;
    }
    #page #custom-dom-header .custom-menu .custom-menu__overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgb(0, 0, 0, 0.4);
    }
    #page #custom-dom-header .custom-menu.open .custom-menu__overlay {
      display: block;
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