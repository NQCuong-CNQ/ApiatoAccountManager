<?php

namespace App\Containers\Layout\Widgets\Navbar;

use Closure;
use App\Containers\Layout\Widgets\Menu\MenuLink;

use App\Containers\Layout\Contracts\Buildable;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;

/**
 * @todo: Class Widget Navbar Link (1 menu có link trong danh sách menu của Navbar)
 * - href: hàm hỗ trợ set, get url của link
 * - route: hàm hỗ trợ set url của link bằng route name
 * - caret: hàm set cờ cho phép hiển thị icon up/down
 * - icon: hàm set icon cho item
 * - active: hàm active item hiện tại (cho bôi đậm)
 * - unactive: hàm bỏ active cho item hiện tại
 * - append: hàm add 1 html vào cuối danh sách menu
 * - prepend: hàm add 1 html vào đầu danh sách menu
 * - render: hàm render ra html
 * @author: Croco
 * @since: 16-05-2020
*/
class NavbarLink extends MenuLink
{
    // url của tag A
    protected $href = "javascript:void(0);";
    /**
     * @var string
     */
    protected $view = 'layout::widgets.navbar.nav-link';

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

    /**
     * @todo hàm lấy tên view
     * -> hỗ trợ đủ function để implement Illuminate\Contracts\View\View
     * @author Croco
     * @since 16-05-2020
     * @return string
     */
    public function getName() {

        $type = $this->type();

        // kiểm tra loại item
        if($type) {

            $type = strtolower($type);

            return $this->view . "-" . $type;
        }

        return $this->view;
    }

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
        if(!($builder instanceof NavbarIcon)) {

            $menuIcon = new NavbarIcon($this->getParent(), $builder);
        }
        $menuIcon->setParent($this->getParent());

        return $menuIcon;
    }
}