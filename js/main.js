(()=>{
    const $nav = $('#js-nav');
    const $btn = $('.toggle_btn');
    const $menu = $('.menu-contents');
    const $mask = $('#mask');
    const OPEN_CLASS = 'is-open';

    // btn open/close
    $btn.on('click', function() {
        if (!$nav.hasClass(OPEN_CLASS)) {
            $nav.addClass(OPEN_CLASS);
        } else {
            $nav.removeClass(OPEN_CLASS);
        }
    });
    // mask close
    $mask.on('click', function() {
        $nav.removeClass(OPEN_CLASS);
    });
    // menu close
    $menu.on('click', function() {
        $nav.removeClass(OPEN_CLASS);
    });
})(jQuery);