<?php

namespace App\Containers\Layout\Widgets\Menu;

use Closure;
use App\Containers\Layout\Widgets\Widget;

use App\Containers\Layout\Contracts\Buildable;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;

/**
 * @todo: Class Widget Menu áp dụng cho tag ul
 * - append: hàm add 1 item vào cuối danh sách menu
 * - prepend: hàm add 1 item vào đầu danh sách menu
 * - render: hàm render ra html
 * - item: hàm tạo ra 1 item mới add vào danh sách menu (li)
 * - link: hàm tạo ra 1 item mới có chứa link (li có tag a)
 * - icon: hàm tạo ra 1 item mới có chứa icon (li có tag a trong a có i (icon))
 * - collapse: hàm đóng menu (ẩn các li)
 * - expand: hàm mở menu (hiển thị các li)
 * - isCollapsed: hàm kiểm tra menu đang đóng hay mở
 * - hasActiveItem: hàm kiểm tra trong menu có item nào đang active hay không
 * @author: Croco
 * @since: 16-05-2020
*/
abstract class Menu extends Widget {

    /**
     * item cha
     * - sử dụng menu đa cấp
     * @var MenuItem
     */
    protected $parent = null;
    // cờ xác định menu đang đóng hay mở
    protected $collapsed = true;

    /**
     * @var string
     */
    // protected $view = 'layout::widgets.sidebar.menu';

    /**
     * Menu constructor.
     * @param Closure|MenuItem|MenuLink|MenuIcon|Renderable|Buildable|Htmlable|View|string nội dung tag li
     * @param MenuItem (li chứa menu con)
     */
    public function __construct($content = "", MenuItem $parent = null) {

        $this->setParent($parent);
        if($content instanceof Closure) {

            call_user_func($content, $this);
        } else if(!empty($content)) {

            $this->append($content);
        }
    }

