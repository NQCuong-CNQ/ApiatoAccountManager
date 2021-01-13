<?php

namespace App\Containers\Layout\Widgets\Sidebar;

use Closure;
use App\Containers\Layout\Widgets\Menu\MenuItem as BaseMenuItem;

/**
 * @todo: Class Widget Sidebar Menu Item (1 menu trong danh sách menu của sidebar)
 * - append: hàm add 1 html vào cuối danh sách menu
 * - prepend: hàm add 1 html vào đầu danh sách menu
 * - render: hàm render ra html
 * - menu: hàm tạo menu con
 * - heading: hàm đánh dấu item hiện tại là heading
 * - link: hàm tạo html link
 * - icon: hàm tạo 1 html link có icon
 * - isHeading: hàm kiểm tra có phải là heading hay không
 * - hasMenu: hàm kiểm tra trong content có menu con hay không
 * - hasLink: hàm kiểm tra trong content có link hay không
 * - active: hàm set trạng thái item là đang active
 * - unactive: hàm set trạng thái item là không active
 * - isActive: hàm kiểm tra trạng thái item có đang active hay không
 * @author: Croco
 * @since: 16-05-2020
*/
class MenuItem extends BaseMenuItem
{
    /**
     * @var string
     */
    protected $view = 'layout::widgets.sidebar.menu-item';

    /**
     * @todo: Hàm hỗ trợ khởi tạo menu con cho item hiện tại
     * - phần tử ul trong li
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|Menu|MenuItem|MenuLink|MenuIcon|Buildable|Renderable|Htmlable|View|string builder menu
     * @return Menu
    */
    protected function createMenu($builder) {

        $menu = $builder;
        if(!($builder instanceof Menu)) {

            $menu = new Menu($builder, $this);
        }
        $menu->setParent($this);

        return $menu;
    }

    /**
     * @todo: Hàm hỗ trợ khởi tạo menu con cho item hiện tại
     * - phần tử ul trong li
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|MenuLink|MenuIcon|Buildable|Renderable|Htmlable|View|string builder menu link
     * @param string|MenuIcon url của tag a hoặc icon
     * @return MenuLink
    */
    protected function createMenuLink($builder = null, $href = "") {

        $menuLink = $builder;
        if(!($builder instanceof Link)) {

            $menuLink = new Link($this, $builder, $href);
        }
        $menuLink->setParent($this);

        return $menuLink;
    }
}
