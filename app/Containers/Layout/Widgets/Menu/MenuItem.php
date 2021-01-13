<?php

namespace App\Containers\Layout\Widgets\Menu;

use Closure;
use App\Containers\Layout\Widgets\Widget;

use App\Containers\Layout\Contracts\Buildable;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;

/**
 * @todo: Class Widget Sidebar Menu Item (áp dụng cho lu trong ul)
 * - append: hàm add 1 html vào cuối danh sách menu
 * - prepend: hàm add 1 html vào đầu danh sách menu
 * - render: hàm render ra html
 * - menu: hàm tạo menu con
 * - heading: set cờ li này là tiêu đề
 * - link: tạo ra tag a trong li
 * - icon: tạo ra tag i hiển thị icon trong li (icon này nằm trong tag a)
 * - active: hàm set cờ li đang kích hoạt để in đậm
 * - unactive: hàm set cờ li không kích hoạt
 * - isActive: hàm kiểm tra li này có đang kích hoạt hay không
 * - hasMenu: hàm kiểm tra trong li có menu con hay không (ul trong li, menu đa cấp)
 * - hasLink: hàm kiểm tra trong li có link (tag a hay không)
 * @author: Croco
 * @since: 16-05-2020
*/
abstract class MenuItem extends Widget
{
    
    // class Menu chứa các items
    protected $parent = null;
    // cờ xác định item có phải là heading hay không
    protected $isHeading = false;
    // danh sách menu con
    protected $childrenMenus = [];
    // danh sách link
    protected $links = [];
    // cờ xác định menu đang active
    protected $actived = null;

    /**
     * @var string
     */
    // protected $view = 'layout::widgets.sidebar.menu-item';

    /**
     * Menu constructor.
     * @param Menu menu chứa item (ul chứa li)
     * @param Closure|Menu|MenuLink|MenuIcon|Renderable|Buildable|Htmlable|View|string nội dung trong tag li
     */
    public function __construct(Menu $parent = null, $content = "") {

        $this->setParent($parent);
        if($content instanceof Closure) {

            call_user_func($content, $this);
        } else if($content instanceof Menu) {

            $this->menu($content);
        } else if(!empty($content)) {

            $this->append($content);
        }
    }

