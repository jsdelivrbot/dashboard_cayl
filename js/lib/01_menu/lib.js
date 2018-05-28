(function() {

    var tpl = {
            menuContainer: _.template('<div class="custom-menu js-menu-container"><a class="custom-menu__trigger js-dropdown-trigger" href="#" data-target="pagemenu-list"><span class="glyphicon glyphicon-menu-hamburger"></span></a><div class="custom-menu__overlay js-overlay"></div><ul id="pagemenu-list" class="custom-menu__list js-dropdown-target"></ul></div>'),
            menuList: _.template('<li><a href="#" class="js-menu" data-idx="<%= idx %>"><%= name %></a></li>')
        },
        $topNode = $('body', top.document),
        $parentNode = $('#pageData', parent.document),
        $customNode = $parentNode.find('#custom-dom-menu'),
        menuList = $topNode.find('.page-item'),
        menuItemList = [],
        $menuContainer,
        $targetParentMenu = $('.page-item', top.document),
        $trigger;

    // Get menu items
    _.each(menuList, function(menu) {
        menuItemList.push($.trim($(menu).find('.item-name').text()));
    });

    // Render menu items
    $customNode.append(tpl.menuContainer());
    $menuContainer = $customNode.find('#pagemenu-list');
    $menuContainer.empty();

    _.each(menuItemList, function(item, i) {
        $menuContainer.append(tpl.menuList({ idx: i, name: item }));
    });

    // Event listener for each item
    $customNode.find('.js-menu').on('click', function(e) {
        var idx = $(e.currentTarget).data('idx');

        $targetParentMenu.eq(idx).find('.page-handler').trigger('click');

        return false;
    });

    // Toggle menu
    $trigger = $customNode.find('.js-dropdown-trigger');
    $trigger.on('click', function(e) {
        var targetId = $(e.currentTarget).data('target'),
            $target = $customNode.find('#' + targetId);

        $target.slideToggle();
        $customNode.find('.js-menu-container').toggleClass('open');
        return false;
    });

    // Overlay
    $customNode.find('.js-overlay').on('click', function() {
        $trigger.trigger('click');
    });

})();