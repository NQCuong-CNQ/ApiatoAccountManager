<?php

namespace App\Containers\Layout\Widgets;

use Closure;
use App\Containers\Layout\Widgets\Menu\Menu;

use App\Containers\Layout\Widgets\Navbar\NavbarItem;

/**
 * @todo: quản lý thanh navigation menu bar trên header
 * - append: hàm add 1 html vào tag html của logo, thêm vào cuối danh sách
 * - prepend: hàm add 1 html vào tag html của logo, thêm vào đầu danh sách
 * - render: hàm render ra html
 * @author: Croco
 * @since: 16-05-2020
*/
class Navbar extends Menu {

    /**
     * @var string
     */
    protected $view = 'layout::widgets.navbar';

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
        if(!($builder instanceof NavbarItem)) {

            $menuItem = new NavbarItem($this, $builder);
        }
        $menuItem->setParent($this);

        return $menuItem;
    }
}
