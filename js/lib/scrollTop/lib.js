(function() {

    var $parent = $(parent.document),
        newUIFlag = ($('#pageData', parent.document).length)? false : true,
        $parentNode = (newUIFlag)? $('.grid-tab', parent.document) : $('#pageData', parent.document),
        $customNode = $parentNode.find('#custom-dom-scrolltop');

    $parentNode.on('scroll', function() {
        var y = $parentNode.scrollTop(),
            wy = $parent.height() / 3;

        if (y > wy) {
            $customNode.addClass('active');
        } else {
            $customNode.removeClass('active');
        }
    });

    $customNode.on('click', function() {
        $parentNode.animate({
            scrollTop: 0
        });
    });

})();