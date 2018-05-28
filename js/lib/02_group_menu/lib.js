(function() {

    var tpl = {
            menuContainer: _.template('<div class="custom-menu navbar navbar-default js-menu-container"><div class="custom-menu__overlay js-overlay"><img src="https://cdn.rawgit.com/waganse/sandbox/b4253982/img/logo_2.svg" alt=""></div><ol class="custom-menu__list js-menu-list nav navbar-nav"><% _.each(groups, function(group, i) { %><li class="custom-menu__group js-menu-group"><a href="#" class="js-dropdown-trigger data-target="menu-group-<%= i %>"><i class="glyphicon glyphicon-chevrom-down"></i><%= group.group_name %></a><ol id="menu-group-<%= i %>"><% _.each(group.items, function(item) { %><li><a href="#" class="js-menu" data-idx="<%= item.idx %>"><%= item.name  %></a></li><% }) %></ol></li><% }); %></ol></div>')
        },
        $topNode = $('body', top.document),
        $parentNode = $('#pageData', parent.document),
        $customNode = $parentNode.find('#custom-dom-groupmenu'),
        $targetParentMenu = $('.page-item', top.document),
        $trigger,
        $menuContainer,
        $menuGroup,
        menuList = $topNode.find('.page-item'),
        menuItemList = [],
        tmpMenuList = [];

    // Get menu items
    _.each(menuList, function(menu, i) {
        menuItemList.push({ idx: i, name: $.trim($(menu).find('.item-name').text())});
    });

    // Set menu index
    _.each(menuObj, function(menugroup) {
        _.each(menugroup.items, function(item) {
            tmpMenuList.push(item);
        });
    });

    _.each(tmpMenuList, function(item) {
        var orgMenu =  _.findWhere(menuItemList, { name: item.name });

        item.idx = (orgMenu)? orgMenu.idx : 0;
    });

    // Render menu items
    $customNode.append(tpl.menuContainer({ groups: menuObj }));

    // Toggle menu
    $trigger = $customNode.find('.js-dropdown-trigger');
    $menuContainer = $customNode.find('.js-menu-container');
    $menuGroup = $customNode.find('.js-menu-group');

    $trigger.on('click', function(e) {
        $menuGroup.removeClass('open');
        $(e.currentTarget).parent().addClass('open');
        $menuContainer.addClass('open');

        return false;
    });

    // Overlay
    $customNode.find('.js-overlay').on('click', function() {
        $menuGroup.removeClass('open');
        $menuContainer.removeClass('open');
    });

    // Event listener for each item
    $customNode.find('.js-menu').on('click', function(e) {
        var idx = $(e.currentTarget).data('idx');

        $targetParentMenu.eq(idx).find('.page-handler').trigger('click');
        return false;
    });

})();