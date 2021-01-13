<?php

namespace App\Containers\Layout\Widgets\Menu;

use Closure;
use App\Containers\Layout\Widgets\Widget;

use App\Containers\Layout\Contracts\Buildable;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;

/**
 * @todo: Class Widget Sidebar Menu Link (tag a trong li của ul menu)
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
 * - isActive: hàm kiểm tra li có đang kích hoạt hay không
 * @author: Croco
 * @since: 16-05-2020
*/
class MenuLink extends Widget
{
    
    // class MenuItem chứa link
    protected $parent = null;
    // url của tag A
    protected $href = "#";
    // cờ xác định có hiển thị icon up/down hay không
    protected $caret = null;
    // icon menu
    protected $icon = null;

    /**
     * @var string
     */
    // protected $view = 'layout::widgets.sidebar.link';

    /**
     * Link constructor.
     * @param MenuItem (li chứa link)
     * @param Closure|MenuItem|Renderable|Buildable|Htmlable|View|string nội dung tag a
     * @param string url tag a
     */
    public function __construct(MenuItem $parent = null, $content = "", $href = "") {

        $this->setParent($parent);
        if($content instanceof Closure) {

            call_user_func($content, $this);
        } else if(!empty($content)) {

            $this->append($content);
        }

        if(!empty($href)) {

            if($href instanceof MenuIcon) {

                $this->icon($href);
            } else if(is_string($href)) {

                $this->href($href);
            }
        }
    }

    /**
     * @todo: Hàm hỗ trợ set lại lớp MenuItem cha chứa link
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
     * @todo: Hàm hỗ trợ lấy lớp MenuItem cha chứa link
     * @author: Croco
     * @since: 16-05-2020
     * @return MenuItem
    */
    public function getParent() {

        return $this->parent;
    }

    /**
     * @todo: Hàm hỗ trợ set, get đường dẫn của link
     * @author: Croco
     * @since: 16-05-2020
     * @param string url
     * @return string|MenuLink
    */
    public function href($href = null) {

        if($href === null) {

            return $this->href;
        }
        $this->href = $href;
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ set, get đường dẫn của link bằng route name
     * > https://laravel.com/docs/7.x/helpers#method-route
     * @author: Croco
     * @since: 16-05-2020
     * @param string route name
     * @param array param cho route
     * @param boolean absolute url
     * @return MenuLink
    */
    public function route(string $routeName, array $parameters = [], bool $absolute = null) {

        $this->href(route($routeName, $parameters, $absolute));
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ set, get lại cờ xác định có hiển thị icon up/down hay không
     * -> trường hợp MenuItem có menu con thì gọi hàm này để hiển thị icon up/down
     * @author: Croco
     * @since: 16-05-2020
     * @param boolean có hiển thị icon up/down hoặc không
     * @return MenuLink|boolean
    */
    public function caret(bool $caret = null) {

        if($caret === null) {

            return $this->caret;
        }
        $this->caret = $caret;
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ add icon cho menu
     * - add tag i có class name = param truyền vào
     * @author: Croco
     * @since: 16-05-2020
     * @param string|MenuIcon|Closure|Buildable|Renderable|Htmlable|View tên class icon hoặc MenuIcon
     * @return MenuIcon|MenuLink
    */
    public function icon($icon = "") {

        if($icon instanceof Closure || is_string($icon)) {

            $icon = $this->createMenuIcon($icon);
        }

        if($icon instanceof MenuIcon) {

            $icon->setParent($this->getParent());
        }

        $this->icon = $icon;
        if($icon instanceof Closure) {

            return $this;
        }
        return $this->icon;
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
     * @return Menu|MenuLink|null
    */
    public function menu($builder = null) {

        $menuItem = $this->getParent();
        if($menuItem) {
            
            $menu = $menuItem->menu($builder);
            if($builder instanceof Closure) {

                return $this;
            }
            return $menu;
        }

        return null;
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

        $this->attribute("href", $this->href);

        // cờ xác định trong item có 1 menu và 1 menu con đang mở
        // thì cho đổi icon caret up|dowm
        $hasMenuExpanded = false;
        // tự động set caret nếu chưa set
        if($this->caret === null) {

            $menuItem = $this->getParent();
            if($menuItem) {
                
                if($menuItem->hasMenu()) {

                    $this->caret(true);
                }

                $hasMenuExpanded = $menuItem->hasMenuExpanded();
            }
        }

        $icon = $this->icon;
        if($icon instanceof Buildable) {

            ob_start();

            $icon->build();

            $icon = ob_get_contents();

            ob_end_clean();
        }

        $data = [
            'elements'        => $this->getElements(),
            "attributes"      => $this->getAttributes(),
            "caret"           => $this->caret,
            "icon"            => $icon,
            "hasMenuExpanded" => $hasMenuExpanded,
            "isActive"        => $this->isActive(),
        ] + ($this->data ?: []);

        return $data;
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
        if(!($builder instanceof MenuIcon)) {

            $menuIcon = new MenuIcon($this->getParent(), $builder);
        }
        $menuIcon->setParent($this->getParent());

        return $menuIcon;
    }
}
