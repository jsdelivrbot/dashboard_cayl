(function() {
  var cssText = `
    #page #content #pageData {
      padding-top: 20px;
    }
    #page #custom-dom-header {
      position: fixed;
      top: 50px;
      width: 100%;
      height: 60px;
      line-height: 60px;
      background: url(https://cdn.rawgit.com/waganse/dashboard_cayl/5a064c3b/img/bg_white_transparent70.png);
      border-bottom: 2px solid #A99A82;
      -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
      z-index: 9997;
    }
    #page #custom-dom-header.active {
      height: 30px;
      line-height: 30px;
    }
    #page #custom-dom-header .header .brand-logo {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: scale(0.3) translate(-50%, -50%);
          -ms-transform: scale(0.3) translate(-50%, -50%);
              transform: scale(0.3) translate(-50%, -50%);
      -webkit-transform-origin: left top;
          -ms-transform-origin: left top;
              transform-origin: left top;
      transition: all .4s;
    }
    #page #custom-dom-header.active .header .brand-logo {
      -webkit-transform: scale(0.2) translate(-50%, -50%);
          -ms-transform: scale(0.2) translate(-50%, -50%);
              transform: scale(0.2) translate(-50%, -50%);
    }
    #page #custom-dom-header .header .sprite-logo {
      position: absolute;
      top: 50%;
      right: 20px;
      background-image: url("https://cdn.rawgit.com/waganse/dashboard_cayl/ca139427/img/sprite.png");
      background-position: 0px 0px;
      width: 197px;
      height: 73px;
      -webkit-transform: scale(0.4) translateY(-50%);
          -ms-transform: scale(0.4) translateY(-50%);
              transform: scale(0.4) translateY(-50%);
      -webkit-transform-origin: right top;
          -ms-transform-origin: right top;
              transform-origin: right top;
      transition: all .4s;
    }
    #page #custom-dom-header.active .header .sprite-logo {
      -webkit-transform: scale(0.3) translateY(-50%);
          -ms-transform: scale(0.3) translateY(-50%);
              transform: scale(0.3) translateY(-50%);
    }
    #page #custom-dom-header .sprite-icon_top {
      background-image: url("https://cdn.rawgit.com/waganse/dashboard_cayl/ca139427/img/sprite.png");
      background-position: 0px -73px;
      width: 83px;
      height: 83px;
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