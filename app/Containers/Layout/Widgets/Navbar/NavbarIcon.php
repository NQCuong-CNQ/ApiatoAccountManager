<?php

namespace App\Containers\Layout\Widgets\Navbar;

use Closure;
use App\Containers\Layout\Widgets\Menu\MenuIcon;

/**
 * @todo: Class Widget Navbar Icon (hiển thị icon của menu trong danh sách Navbar)
 * - class: hàm set class cho icon
 * - link: hàm set url cho item hiện tại
 * - active: hàm active item hiện tại (cho bôi đậm)
 * - unactive: hàm bỏ active cho item hiện tại
 * - append: hàm add 1 html vào cuối danh sách menu
 * - prepend: hàm add 1 html vào đầu danh sách menu
 * - render: hàm render ra html
 * @author: Croco
 * @since: 16-05-2020
*/
class NavbarIcon extends MenuIcon
{
    
    /**
     * @var string
     */
    protected $view = 'layout::widgets.navbar.nav-icon';

    /**
     * @todo hàm hỗ trợ set, get loại item
     * @author Croco
     * @since 16-05-2020
     * @param string loại item
     * @return string|NavbarItem
     */
    public function type($type = null) {

        return $this->getParent()->type($type);
    }
}