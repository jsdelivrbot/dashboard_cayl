(function() {

    var tpl = _.template('<div class="covervid-wrapper"><video class="covervid-video" autoplay loop poster="img/video-fallback.png"><source src="videos/clouds.webm" type="video/webm"><source src="<%= url %>" type="video/mp4"></video></div>'),
        $pageNode = $('#pageData', parent.document),
        $customNode = $pageNode.find('#custom-dom-fullvideo'),
        url = window.videoUrl || 'https://rawgit.com/waganse/sandbox/master/video/datorama.mp4';

    $customNode.append(tpl({ url: url }));
    $customNode.find('.covervid-video').coverVid(960, 450);

})();