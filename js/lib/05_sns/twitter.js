(function() {

    var container = document.getElementById('sns-twitter'),
        sourceType = window.sourceType || 'profile',
        screenName = window.screenName || 'DatoramaJapan',
        width = window.width || 300,
        tweetLimit = window.tweetLimit || 4
        theme = window.theme || 'light';

    twttr.widgets.createTimeline({
            sourceType: sourceType,
            screenName: screenName
        },
        container,
        {
            width: width,
            tweetLimit: tweetLimit,
            theme: theme
        }
    );
})();