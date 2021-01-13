<?php

namespace App\Containers\Layout\Widgets\Sidebar;

use Closure;
use App\Containers\Layout\Widgets\Menu\Menu as BaseMenu;

/**
 * @todo: Class Widget Sidebar Menu (danh sách menu bên trái trong sidebar)
 * - append: hàm add 1 item vào cuối danh sách menu
 * - prepend: hàm add 1 item vào đầu danh sách menu
 * - render: hàm render ra html
 * - item: hàm tạo ra 1 item mới add vào danh sách menu
 * - heading: hàm tạo ra 1 item heading mới add vào danh sách menu
 * - link: hàm tạo ra 1 item dạng link add vào danh sách menu
 * - menu: hàm tạo menu con add vào sidebar
 * - icon: hàm tạo ra 1 item con có icon
 * - hasItems: hàm kiểm tra menu có phần tử nào không
 * - collapse: hàm đóng menu (ẩn các item)
 * - expand: hàm hiển thị các item
 * - isCollapsed: hàm kiểm tra menu đang đóng hay mở
 * @author: Croco
 * @since: 16-05-2020
*/
class Menu extends BaseMenu {

    /**
     * @var string
     */
    protected $view = 'layout::widgets.sidebar.menu';

    /**
     * @todo: Hàm hỗ trợ khởi tạo item cho menu
     * - phần tử li trong ul
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|MenuItem|MenuLink|MenuIcon|Buildable|Renderable|Htmlable|View|string builder item
     * @return MenuItem
    */
    protected function createMenuItem($builder = null) {

        $menuItem = $builder;
        if(!($builder instanceof MenuItem)) {

            $menuItem = new MenuItem($this, $builder);
        }
        $menuItem->setParent($this);

        return $menuItem;
    }
}