    /**
     * @todo: Hàm hỗ trợ set lại lớp menu cha
     * - để hỗ trợ menu đa cấp
     * @author: Croco
     * @since: 16-05-2020
     * @param Menu
     * @return mixed
    */
    public function setParent(Menu $parent = null) {

        $this->parent = $parent;
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ lấy lớp menu cha
     * @author: Croco
     * @since: 16-05-2020
     * @return Menu
    */
    public function getParent() {

        return $this->parent;
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
     * @param Closure|Menu|MenuItem|MenuLink|MenuIcon|Buildable|Renderable|Htmlable|View|string builder
     * @return Menu|MenuItem
    */
    public function menu($builder = null) {

        $menu = $builder;
        if($builder instanceof Menu) {

            $menu->setParent($this);
        } else {

            $menu = $this->createMenu($builder);
            $menu->setParent($this);
        }

        // thêm menu con (ul) vào item (li) hiện tại
        $this->append($menu);

        if($builder instanceof Closure) {

            return $this;
        }
        
        return $menu;
    }

    /**
     * @todo: Hàm hỗ trợ set cờ item này là heading (thẻ li để hiển thị tiêu đề)
     * -> trong menu ở đầu danh sách có tiêu đề của mỗi nhóm menu, nếu item này là heading thì in đậm lên làm tiêu đề
     * - nếu truyền vào là boolean thì set cờ heading theo param
     * - ngoài ra append content vào item (li)
     * @author: Croco
     * @param Boolean|View|Renderable|Buildable|Htmlable|string nội dung heading
     * @since: 16-05-2020
     * @return MenuItem
    */
    public function heading($content = "") {

        $isHeading = true;
        if(is_bool($content)) {

            $isHeading = $content;
        } else if(!empty($content)) {

            $this->append($content);
        }
        $this->isHeading = $isHeading;
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ tạo 1 element link (<li><a>link</a></li>)
     * append vào content của item hiện tại
     * - nếu truyền vào là icon MenuIcon hoặc html 
     *      thì tạo ra item chứa link và link chứa icon hoặc html truyền vào
     * - nếu truyền vào MenuLink thì set lại href cho MenuLink theo param
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|MenuLink|Buildable|Renderable|Htmlable|View|string builder
     * @param string url của tag a
     * @return MenuLink|MenuItem
    */
    public function link($builder = null, $href = "") {

        if($builder instanceof MenuItem) {

            return $builder->link($href);
        }

        if($builder instanceof MenuLink) {

            $this->append($builder);
            if($href instanceof MenuIcon) {

                $builder->icon($href);
            } else if($href && is_string($href)) {

                $builder->href($href);
            }
            
            return $this;
        }

        $link = $this->createMenuLink($builder, $href);
        
        $this->append($link);
        if($builder instanceof Closure) {

            return $this;
        }

        return $link;
    }

    /**
     * @todo: Hàm hỗ trợ add item icon cho menu
     * @author: Croco
     * @since: 16-05-2020
     * @param string|MenuIcon|Closure|Buildable|Renderable|Htmlable|View tên class icon hoặc html icon
     * @param string|MenuLink|Closure|Buildable|Renderable|Htmlable|View nội dung của icon
     * @return MenuLink|MenuItem
    */
    public function icon($icon = "", $content = "") {

        if($icon instanceof MenuItem) {

            return $icon->icon($content);
        }

        if($icon instanceof MenuLink) {

            return $icon->icon($content);
        }

        if($icon instanceof MenuIcon) {

            $icon->setParent($this);
        }

        if($content instanceof Closure) {

            $link = $this->link();
        } else {

            $link = $this->link($content);
        }
        $link->icon($icon);

        if($content instanceof Closure) {

            call_user_func($content, $link);
            return $this;
        }
        return $link;
    }

    /**
     * @todo: Hàm hỗ trợ kiểm tra item này có phải là heading hay không
     * -> ngoài view nếu là heading thì cho thêm class để in đậm lên
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean
    */
    public function isHeading() {

        return $this->isHeading;
    }

    /**
     * @todo: Hàm hỗ trợ set trạng thái menu là đang active
     * -> bôi đậm menu lên
     * @author: Croco
     * @since: 16-05-2020
     * @return Menu
    */
    public function active() {

        $this->actived = true;
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ set trạng thái menu là không active
     * @author: Croco
     * @since: 16-05-2020
     * @return Menu
    */
    public function unactive() {

        $this->actived = false;
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ kiểm tra menu item đang active hay không
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean
    */
    public function isActive() {

        return $this->actived;
    }

    /**
     * @todo: Hàm hỗ trợ render 1 element ra html
     * => hàm này override lại hàm renderElement của trait HasElements
     *      bổ sung kiểm tra nếu element là MenuItem
     *      thì kiểm tra item có phần tử nào không, nếu có thì mới render
     * @author: Croco
     * @param Renderable|Buildable|Htmlable|string $element
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
            'elements'        => $this->getElements(),
            "attributes"      => $this->getAttributes(),
            "isHeading"       => $this->isHeading,
            "hasMenu"         => $this->hasMenu(),
            "hasLink"         => $this->hasLink(),
            "actived"         => $this->isActive(),
            "hasMenuExpanded" => $this->hasMenuExpanded()
        ] + ($this->data ?: []);

        return $data;
    }

    /**
     * @todo hàm add thêm element vào danh sách
     * thêm vào cuối danh sách
     * => hàm này là override lại hàm trên Widget (trait HasElements) bổ sung kiểm tra
     *      nếu là Link hoặc Menu con thì add vào mảng để kiểm tra nếu có menu con thì bổ sung thêm icon
     * @author: Croco
     * @since: 16-05-2020
     * @param Row
     * @return mixed
     */
    public function appendElement($element) {
        
        if($element instanceof Menu) {

            $element->setParent($this);
            $this->childrenMenus[] = $element;
        } else if($element instanceof MenuLink) {

            $this->links[] = $element;
            $element->setParent($this);
        } else if($element instanceof MenuIcon) {

            $element->setParent($this);
        }
        parent::appendElement($element);
        return $this;
    }

    /**
     * @todo hàm add thêm element vào danh sách
     * thêm vào đầu danh sách
     * => hàm này là override lại hàm trên Widget (trait HasElements) bổ sung kiểm tra
     *      nếu là Link hoặc Menu con thì add vào mảng để kiểm tra nếu có menu con thì bổ sung thêm icon
     * @author: Croco
     * @since: 16-05-2020
     * @param $content
     * @return $this
     */
    public function prependElement($element) {
        
        if($element instanceof Menu) {

            $element->setParent($this);
            array_unshift($this->childrenMenus, $element);
        } else if($element instanceof MenuLink) {

            array_unshift($this->links, $element);
            $element->setParent($this);
        } else if($element instanceof MenuIcon) {

            $element->setParent($this);
        }
        return parent::prependElement($element);
    }

    /**
     * @todo hàm kiểm trong content của item có link hay không
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean
     */
    public function hasLink() {

        return count($this->links) > 0;
    }

    /**
     * @todo hàm hỗ trợ lấy danh sách content có loại là link (tag A)
     * @author: Croco
     * @since: 16-05-2020
     * @return array Link
     */
    public function getLinks() {

        return $this->links;
    }

    /**
     * @todo hàm kiểm trong content của item có menu con hay không
     * -> dùng để add thêm icon nếu có menu con
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean
     */
    public function hasMenu() {

        $childrenMenus = array_filter($this->childrenMenus, function($menu) {

            return $menu->hasItems();
        });
        return count($childrenMenus) > 0;
    }

    /**
     * @todo hàm hỗ trợ kiểm tra có menu con đang mở rộng hay không
     * -> nếu icon chỉ duy nhất 1 menu con thì mới cho icon caret là đang mở rộng
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean
     */
    public function hasMenuExpanded() {

        $childrenMenus = array_filter($this->childrenMenus, function($menu) {

            return $menu->hasItems();
        });

        if($childrenMenus && count($childrenMenus) == 1) {

            $menu = $childrenMenus[0];
            return !$menu->isCollapsed();
        }
        return false;
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
        if(!($builder instanceof MenuLink)) {

            $menuLink = new MenuLink($this, $builder, $href);
        }
        $menuLink->setParent($this);

        return $menuLink;
    }
}
