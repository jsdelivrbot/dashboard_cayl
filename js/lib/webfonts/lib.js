(function() {

    var $parent = $(parent.document),
        $pageNode = $('#pageData', parent.document),
        $widgets = $pageNode.find('.widget-item'),
        $titles = $widgets.find('.new-widget-title').find('.left-part'),
        iconClass = window.iconClass && window.iconClass != '' ? window.iconClass : 'dicon-spinner10',
        $icon = $('<i>', {
        	class: 'dicon ' + iconClass
        });

    $titles.find('.dicon').remove();

    setTimeout(function() {
        $.each($titles, function() {
            var $this = $(this),
                title = $.trim($this.find('.title-label').text());

            if (title != '') {
                console.log($this);
                $this.prepend($icon);
            }
        });
    }, 10000)

})();