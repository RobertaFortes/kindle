var Slideshow = {

    paginate: function () {
        var slides = $('div.slide', '#slideshow', 'p.slide'),
            total = slides.length;
        $('#slideshow-nav-total').text(total);
        slides.each(function (i) {
            $(this).data('index', i + 1);
        });
    },

    navigate: function () {
        $('a', '#slideshow-nav').click(function (e) {
            e.preventDefault();
            var $a = $(this);
            var slide = $($a.attr('href'));
            var wrapper = $('#slideshow-wrapper');

            wrapper.animate({
                left: -slide.position().left
            }, 1000, 'linear', function () {
                $('#slideshow-nav-current').text(slide.data('index'));
                $a.addClass('active').siblings('a').removeClass('active');
            });

        });
    },

    init: function () {
        this.paginate();
        this.navigate();
    }

};

$(function () {
    Slideshow.init();
});

$(document).ready(function() {

        var updateFeed = function() {
            var initialQuery = $('#query').val();
            initialQuery = initialQuery.replace(" ", "");
            var queryTags = initialQuery.split(",");
            $('.social-feed-container').socialfeed({
                // FACEBOOK
                facebook: {
                    accounts: queryTags,
                    limit: 2,
                    access_token: '150849908413827|a20e87978f1ac491a0c4a721c961b68c'
                },
                // GOOGLEPLUS
                google: {
                    accounts: queryTags,
                    limit: 2,
                    access_token: 'AIzaSyDAelFmJhg6BSUbSLe8UT7s-G53tL4_KRg'
                },
                // Twitter
                twitter: {
                    accounts: queryTags,
                    limit: 2,
                    consumer_key: 'qzRXgkI7enflNJH1lWFvujT2P', // make sure to have your app read-only
                    consumer_secret: '8e7E7gHuTwyDHw9lGQFO73FcUwz9YozT37lEvZulMq8FXaPl8O', // make sure to have your app read-only
                },
                // VKONTAKTE
                vk: {
                    accounts: queryTags,
                    limit: 2,
                    source: 'all'
                },
                // INSTAGRAM
                instagram: {
                    accounts: queryTags,
                    limit: 2,
                    client_id: '88b4730e0e2c4b2f8a09a6184af2e218',
                    access_token: ''
                },

                // GENERAL SETTINGS
                length: 200,
                show_media: true,
                // Moderation function - if returns false, template will have class hidden
                moderation: function(content) {
                    return (content.text) ? content.text.indexOf('fuck') == -1 : true;
                },
                //update_period: 5000,
                // When all the posts are collected and displayed - this function is evoked
                callback: function() {
                    console.log('all posts are collected');
                }
            });
        };

        updateFeed();
        $('#button-update').click(function() {
            //first, get rid of old data/posts.
            $('.social-feed-container').html('');

            //then load new posts
            updateFeed();
        });

    });

