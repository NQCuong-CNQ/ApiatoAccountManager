<?php

namespace App\Containers\Layout\Providers;

use App\Ship\Parents\Providers\MainProvider;
use App\Containers\Layout\Facades\Layout;
use Str;

use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

/**
 * @todo: cấu hình header, logo, navbar cho layout
 * @author: Croco
 * @since: 16-05-2020
*/
class HeaderServiceProvider extends MainProvider {

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

                $this->buildheader();
            }
        });
    }

    /**
     * @todo: Hàm hỗ trợ cấu hình thanh header
     * @purpose: 
     * - logo: lấy từ config layout-container-header.logo
     *      là tên view hoặc html
     * - navbar: lấy từ config layout-container-navbar
     * @author: Croco
     * @since: 19-05-2020
    */
    protected function buildHeader() {

        // cấu hình header
        $headerConfigs = config("layout-container-header") ?: [];
        // cấu hình thanh navbar (thanh menu trên top)
        $navbarConfigs = config("layout-container-navbar") ?: [];
        // cấu hình logo
        $logo = $headerConfigs["logo"];

        // nếu có logo thì set logo cho layout
        if($logo) {

            $this->buildLogo($logo);
        }

        Layout::component("navbar");
        
        // khởi tạo header
        Layout::header(function($header) use ($headerConfigs, $navbarConfigs) {
            
            $header->left(function($headerLeft) use ($headerConfigs, $navbarConfigs) {

                // cấu hình input search
                $this->buildSearchInput($headerLeft, $headerConfigs["input_search"]);
                
                // nếu có cấu hình menu ở navbar thì build thanh navbar
                if($navbarConfigs && count($navbarConfigs) > 0) {

                    // thanh navbar
                    $headerLeft->navbar(function($navbar) use($navbarConfigs) {
    
                        // cấu hình thanh navbar
                        $this->buildNavbar($navbar, $navbarConfigs);
                    });
                }
            });

            // header bên phải
            $header->right(function($headerRight) {
                
                // nếu có đăng nhập thì hiển thị menu profile
                if(Auth::check()) {

                    // menu profile
                    $headerRight->append(view("layout::partials.header.profile-menu"));
                }
            });
        });
    }

    /**
     * @todo: Hàm hỗ trợ set logo cho layout
     * @purpose: 
     * - lấy html hoặc tên view từ config layout-container-header
     * @input: 
     * - string tên view hoặc html
     * @author: Croco
     * @since: 19-05-2020
     * @param string tên view hoặc html
    */
    protected function buildLogo($logo) {

        // nếu là tên view thì gọi view
        if(view()->exists($logo)) {

            Layout::logo(view($logo));
        } 
        // ngoài ra là html
        else {

            Layout::logo($logo);
        }
    }

    /**
     * @todo: Hàm hỗ trợ cấu hình input search trên thanh header
     * @purpose: 
     * - lấy thông tin cấu hình input search từ config layout-container-header.input_search
     * @input: 
     * - header left hoặc right cần hiển thị input search
     * - mảng cấu hình hiển thị
     * @author: Croco
     * @since: 19-05-2020
     * @param App\Containers\Layout\Widgets\Header\HeaderLeft|App\Containers\Layout\Widgets\Header\HeaderRight
     * @param array cấu hình
     * - allow_display: boolean cho phép hiển thị input search hay không
     * - placeholder: string placeholder cho input
     * - search_param: string tên param search
    */
    protected function buildSearchInput($header, $configs = []) {

        if($configs["allow_display"]) {

            // input search
            $header->searchInput(function($searchInput) use($configs) {
    
                $request = app("request");
    
                $searchInput->placeholder($configs["placeholder"] ?? trans("layout::headers.placeholders.search_input"))
                    ->value($request->{$configs["search_param"] ?: "keyword"} ?? "")
                ;
            });
            $header->append($searchInput);
        }
    }

    /**
     * @todo: Hàm hỗ trợ cấu hình thanh navbar (menu trên top)
     * @purpose: 
     * - lấy thông tin cấu hình từ config layout-container-navbar
     * @author: Croco
     * @since: 19-05-2020
     * @param App\Containers\Layout\Widgets\Header\HeaderLeft|App\Containers\Layout\Widgets\Header\HeaderRight
     * @param array cấu hình
     *      [
     *          [
     *               "label" => "Địa chỉ",
     *               "icon" => "pe-7s-gift",
     *               "url" => "#",
     *               "type" => "popover",
     *               "content" => "nội dung"
     *          ]
     *      ]
    */
    protected function buildNavbar($navbar, $configs = []) {

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
            // nội dung trong menu
            $content = $config["content"];
            // match link có cùng chức năng
            $matches = $config["matches"] ?: [];

            $item = $navbar->item();
            
            $link = $item->link($label, $url);

            // nếu link = link hiện tại thì active link
            if($currentPath == $url || $request->is($url) || $request->is(Str::after($url, "/"))) {

                $item->active();
            } else if($matches && count($matches)) {

                foreach ($matches as $url) {
                    if($currentPath == $url || $request->is($url) || $request->is(Str::after($url, "/"))) {

                        $item->active();
                        break;
                    }
                }
            }

            // nội dung trong menu
            if($content) {

                // nếu là tên view thì gọi view
                if(view()->exists($content)) {

                    $item->append(view($content));
                } 
                // ngoài ra là html
                else {

                    $item->append($content);
                }
            }

            // icon của menu
            if($icon) {

                $link->icon($icon);
            }
            // loại item menu popover|dropdown
            if($type) {

                $link->type($type);
            }
        }
    }
}