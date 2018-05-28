(function() {

    var tpl = _.template('<div><svg class="sprite-svg"><use xlink:href="#svg-logo1"></div><div class="custom-menu js-menu-container"><a class="custom-menu__trigger js-dropdown-trigger" href="#" data-target="pagemenu-list"><span class="glyphicon glyphicon-menu-hamburger"></span></a><div class="custom-menu__overlay js-overlay"></div><ul id="pagemenu-list" class="custom-menu__list js-dropdown-target"></ul></div>'),
        $parentNode = $('#pageData', parent.document);

    // Render header
    $customNode.append(tpl.menuContainer());

})();