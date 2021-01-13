<?php

namespace App\Containers\Layout\Widgets\Menu;

use Closure;
use App\Containers\Layout\Widgets\Widget;

use App\Containers\Layout\Contracts\Buildable;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;

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
class MenuIcon extends Widget
{
    
    // class MenuItem chứa icon
    protected $parent = null;

    /**
     * @var string
     */
    // protected $view = 'layout::widgets.sidebar.menu-icon';

    /**
     * Menu constructor.
     * @param MenuItem (li chứa icon)
     * @param Closure|Renderable|Buildable|Htmlable|View|string tên class icon hoặc html
     */
    public function __construct(MenuItem $parent = null, $className = "") {

        $this->setParent($parent);
        if($className instanceof Closure) {

            call_user_func($className, $this);
        } else if(!empty($className)) {

            if(is_string($className)) {

                $this->class($className);
            } else {

                $this->append($className);
            }
        }
    }

    /**
     * @todo: Hàm hỗ trợ set lại lớp MenuItem cha chứa icon
     * - để hỗ trợ menu đa cấp
     * @author: Croco
     * @since: 16-05-2020
     * @param MenuItem
     * @return mixed
    */
    public function setParent(MenuItem $parent = null) {

        $this->parent = $parent;
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ lấy lớp MenuItem cha chứa icon
     * @author: Croco
     * @since: 16-05-2020
     * @param MenuItem
     * @return mixed
    */
    public function getParent() {

        return $this->parent;
    }

    /**
     * @todo: Hàm hỗ trợ tạo 1 element link (<li><a>link</a></li>)
     * append vào content của item hiện tại
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|MenuLink|Buildable|Renderable|Htmlable|View|string builder
     * @param string đường dẫn của tag a
     * @return MenuItem|MenuLink|MenuIcon|null
    */
    public function link($builder = null, $href = "") {

        $menuItem = $this->getParent();
        if(!($menuItem instanceof MenuItem)) {

            return null;
        }

        if($builder instanceof MenuLink) {

            if($href instanceof MenuIcon) {

                $builder->icon($href);
            } else if(is_string($href)) {

                $builder->href($href);
            }
            $builder->setParent($menuItem);
            return $menuItem;
        }

        $links = $menuItem->getLinks();
        if(!$links || count($links) <= 0 || !$links[0]) {

            return null;
        }

        $link = $links[0];
        if(!empty($href)) {

            if(is_string($href)) {

                $link->href($href);
            }
        }

        if($builder instanceof Closure) {

            call_user_func($builder, $link);
            return $this;
        }

        $link->append($builder);
        
        return $link;
    }

    /**
     * @todo: Hàm hỗ trợ tạo 1 menu con add vào item hiện tại
     * - trong tình huống menu đa cấp
     * - hàm nhận vào Menu hoặc Closure
     *      - nếu là Menu thì set parent cho menu là item hiện tại
     *          appent menu (ul) vào content (li) của item
     *      - nếu là Closure thì tạo ra 1 item mới và gọi lại hàm để build item
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|Menu|Buildable|Renderable|Htmlable|View|string builder
     * @return Menu|mixed
    */
    public function menu($builder = null) {

        $menuItem = $this->getParent();
        $menu = $builder;
        return $menuItem->menu($builder);
    }

    /**
     * @todo: Hàm hỗ trợ set trạng thái menu là đang active
     * -> bôi đậm menu lên
     * @author: Croco
     * @since: 16-05-2020
     * @return Menu
    */
    public function active() {

        $this->getParent()->active();
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ set trạng thái menu là không active
     * @author: Croco
     * @since: 16-05-2020
     * @return Menu
    */
    public function unactive() {

        $this->getParent()->unactive();
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ kiểm tra menu item đang active hay không
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean
    */
    public function isActive() {

        return $this->getParent()->isActive();
    }

    /**
     * @todo hàm lấy toàn bộ giá trị để push ra view
     * @author: Croco
     * @since: 16-05-2020
     * @return array
     */
    public function getData() {

        $data = [
            'elements'   => $this->getElements(),
            "attributes" => $this->getAttributes(),
            "isActive"   => $this->isActive(),
        ] + ($this->data ?: []);

        return $data;
    }
}
