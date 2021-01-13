<?php

namespace App\Containers\Layout\Widgets;

use Closure;
use App\Containers\Layout\Traits\HasSidebar;
use App\Containers\Layout\Widgets\Sidebar\Menu;
use App\Containers\Layout\Facades\Layout;

/**
 * @todo: Class Widget sidebar (thanh menu bên trái)
 * - append: hàm add 1 html vào sidebar, thêm vào cuối danh sách
 * - prepend: hàm add 1 html vào sidebar, thêm vào đầu danh sách
 * - render: hàm render ra html
 * - menu: hàm tạo menu add vào sidebar
 * @author: Croco
 * @since: 16-05-2020
*/
class Sidebar extends Widget {

    // quản lý sidebar
    use HasSidebar;

    /**
     * @var string
     */
    protected $view = 'layout::widgets.sidebar';

    /**
     * Navbar constructor.
     * @param Closure callback khởi tạo sidebar
     */
    public function __construct(Closure $callback = null) {
        if ($callback instanceof Closure) {

            $callback($this);
        }
    }

    /**
     * @todo: Hàm hỗ trợ khởi tạo 1 menu add vào cho sidebar
     * - 1 sidebar thì có nhiều menu
     * - input vào Menu hoặc callback
     *      - nếu là callback thì khởi tạo menu và gọi lại callback để tạo các item cho menu
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|Menu 
     * @return Menu|mixed
    */
    public function menu($builder = null) {

        $menu = $builder;
        if(!($builder instanceof Menu)) {

            $menu = new Menu();
        }
        
        // thêm vào sidebar
        $this->append($menu);

        if (is_null($builder)) {

            return $menu;
        }

        if($builder instanceof Closure){

            call_user_func($builder, $menu);
            return $this;
        } 
        
        if($builder) {

            $menu->append($builder);
            return $menu;
        }

        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ render 1 element ra html
     * => hàm này fix lại hàm renderElement của trait HasElements
     *      bổ sung kiểm tra nếu element là Menu
     *      thì kiểm tra Menu có phần tử nào không, nếu có thì mới render
     * @author: Croco
     * @since: 16-05-2020
     * @return string html 
    */
    public function renderElement($element) {

        if($element instanceof Menu) {

            if(!$element->hasItems()) {

                return "";
            }

            return $element->render();
        }

        return parent::renderElement($element);
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

    /**
     * @todo: Hàm hỗ trợ set trạng thái sidebar là đang đóng
     * -> ẩn danh sách menu con
     * @author: Croco
     * @since: 16-05-2020
     * @return Menu
    */
    public function collapse() {

        Layout::collapseSidebar();
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ set trạng thái sidebar là đang mở rộng
     * -> hiển thị hết danh sách menu con
     * @author: Croco
     * @since: 16-05-2020
     * @return Menu
    */
    public function expand() {

        Layout::expandSidebar();
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ kiểm tra sidebar đang hiển thị danh sách item hay đang ẩn
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean
    */
    public function isCollapsed() {

        return Layout::isSidebarCollapsed();
    }
}
