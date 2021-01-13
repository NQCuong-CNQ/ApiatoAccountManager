<?php

namespace App\Containers\Layout\Traits;
use App\Containers\Layout\Widgets\Sidebar;
use Closure;
use App\Containers\Layout\Facades\Layout;
use App\Containers\Layout\Layout as LayoutInstance;

/**
 * @todo: Class hỗ quản lý sidebar
 * -> sử dụng để layout hiển thị hoặc ẩn sidebar, và hiển thị nội dung của sidebar
 * - enableSidebar: cho phép hiển thị sidebar
 * - disableSidebar: ẩn sidebar
 * - isEnableSidebar: kiểm tra cho phép hiển thị sidebar không
 * - getSidebar: hàm lấy instance sidebar
 * @author: Croco
 * @since: 16-05-2020
*/
trait HasSidebar
{
    // cờ xác định có sử dụng sidebar hay không
    protected $isEnableSidebar = null;
    // sidebar
    protected $sidebar = null;
    // cờ xác định sidebar đang đóng hay mở
    protected $sidebarCollapsed = true;

    /**
     * @todo: Set lại cờ sử dụng sidebar
     * @purpose: 
     * - mục đích ngoài layout nếu có sử dụng sidebar thì mới include vào
     * - kiểm tra nếu đối tượng đang sử dụng trait không phải layout
     * thì lấy sidebar từ layout
     * vì sidebar chỉ duy nhất 1 instance cho 1 layout
     * @author: Croco
     * @since: 16-05-2020
     * @return mixed
    */
    public function enableSidebar() {

        if(!($this instanceof LayoutInstance)) {

            Layout::enableSidebar();
            return $this;
        }
        $this->isEnableSidebar = true;
        return $this;
    }

    /**
     * @todo: Set lại cờ không sử dụng sidebar
     * @purpose: 
     * - mục đích ngoài layout nếu có sử dụng sidebar thì mới include vào
     * - kiểm tra nếu đối tượng đang sử dụng trait không phải layout
     * thì lấy sidebar từ layout
     * vì sidebar chỉ duy nhất 1 instance cho 1 layout
     * @author: Croco
     * @since: 16-05-2020
     * @return mixed
    */
    public function disableSidebar() {

        if(!($this instanceof LayoutInstance)) {

            Layout::disableSidebar();
            return $this;
        }
        $this->isEnableSidebar = false;
        return $this;
    }

    /**
     * @todo: hàm kiểm tra có sử dụng sidebar hay không
     * @purpose: 
     * - mục đích ngoài layout nếu có sử dụng sidebar thì mới include vào
     * - kiểm tra nếu đối tượng đang sử dụng trait không phải layout
     * thì lấy sidebar từ layout
     * vì sidebar chỉ duy nhất 1 instance cho 1 layout
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean 
    */
    public function isEnableSidebar() {

        if(!($this instanceof LayoutInstance)) {

            return Layout::isEnableSidebar();
        }
        return $this->isEnableSidebar;
    }

    /**
     * @todo: hàm hỗ trợ lấy instance sidebar
     * - kiểm tra nếu đối tượng đang sử dụng trait không phải layout
     * thì lấy sidebar từ layout
     * vì sidebar chỉ duy nhất 1 instance cho 1 layout
     * @author: Croco
     * @since: 16-05-2020
     * @return Sidebar
     */
    public function getSidebar() {

        if(!($this instanceof LayoutInstance)) {

            return Layout::getSidebar();
        }

        if (is_null($this->sidebar)) {

            $this->sidebar = new Sidebar();
        }

        return $this->sidebar;
    }

    /**
     * @todo: hàm build sidebar
     * - nếu truyền vào là callback thì lấy sidebar từ layout và gọi lại callback để build
     * - nếu truyền vào là instance của Sidebar thì set lại sidebar cho layout
     * - nếu truyền vào là null thì trả về sidebar để tiếp tục build
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|Sidebar 
     * @return Sidebar
     */
    public function sidebar($builder = null) {

        if($builder instanceof Sidebar) {

            if(!($this instanceof LayoutInstance)) {

                return Layout::sidebar($builder);
            }

            $this->sidebar = $builder;
            // nếu chưa set cờ enable hoặc disable sidebar
            // thì tự set lên là enable
            if($this->isEnableSidebar === null) {

                $this->isEnableSidebar = true;
            }
            return $this;
        }

        $sidebar = $this->getSidebar();
        // nếu chưa set cờ enable hoặc disable sidebar
        // thì tự set lên là enable
        if($this->isEnableSidebar === null) {

            $this->isEnableSidebar = true;
        }
        if($builder instanceof Closure) {

            $builder($sidebar);
            return $this;
        }

        return $sidebar;
    }

    /**
     * @todo: Hàm hỗ trợ set trạng thái sidebar là đang đóng
     * -> ẩn danh sách menu con
     * @author: Croco
     * @since: 16-05-2020
     * @return Menu
    */
    public function collapseSidebar() {

        if(!($this instanceof LayoutInstance)) {

            Layout::collapseSidebar();
            return $this;
        }
        $this->sidebarCollapsed = true;
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ set trạng thái sidebar là đang mở rộng
     * -> hiển thị hết danh sách menu con
     * @author: Croco
     * @since: 16-05-2020
     * @return Menu
    */
    public function expandSidebar() {

        if(!($this instanceof LayoutInstance)) {

            Layout::expandSidebar();
            return $this;
        }
        $this->sidebarCollapsed = false;
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ kiểm tra sidebar đang hiển thị danh sách item hay đang ẩn
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean
    */
    public function isSidebarCollapsed() {

        if(!($this instanceof LayoutInstance)) {

            return Layout::isSidebarCollapsed();
        }
        return $this->sidebarCollapsed;
    }
}
