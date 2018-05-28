(function() {

    var $parent = $(parent.document),
        $pageNode = $('#pageData', parent.document),
        $customNode = $pageNode.find('#custom-dom-scrolltop');

    $pageNode.on('scroll', function() {
        var y = $pageNode.scrollTop(),
            wy = $parent.height() / 3;

        if (y > wy) {
            $customNode.addClass('active');
        } else {
            $customNode.removeClass('active');
        }
    });

    $customNode.on('click', function() {
        $pageNode.animate({
            scrollTop: 0
        });
    });

})();