(function() {

    var $parent = $(parent.document),
        $pageNode = $('#pageData', parent.document),
        $widgets = $pageNode.find('.widget-item'),
        $titles = $widgets.find('.new-widget-title').find('.left-part'),
        iconClass = window.iconClass && window.iconClass != '' ? window.iconClass : 'dicon-spinner10',
        $icon = $('<i>', {
        	class: iconClass
        });

    $.each($titles, function() {
        $this = $(this),
        $title = $.trim($this.find('.title-label').text());

        if ($title != '') {
            $this.find('i').remove();
            $this.prepend($icon);
        }
    });

})();