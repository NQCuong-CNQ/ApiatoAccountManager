<?php

namespace App\Containers\Layout\Widgets\Navbar;

use Closure;
use App\Containers\Layout\Widgets\Menu\MenuItem;

use App\Containers\Layout\Contracts\Buildable;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;

use App\Containers\Layout\Widgets\Navbar;

/**
 * @todo: Class Widget Navbar Item (1 menu trong danh sách menu của Navbar)
 * - append: hàm add 1 html vào cuối danh sách menu
 * - prepend: hàm add 1 html vào đầu danh sách menu
 * - render: hàm render ra html
 * - link: hàm tạo html link
 * - icon: hàm tạo 1 html link có icon
 * - hasMenu: hàm kiểm tra trong content có menu con hay không
 * - hasLink: hàm kiểm tra trong content có link hay không
 * - active: hàm set trạng thái item là đang active
 * - unactive: hàm set trạng thái item là không active
 * - isActive: hàm kiểm tra trạng thái item có đang active hay không
 * - type: hàm set get type: loại item navbar
 * @author: Croco
 * @since: 16-05-2020
*/
class NavbarItem extends MenuItem
{
    
    /**
     * @var string
     */
    protected $view = 'layout::widgets.navbar.nav-item';
    /**
     * loại navbar: popover|dropdown
     * @var string
     */
    protected $type = '';
    // các loại item được hỗ trợ
    protected $supportedTypes = ["dropdown", "popover"];

    /**
     * @todo hàm hỗ trợ set, get loại item
     * @author Croco
     * @since 16-05-2020
     * @return string|NavbarItem
     */
    public function type($type = null) {

        if($type === null) {

            return $this->type;
        }

        $type = strtolower($type);
        if(in_array($type, $this->supportedTypes)) {

            $this->type = $type;
        }

        return $this;
    }

    /**
     * @todo hàm lấy tên view
     * -> hỗ trợ đủ function để implement Illuminate\Contracts\View\View
     * @author Croco
     * @since 16-05-2020
     * @return string
     */
    public function getName() {

        // kiểm tra loại item
        if($this->type) {

            $type = strtolower($this->type);

            return $this->view . "-" . $type;
        }

        return $this->view;
    }

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
        if(!($builder instanceof Navbar)) {

            $menu = new Navbar($builder, $this);
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
        if(!($builder instanceof NavbarLink)) {

            $menuLink = new NavbarLink($this, $builder, $href);
        }
        $menuLink->setParent($this);

        return $menuLink;
    }
}
