<?php

namespace App\Containers\Layout;

use App\Containers\Layout\Traits\HasAssets;
use App\Containers\Layout\Traits\HasSidebar;
use App\Containers\Layout\Traits\AttributesToHtml;
use App\Containers\Layout\Traits\HasLogo;
use App\Containers\Layout\Traits\HasHeader;

use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Facades\App;

/**
 * Class Quản lý layout
 * -> các khung layout chính, js vendor, css sẽ do class này quản lý
 * - css: hàm add thêm link css, css(link)
 * - js: hàm add thêm link js, js(link js)
 * - script: hàm thêm inline js, script(chuỗi js inline)
 * - style: hàm thêm inline css, style(chuỗi css inline)
 * - enableSidebar: kích hoạt hiển thị sidebar
 * - disableSidebar: ẩn sidebar
 * - sidebar: build sidebar, sidebar(function (sidebar) { //add menu,item cho sidebar ở đây })
 * - collapseSidebar: đóng sidebar
 * - expandSidebar: mở sidebar
 * - isSidebarCollapsed: kiểm tra sidebar đang đóng hay mở
 * - header: build header, header(function (header) { // append nội dung cho header ở đây })
 */
class Layout
{
    // quản lý asset theme
    use HasAssets {
        component as protected hasAssets_component;
    }
    // quản lý sidebar
    use HasSidebar;
    // quản lý logo
    use HasLogo;
    // quản lý header
    use HasHeader;
    // hỗ trợ chuyển attributes sang html
    use AttributesToHtml;

    private $builded = false;

    /**
     * The event dispatcher implementation.
     *
     * @var Dispatcher
     */
    protected $events;
    
    public function __construct() {

        $this->events = App::make(Dispatcher::class);
    }

    /**
     * @todo: hàm boot layout
     * - để khởi tạo và sử dụng layout
     * -> nếu không gọi hàm này thì Layout\Content sẽ chạy trước nên không có nhận được event
     * @author: Croco
     * @since: 11-06-2020
    */
    public function boot() {

        // $this->events->listen("layout.composing", function() {

            $this->buildComponents();
            $this->builded = true;
        // });
    }

    /**
     * @todo: Hàm hỗ trợ build 1 component
     * @purpose: 
     * - hàm component, disableComponent chỉ đăng ký sử dụng
     * khi nào layout render mới gọi hàm này để lấy js, css add vào
     * - vì trước khi render có thể component đó không cần dùng sẽ gọi qua disableComponent để bỏ
     * @author: Croco
     * @since: 11-06-2020
    */
    public function component($name) {

        if($this->builded) {

            $this->buildComponent($name);
            return $this;
        }
        
        $this->hasAssets_component($name);
        return $this;
    }
}
