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

    var show_per_page = 6;
    var number_of_items = $('#list').children('div').size();
    var number_of_pages = Math.ceil(number_of_items / show_per_page);

    $('body').append('<div class=controls></div><input id=current_page type=hidden><input id=show_per_page type=hidden>');
    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);

    var navigation_html = '<a class="prev" onclick="previous()">Prev</a>';
    var current_link = 0;
    while (number_of_pages > current_link) {
        navigation_html += '<a class="page" onclick="go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
        current_link++;
    }
    navigation_html += '<a class="next" onclick="next()">Next</a>';

   
    $('.controls .page:first').addClass('active');

    $('#list').children().css('display', 'none');
    $('#list').children().slice(0, show_per_page).css('display', 'block');

});



function go_to_page(page_num) {
    var show_per_page = parseInt($('#show_per_page').val(), 0);

    start_from = page_num * show_per_page;

    end_on = start_from + show_per_page;

    $('#list').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

    $('.page[longdesc=' + page_num + ']').addClass('active').siblings('.active').removeClass('active');

    $('#current_page').val(page_num);
}



function previous() {

    new_page = parseInt($('#current_page').val(), 0) - 1;
    //if there is an item before the current active link run the function
    if ($('.active').prev('.page').length == true) {
        go_to_page(new_page);
    }

}

function next() {
    new_page = parseInt($('#current_page').val(), 0) + 1;
    //if there is an item after the current active link run the function
    if ($('.active').next('.page').length == true) {
        go_to_page(new_page);
    }

}

