<?php

namespace App\Containers\Layout\Providers;

use App\Ship\Parents\Providers\MainProvider;
use App\Containers\Layout\Facades\Layout;
use Str;

use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Facades\App;

/**
 * @todo: provider lấy danh sách menu của sidebar để đăng ký vào layout
 * @author: Croco
 * @since: 16-05-2020
*/
class SidebarServiceProvider extends MainProvider {

    /**
     * Container Service Providers.
     *
     * @var array
     */
    public $serviceProviders = [
    ];

    /**
     * Container Aliases
     *
     * @var  array
     */
    public $aliases = [
    ];

    /**
     * Register anything in the container.
     */
    public function register()
    {
        parent::register();
    }

    

    public function boot() {
        parent::boot();
        $events = App::make(Dispatcher::class);
        $events->listen("layout.building", function($name) {
            // nếu không phải là layout trống thì add header, navbar vào
            if($name != "blank-page" && Str::before($name, "::") == "layout") {

                $this->buildSidebar();
            }
        });
    }

    /**
     * @todo: Hàm khởi tạo sidebar load từ cấu hình layout-container-sidebar
     * @algorithm: xem thêm tại hàm buildMenu
     * @author: Croco
     * @since: 19-05-2020
    */
    protected function buildSidebar() {

        $sidebarMenuConfigs = config('layout-container-sidebar');

        // sử dụng icon
        Layout::component('icons');
        Layout::component('buttons');
        Layout::component('sidebar');

        // khởi tạo sidebar
        Layout::sidebar(function($sidebar) use($sidebarMenuConfigs) {
            
            // khởi tạo danh sách menu
            $sidebar->menu(function($menu) use($sidebarMenuConfigs) {

                $this->buildMenu($menu, $sidebarMenuConfigs);
            });
        });

        Layout::expandSidebar();
    }

    /**
     * @todo: Hàm khởi tạo menu cho sidebar
     * @purpose: 
     * - đăng ký các link menu ở thanh sidebar bên trái layout
     * @input: 
     * - \Layout\Widgets\Sidebar\Menu: menu cần build
     * - mảng cấu hình
     *      [
     *          label: tên menu
     *          type: loại: heading | item
     *          icon: tên class icon hoặc html icon
     *          url: link menu
     *          children: [mảng danh sách phần tử con]
     *      ]
     * @output: 
     *  layout sidebar
     * @author: Croco
     * @since: 19-05-2020
     * @param Layout\Widgets\Sidebar\Menu
     * @param array config
     * @param number level của menu
    */
    protected function buildMenu($menu, $configs = [], $level = 0) {

        // lấy link hiện tại trên web
        $request = app("request");
        $currentPath = "/" . $request->path();

        // duyệt qua mảng cấu hình để đăng ký menu
        foreach ($configs as $config) {
            
            // label menu
            $label = $config["label"];
            // icon của menu
            $icon = $config["icon"];
            // link của menu
            $url = $config["url"];
            // loại menu: heading hoặc item, chỉ có menu ở cấp ngoài cùng mới có heading
            $type = $config["type"];
            // danh sách menu con
            $children = $config["children"] ?: [];
            // match link có cùng chức năng
            $matches = $config["matches"] ?: [];

            // nếu là cấp ngoài cùng thì mới cho đăng ký loại là heading
            if($level <= 0 && $type == "heading") {


                $item = $menu->item();
                $item->heading();

                if($url) {

                    $link = $item->link($label, $url);
                    if($icon) {

                        $link->icon($icon);
                    }
                } else if($icon){

                    $item->icon($icon, $label);
                } else {

                    $item->link($label);
                }
            } 
            // nếu có danh sách menu con thì đệ quy lên để tạo menu con
            else if($children && count($children)) {

                if($icon) {

                    $item = $menu->icon($icon, $label);
                } else {

                    $item = $menu->link($label);
                }

                $item->menu(function($childrenMenu) use($level, $children) {

                    $this->buildMenu($childrenMenu, $children, $level + 1);
                });
            } else {

                $link = $menu->link($label, $url);
                if($icon) {

                    $link->icon($icon);
                }
                // nếu link = link hiện tại thì active link
                if($currentPath == $url || $request->is($url) || $request->is(Str::after($url, "/"))) {

                    $link->active();
                } else if($matches && count($matches)) {

                    foreach ($matches as $url) {
                        if($currentPath == $url || $request->is($url) || $request->is(Str::after($url, "/"))) {

                            $link->active();
                            break;
                        }
                    }
                }
            }
        }
    }
}
