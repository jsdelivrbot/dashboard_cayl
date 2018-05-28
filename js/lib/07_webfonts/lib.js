(function() {

    var $parent = $(parent.document),
        $pageNode = $('#pageData', parent.document),
        $widgets = $pageNode.find('.widget-item'),
        $titles = $widgets.find('.new-widget-title').find('.left-part'),
        iconClass = window.iconClass && window.iconClass != '' ? window.iconClass : 'icon-circle-thin',
        $icon = $('<i>', {
        	class: iconClass
        });

    $titles.find('i').remove();
    $titles.prepend($icon);

})();