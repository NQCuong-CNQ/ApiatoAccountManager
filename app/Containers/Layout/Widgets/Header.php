<?php

namespace App\Containers\Layout\Widgets;

use Closure;
use App\Containers\Layout\Widgets\Header\HeaderLeft;
use App\Containers\Layout\Widgets\Header\HeaderRight;

/**
 * @todo: Class Widget Header (hiển thị thanh header)
 * bao gồm widget Logo, HeaderLeft, HeaderRight, SearchInput, Navbar
 * - left: khởi tạo nội dung cho header bên trái
 * - right: khởi tạo nội dung cho header bên phải
 * - navbar: hàm khởi tạo thanh navbar
 * - searchInput: hàm khởi tạo input search trên thanh navbar
 * - append: hàm add 1 html vào tag html của logo, thêm vào cuối danh sách
 * - prepend: hàm add 1 html vào tag html của logo, thêm vào đầu danh sách
 * - render: hàm render ra html
 * @author: Croco
 * @since: 16-05-2020
*/
class Header extends Widget {

    // nội dung header bên trái
    protected $headerLeft = null;
    // nội dung header bên phải
    protected $headerRight = null;

    /**
     * @var string
     */
    protected $view = 'layout::widgets.header';

    /**
     * Header constructor.
     * @param Closure|MenuItem|Renderable|Buildable|Htmlable|View|string nội dung header
     */
    public function __construct($content = "") {

        if ($content instanceof Closure) {

            call_user_func($content, $this);
        } else if(!empty($content)) {

            $this->append($content);
        }
    }

    /**
     * @todo hàm khởi tạo header bên trái
     * @author: Croco
     * @since: 18-05-2020
     * @param Closure|Renderable|Buildable|Htmlable|View|string nội dung của header left
     * @return mixed
     */
    public function left($content = "") {

        if($content instanceof HeaderLeft) {

            $this->append($content);
            return $this;
        }

        if(!$this->headerLeft) {

            $headerLeft = new HeaderLeft($content);
            $this->append($headerLeft);
        }

        if($content instanceof Closure) {

            return $this;
        }
        return $this->headerLeft;
    }

    /**
     * @todo hàm khởi tạo header bên phải
     * @author: Croco
     * @since: 18-05-2020
     * @param Closure|Renderable|Buildable|Htmlable|View|string nội dung của header left
     * @return mixed
     */
    public function right($content = "") {

        if($content instanceof HeaderRight) {

            $this->append($content);
            return $this;
        }

        if(!$this->headerRight) {

            $headerRight = new HeaderRight($content);
            $this->append($headerRight);
        }

        if($content instanceof Closure) {

            return $this;
        }
        return $this->headerRight;
    }

    /**
     * @todo hàm khởi tạo navbar
     * - thanh menu trên top
     * @author: Croco
     * @since: 16-05-2020
     * @return Navbar
     */
    public function navbar($navbar = null) {

        return $this->left()->navbar($navbar);
    }

    /**
     * @todo hàm khởi tạo input search
     * - thanh menu trên top
     * @author: Croco
     * @since: 16-05-2020
     * @return Navbar
     */
    public function searchInput($searchInput = null) {

        return $this->left()->searchInput($searchInput);
    }

    /**
     * @todo hàm lấy toàn bộ giá trị để push ra view
     * để trait Viewable render dữ liệu ra view
     * @author: Croco
     * @since: 16-05-2020
     * @return array
     */
    public function getData() {

        $data = [
            'headerLeft' => $this->headerLeft,
            'elements' => $this->getElements(),
        ] + ($this->data ?: []);

        return $data;
    }

    /**
     * @todo hàm add thêm element vào danh sách để hiển thị
     * thêm vào cuối danh sách
     * => hàm này là override lại hàm trên Widget bổ sung kiểm tra
     *      nếu là headerLeft hoặc headerRight thì set vào biến
     *          để cố định grid ở header
     * @author: Croco
     * @since: 18-05-2020
     * @param HeaderLeft|HeaderRight|Buildable|Renderable|Htmlable|View|string nội dung hiển thị ở header
     * @return mixed
     */
    public function appendElement($content) {
        
        if($content instanceof HeaderLeft) {

            $this->headerLeft = $content;
            return $this;
        }

        if($content instanceof HeaderRight) {

            $this->headerRight = $content;
            return $this;
        }

        return parent::appendElement($content);
    }

    /**
     * @todo hàm add thêm element vào danh sách để hiển thị
     * thêm vào đầu danh sách
     * => hàm này là override lại hàm trên Widget bổ sung kiểm tra
     *      nếu là headerLeft hoặc headerRight thì set vào biến
     *          để cố định grid ở header
     * @author: Croco
     * @since: 18-05-2020
     * @param HeaderLeft|HeaderRight|Buildable|Renderable|Htmlable|View|string nội dung hiển thị ở header
     * @return $this
     */
    public function prepend($content) {
        
        if($content instanceof HeaderLeft) {

            $this->headerLeft = $content;
            return $this;
        }

        if($content instanceof HeaderRight) {

            $this->headerRight = $content;
            return $this;
        }

        return parent::prepend($content);
    }
}
