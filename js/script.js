$(document).ready(function() {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function checkAnimation() {
        $('.animate-on-scroll').each(function() {
            if (isElementInViewport(this)) {
                var animation = $(this).data('animation');
                $(this).addClass('animated').addClass(animation);
            }
        });
    }

    checkAnimation();

    $(window).on('scroll', function() {
        checkAnimation();
    });
});