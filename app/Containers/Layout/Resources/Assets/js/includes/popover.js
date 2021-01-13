$(function() {

    /**
     * @todo hàm gắn popover
     */
    var showPopovers = $.showPopovers = function showPopovers() {

        $('[data-toggle="popover"]').not(this).popover('hide');
        $(this).popover('show');
    }

    /**
     * @todo hàm ẩn tất cả popover khi click ra ngoài popover
     */
    var hidePopover = $.hidePopover = function hidePopover(e) {

        $('[data-toggle="popover"]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    }
});