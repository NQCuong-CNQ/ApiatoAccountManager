import MetisMenu from 'metismenu';

$.fn.metisMenu = MetisMenu.jQueryInterface;
$.fn.metisMenu.Constructor = MetisMenu;

$(function () {

    // Sidebar Menu
    setTimeout(function () {
        $(".vertical-nav-menu").metisMenu();
    }, 100);
});