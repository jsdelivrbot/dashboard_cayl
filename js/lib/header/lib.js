(function() {

    var tpl = _.template('<header class="header"><svg class="brand-logo"><use xlink:href="#svg-logo1" /></svg><div class="sprite sprite-logo"><img src="https://cdn.rawgit.com/waganse/src_bank/77d00d14/img/t.png" alt=""></div></header>'),
        $pageNode = $('#pageData', parent.document),
        $customNode = $pageNode.find('#custom-dom-header');

    // Render header
    $customNode.append(tpl());

    // Scroll event
    $pageNode.on('scroll', function() {
        var y = $pageNode.scrollTop();

        if (y > 30) {
            $customNode.addClass('active');
        } else {
            $customNode.removeClass('active');
        }
    });


})();