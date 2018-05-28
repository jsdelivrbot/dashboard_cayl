(function() {

    var tpl = _.template('<header class="header"><svg class="brand-logo"><use xlink:href="#svg-logo1" /></svg><div class="sprite sprite-logo"><img src="https://cdn.rawgit.com/waganse/src_bank/77d00d14/img/t.png" alt=""></div></header>'),
        $parentNode = $('#pageData', parent.document);

    // Render header
    $customNode.append(tpl.menuContainer());

})();