    /**
     * @todo: Hàm hỗ trợ set lại lớp menu cha
     * - để sử dụng menu đa cấp
     * @author: Croco
     * @since: 16-05-2020
     * @param Menu
     * @return mixed
    */
    public function setParent(MenuItem $parent = null) {

        $this->parent = $parent;
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ lấy lớp menu cha
     * - để sử dụng menu đa cấp
     * @author: Croco
     * @since: 16-05-2020
     * @param Menu
     * @return mixed
    */
    public function getParent() {

        return $this->parent;
    }

    /**
     * @todo: Hàm tạo 1 item add vào danh sách menu
     * - nếu truyền vào là callback để build item thì sẽ trả về this để tiếp tục add
     * - nếu truyền vào html hoặc null thì trả về item để xử lý tiếp item đó
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|MenuItem|MenuLink|MenuIcon|Buildable|Renderable|Htmlable|View|string builder item
     * @return MenuItem|mixed
    */
    public function item($builder = null) {

        $menuItem = $this->createMenuItem($builder);

        $this->append($menuItem);
        if($builder instanceof Closure) {

            return $this;
        }
        return $menuItem;
    }

    /**
     * @todo: Hàm hỗ trợ thêm 1 item chứa link ( li có tag A)
     * - nếu truyền vào là item
     *      thì không cần tạo ra item nữa mà add vào menu luôn
     * - nếu truyền vào là callback hoặc html
     *      thì tạo ra item mới, trong item đó add vào link (tag a)
     * @author: Croco
     * @param Closure|MenuItem|MenuLink|MenuIcon|Buildable|Renderable|Htmlable|View|string builder
     * @param MenuLink|string đường dẫn url của tag a
     * @since: 16-05-2020
     * @return MenuLink|Menu
    */
    public function link($builder = null, $href = "") {

        $menuItem = $builder;
        $link = null;

        if($builder instanceof MenuItem) {

            if($href instanceof MenuLink) {

                $link = $href;
                $menuItem->link($link);
            } else {

                $link = $menuItem->link(null, $href);
            }
            $menuItem->setParent($this);
        } else {

            $menuItem = $this->createMenuItem();
            $link = $menuItem->link($builder, $href);
        }
        
        $this->append($menuItem);
        if($builder instanceof Closure) {

            return $this;
        }

        return $link;
    }

    /**
     * @todo: Hàm hỗ trợ add item icon cho menu
     * - nếu truyền vào icon thì không tạo ra icon nữa
     * - nếu truyền vào là chuỗi thì là tên class của icon
     * 
     * - tạo ra 1 item chứa link và add icon vào
     * @author: Croco
     * @since: 16-05-2020
     * @param string|MenuItem|MenuLink|MenuIcon|Closure|Buildable|Renderable|Htmlable|View tên class icon hoặc html icon
     * @param string|MenuLink|MenuIcon|Closure|Buildable|Renderable|Htmlable|View nội dung của icon
     * @return Link|Menu
    */
    public function icon($icon = "", $content = "") {

        $menuItem = null;
        $menuLink = null;
        $menuIcon = null;

        if($icon instanceof MenuItem) {

            $menuItem = $icon;
            $icon = $content;
        } else {

            $menuItem = $this->createMenuItem();
        }

        $this->append($menuItem);

        if($content instanceof MenuLink) {

            $menuLink = $content;
            $icon = "";
        } else {

            $menuLink = $menuItem->link($content);
        }

        $menuIcon = $menuLink->icon($icon);
        
        if($icon instanceof MenuIcon) {

            if($content && is_string($content)) {

                $icon->class($content);
            }
            return $this;
        }

        if($icon instanceof Closure) {

            return $this;
        } 

        return $menuLink;
    }

    /**
     * @todo: Hàm hỗ trợ set trạng thái menu là đang đóng
     * -> ẩn danh sách menu con
     * @author: Croco
     * @since: 16-05-2020
     * @return Menu
    */
    public function collapse() {

        $this->collapsed = true;
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ set trạng thái menu là đang mở rộng
     * -> hiển thị hết danh sách menu con
     * @author: Croco
     * @since: 16-05-2020
     * @return Menu
    */
    public function expand() {

        $this->collapsed = false;
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ kiểm tra menu đang hiển thị danh sách item hay đang ẩn
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean
    */
    public function isCollapsed() {

        return $this->collapsed;
    }

    /**
     * @todo: Hàm kiểm tra menu có item nào hay không
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean 
    */
    public function hasItems() {

        return $this->hasElements();
    }

    /**
     * @todo: Hàm hỗ trợ render 1 element ra html
     * => hàm này override lại hàm renderElement của trait HasElements
     *      bổ sung kiểm tra nếu element là MenuItem
     *      thì kiểm tra item có phần tử nào không, nếu có thì mới render
     * @author: Croco
     * @param MenuItem|Buildable|Renderable|Htmlable|View|string $element
     * @since: 16-05-2020
     * @return string html 
    */
    public function renderElement($element) {

        if($element instanceof MenuItem) {

            if(!$element->hasElements()) {

                return "";
            }

            return $element->render();
        }

        return parent::renderElement($element);
    }

    /**
     * @todo hàm hỗ trợ kiểm tra trong menu có item nào đang active không
     * -> dùng để khi có 1 item active thì item cha cũng active luôn
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean
     */
    public function hasActiveItem() {

        $elements = $this->getElements() ?: [];
        foreach($elements as $element) {

            if($element instanceof MenuItem && $element->isActive()) {

                return true;
            }
        }

        return false;
    }

    /**
     * @todo hàm lấy toàn bộ giá trị để push ra view
     * -> trait Renderable sử dụng để render view
     * @author: Croco
     * @since: 16-05-2020
     * @return array
     */
    public function getData() {

        $data = [
            'elements'      => $this->getElements(),
            "attributes"    => $this->getAttributes(),
            "collapsed"     => $this->isCollapsed(),
            "hasActiveItem" => $this->hasActiveItem(),
            "hasItems"      => $this->hasItems(),
        ] + ($this->data ?: []);

        return $data;
    }

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
        if(!($builder instanceof MenuItem)) {

            $menuItem = new MenuItem($this, $builder);
        }
        $menuItem->setParent($this);

        return $menuItem;
    }

    /**
     * @todo hàm add thêm element vào danh sách
     * thêm vào cuối danh sách
     * => hàm này là override lại hàm trên Widget (trait HasElements) bổ sung kiểm tra
     *      nếu không phải là item (li) thì tạo ra item để chứa content
     *      vì trong ul chỉ có li thôi
     * @author: Croco
     * @since: 16-05-2020
     * @param Row
     * @return mixed
     */
    public function appendElement($element) {
        
        if(!($element instanceof MenuItem)) {

            $this->item($element);
            return $this;
        }
        return parent::appendElement($element);
    }

    /**
     * @todo hàm add thêm element vào danh sách
     * thêm vào đầu danh sách
     * => hàm này là override lại hàm trên Widget (trait HasElements) bổ sung kiểm tra
     *      nếu không phải là item (li) thì tạo ra item để chứa content
     *      vì trong ul chỉ có li thôi
     * @author: Croco
     * @since: 16-05-2020
     * @param $content
     * @return $this
     */
    public function prependElement($element) {
        
        if(!($element instanceof MenuItem)) {

            $this->item($element);
            return $this;
        }
        return parent::prependElement($element);
    }
}