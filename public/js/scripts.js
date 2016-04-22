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



