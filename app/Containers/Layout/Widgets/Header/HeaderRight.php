<?php

namespace App\Containers\Layout\Widgets\Header;

use Closure;
use App\Containers\Layout\Widgets\Widget;
use App\Containers\Layout\Widgets\Navbar;

/**
 * @todo: Quản lý content của header bên phải
 * - append: hàm add 1 html vào tag html của logo, thêm vào cuối danh sách
 * - prepend: hàm add 1 html vào tag html của logo, thêm vào đầu danh sách
 * - navbar: hàm khởi tạo navbar
 * - searchInput: hàm khởi tạo input search trên thanh navbar
 * - render: hàm render ra html
 * @author: Croco
 * @since: 16-05-2020
*/
class HeaderRight extends Widget {

    /**
     * @var string
     */
    protected $view = 'layout::widgets.header.header-right';

    /**
     * HeaderRIght constructor.
     * @param Closure|MenuItem|Renderable|Buildable|Htmlable|View|string nội dung trong header bên phải
     */
    public function __construct($content = "") {

        if ($content instanceof Closure) {

            call_user_func($content, $this);
        } else if(!empty($content)) {

            $this->append($content);
        }
    }

    /**
     * @todo hàm khởi tạo navbar
     * - thanh menu trên top
     * @author: Croco
     * @since: 16-05-2020
     * @return Navbar
     */
    public function navbar($navbar = null) {

        if(!($navbar instanceof Navbar)) {

            $navbar = new Navbar($navbar);
        }
        $this->append($navbar);
        return $navbar;
    }

    /**
     * @todo hàm khởi tạo input search
     * - thanh menu trên top
     * @author: Croco
     * @since: 16-05-2020
     * @return Navbar
     */
    public function searchInput($searchInput = null) {

        if(!($searchInput instanceof SearchInput)) {

            $searchInput = new SearchInput($searchInput);
        }
        $this->append($searchInput);
        return $searchInput;
    }

    /**
     * @todo hàm lấy toàn bộ giá trị để push ra view
     * @author: Croco
     * @since: 16-05-2020
     * @return array
     */
    public function getData() {

        $data = [
            'elements' => $this->getElements(),
        ] + ($this->data ?: []);

        return $data;
    }
}
