(function() {

    var tpl = {
            container: _.template('<ol class="list-group list-group-flush js-link-container"></ol>'),
            item: _.template('<li class="list-group-item"><a href="#js-link-<%= idx %>" class="js-internallink" data-pos="<%= pos %>"><%= name %></a></li>')
        },
        $parent = $(parent.document),
        $pageNode = $('#pageData', parent.document),
        $customNode = $pageNode.find('#custom-dom-internallink'),
        $widgetList = $pageNode.find('.widget-item'),
        offset = window.scrollOffset || 10;

    // Get widget collection
    $customNode.append(tpl.container);

    _.each($widgetList, function(widget, i) {
        var $widget = $(widget),
            obj = {
                idx: i,
                name: $widget.find('.title-label').text(),
                pos: $widget.offset().top
            };

        if (i > 0) {
            // $widget.prop('id', 'js-link-' + i);
            $customNode.find('.js-link-container').append(tpl.item(obj));
        }
    });

    // $pageNode.scrollspy({
    //     target: $customNode,
    //     offset: 70
    // });

    // Event handler
    $pageNode.find('.js-internallink').on('click', function(e) {
        var pos = $(e.currentTarget).data('pos') - 0,
            targetPos = pos - offset - 120;

console.log(targetPos);
        $pageNode.animate({
            scrollTop: targetPos
        });

        e.preventDefault();
    });
})();