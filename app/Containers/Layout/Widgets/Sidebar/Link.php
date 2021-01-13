<?php

namespace App\Containers\Layout\Widgets\Sidebar;

use Closure;
use App\Containers\Layout\Widgets\Menu\MenuLink;

/**
 * @todo: Class Widget Sidebar Menu Item (1 menu trong danh sách menu của sidebar)
 * - append: hàm add 1 html vào cuối danh sách menu
 * - prepend: hàm add 1 html vào đầu danh sách menu
 * - render: hàm render ra html
 * - href: hàm hỗ trợ set, get url của link
 * - route: hàm hỗ trợ set url của link bằng route name
 * - caret: hàm set cờ cho phép hiển thị icon up/down
 * - icon: hàm set icon cho item
 * - menu: hàm tạo ra menu con cho item hiện tại
 * - active: hàm active item hiện tại (cho bôi đậm)
 * - unactive: hàm bỏ active cho item hiện tại
 * @author: Croco
 * @since: 16-05-2020
*/
class Link extends MenuLink
{
    // url của tag A
    protected $href = "#";
    /**
     * @var string
     */
    protected $view = 'layout::widgets.sidebar.link';

    /**
     * @todo: Hàm hỗ trợ khởi tạo menu con cho item hiện tại
     * - phần tử i chứa icon trong li
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|MenuIcon|Buildable|Renderable|Htmlable|View|string builder icon
     * @return MenuIcon
    */
    protected function createMenuIcon($builder = "") {

        $menuIcon = $builder;
        if(!($builder instanceof MenuIcon)) {

            $menuIcon = new MenuIcon($this->getParent(), $builder);
        }
        $menuIcon->setParent($this->getParent());

        return $menuIcon;
    }
}
