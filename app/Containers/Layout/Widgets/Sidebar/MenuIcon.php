<?php

namespace App\Containers\Layout\Widgets\Sidebar;

use App\Containers\Layout\Widgets\Menu\MenuIcon as BaseMenuIcon;

/**
 * @todo: Class Widget Sidebar Menu Icon (hiển thị icon của menu trong danh sách sidebar)
 * - append: hàm add 1 html vào cuối danh sách menu
 * - prepend: hàm add 1 html vào đầu danh sách menu
 * - render: hàm render ra html
 * - class: hàm set class cho icon
 * - menu: hàm tạo 1 menu con của item hiện tại
 * - link: hàm set url cho item hiện tại
 * - active: hàm active item hiện tại (cho bôi đậm)
 * - unactive: hàm bỏ active cho item hiện tại
 * @author: Croco
 * @since: 16-05-2020
*/
class MenuIcon extends BaseMenuIcon
{
    /**
     * @var string
     */
    protected $view = 'layout::widgets.sidebar.menu-icon';

}
