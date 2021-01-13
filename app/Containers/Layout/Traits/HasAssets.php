<?php

namespace App\Containers\Layout\Traits;
use Illuminate\Support\Str;

use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Facades\App;

/**
 * @todo: Class quản lý toàn bộ asset của theme
 * - css: hàm add thêm 1 link css cho layout
 * - baseCss: hàm add thêm 1 link css vendor cho layout
 *      Kiểm tra link nếu không phải vendor (bắt đầu bằng http || //) -> không dùng mix
 * - js: hàm add thêm 1 link js cho layout
 * - baseJs: hàm add thêm 1 link js vendor cho layout
 *      Kiểm tra link nếu không phải vendor (bắt đầu bằng http || //) -> không dùng mix
 * - headerJs: hàm add thêm 1 js trên tag head
 * - script: hàm add thêm 1 js inline (chuỗi js)
 * - style: hàm add thêm 1 css inline
 * - component: hàm khai báo sử dụng 1 component
 *      có 1 danh sách component bao gồm css, js trong mảng $components
 *      hàm này có nhiệm vụ lấy css, js đăng ký vào layout
 * - initVendorGMaps: Hàm khai báo sử dụng link api google map
 * @author: Croco
 * @since: 15-05-2020
*/
trait HasAssets
{
    // danh sách cấu hình js, css component
    public static $components = [
        // các nút nhấn
        "buttons" => [
            "css" => [
                "/vendor/architectui-pro/components/buttons/buttons.css"
            ],
            "js" => [

            ]
        ],
        // datetime-picker
        "datetime-picker" => [
            "css" => [
                "/vendor/architectui-pro/components/datetime-picker/datetime-picker.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/datetime-picker/datetime-picker.js"
            ]
        ],
        // drawer
        "drawer" => [
            "css" => [
                "/vendor/architectui-pro/components/drawer/drawer.css"
            ],
            "js" => [
            ]
        ],
        // dropdown-select-multiselect
        "dropdown-select-multiselect" => [
            "css" => [
                "/vendor/architectui-pro/components/dropdown-select-multiselect/dropdown-select-multiselect.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/dropdown-select-multiselect/dropdown-select-multiselect.js"
            ]
        ],
        // forms
        "forms" => [
            "css" => [
                "/vendor/architectui-pro/components/forms/forms.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/forms/forms.js"
            ],
            "components" => [
                "jsvalidation",
                "jquery-hook",
            ]
        ],
        // jsvalidation
        "jsvalidation" => [
            "css" => [
            ],
            "js" => [
                "/vendor/jsvalidation/laravel-jsvalidation.js",
            ]
        ],
        // icons
        "icons" => [
            "css" => [
                "/vendor/architectui-pro/components/icons/icons.css"
            ],
            "js" => [
            ]
        ],
        // images-image-crop
        "images-image-crop" => [
            "css" => [
                "/vendor/architectui-pro/components/images-image-crop/images-image-crop.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/images-image-crop/images-image-crop.js"
            ]
        ],
        // loaders-progress-spinners
        "loaders-progress-spinners" => [
            "css" => [
                "/vendor/architectui-pro/components/loaders-progress-spinners/loaders-progress-spinners.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/loaders-progress-spinners/loaders-progress-spinners.js"
            ]
        ],
        // async
        "async" => [
            "js" => [
                "/vendor/architectui-pro/components/async/async.js"
            ]
        ],
        // maps
        "maps" => [
            "css" => [
                "/vendor/architectui-pro/components/maps/maps.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/maps/maps.js"
            ]
        ],
        "geocomplete" => [
            "js" => [
                "/vendor/architectui-pro/components/geocomplete/geocomplete.js"
            ]
        ],
        // selection drag
        "selection" => [
            "js" => [
                "/vendor/architectui-pro/components/selection/selection.js"
            ]
        ],

        // modals
        "modals" => [
            "css" => [
                "/vendor/architectui-pro/components/modals/modals.css"
            ],
            "js" => [
            ]
        ],
        // notification-alert-toast
        "notification-alert-toast" => [
            "css" => [
                "/vendor/architectui-pro/components/notification-alert-toast/notification-alert-toast.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/notification-alert-toast/notification-alert-toast.js"
            ]
        ],
        // pagination
        "pagination" => [
            "css" => [
                "/vendor/architectui-pro/components/pagination/pagination.css"
            ],
            "js" => [
            ]
        ],
        // popover-tooltip
        "popover-tooltip" => [
            "css" => [
                "/vendor/architectui-pro/components/popover-tooltip/popover-tooltip.css"
            ],
            "js" => [
            ]
        ],
        // scrollable
        "scrollable" => [
            "css" => [
                "/vendor/architectui-pro/components/scrollable/scrollable.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/scrollable/scrollable.js"
            ]
        ],
        // thanh menu bên trái
        "sidebar" => [
            "css" => [
                "/vendor/architectui-pro/components/sidebar/sidebar.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/sidebar/sidebar.js"
            ]
        ],
        // thanh menu trên top
        "navbar" => [
            "css" => [
                "/vendor/architectui-pro/components/navbar/navbar.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/navbar/navbar.js"
            ],
            "components" => [
                "dropdown-select-multiselect",
                "popover-tooltip",
                "scrollable"
            ]
        ],
        // slider-carousel-rangeslider
        "slider-carousel-rangeslider" => [
            "css" => [
                "/vendor/architectui-pro/components/slider-carousel-rangeslider/slider-carousel-rangeslider.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/slider-carousel-rangeslider/slider-carousel-rangeslider.js"
            ]
        ],
        // tables
        "tables" => [
            "css" => [
                "/vendor/architectui-pro/components/tables/tables.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/tables/tables.js"
            ],
            "components" => [
                "pagination",
                "forms",
                "jquery-hook",
            ]
        ],
        // timeline
        "timeline" => [
            "css" => [
                "/vendor/architectui-pro/components/timeline/timeline.css"
            ],
            "js" => [
            ]
        ],
        // tree-view
        "tree-view" => [
            "css" => [
                "/vendor/architectui-pro/components/tree-view/tree-view.css"
            ],
            "js" => [
            ]
        ],
        // wysiwyg
        "wysiwyg" => [
            "css" => [
                "/vendor/architectui-pro/components/wysiwyg/wysiwyg.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/wysiwyg/wysiwyg.js",
                "/vendor/architectui-pro/components/wysiwyg/ckeditor4/ckeditor.js",
                "/vendor/architectui-pro/components/wysiwyg/config-ckeditor.js",
            ]
        ],
        // jsrender
        "jsrender" => [
            "js" => [
                "/vendor/architectui-pro/components/jsrender/jsrender.js",
            ]
        ],
        // jquery-hook
        "jquery-hook" => [
            "js" => [
                "/vendor/architectui-pro/components/jquery-hook/jquery-hook.js",
            ]
        ],
        // jquery-ui
        "jquery-ui" => [
            "css" => [
                "/vendor/architectui-pro/components/jquery-ui/jquery-ui.css"
            ],
            "js" => [
                "/vendor/architectui-pro/components/jquery-ui/jquery-ui.js",
            ]
        ],
        // socket.io-client
        "socket.io-client" => [
            "js" => [
                "/vendor/architectui-pro/components/socket.io-client/socket.io-client.js",
            ]
        ],
        // numeral
        "numeral" => [
            "js" => [
                "/vendor/architectui-pro/components/numeral/numeral.js",
            ]
        ],
    ];

    // danh sách components đang sử dụng
    public static $useageComponents = [

    ];

    /**
     * @var array
     */
    public static $script = [];

    /**
     * @var array
     */
    public static $deferredScript = [];

    /**
     * @var array
     */
    public static $style = [];

    /**
     * @var array
     */
    public static $css = [];

    /**
     * @var array
     */
    public static $js = [];

    /**
     * @var array
     */
    public static $html = [];

    /**
     * @var array
     */
    public static $headerJs = [];

    /**
     * @var array
     */
    public static $baseCss = [
        // "/css/app.css",
    ];

    /**
     * @var array
     */
    public static $baseJs = [
        // "/js/manifest.js",
        // "/js/vendor.js",
        // "/js/app.js",
    ];

    /**
     * Add css or get all css.
     *
     * @param null $css
     *
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public static function css($css = null)
    {
        if (!is_null($css)) {
            return self::$css = array_merge(array_values(self::$css),array_values((array) $css));
        }

        $css = array_unique(array_filter(self::$css));

        return view('layout::includes.css', compact('css'));
    }

    /**
     * @param null $css
     *
     * @return array|null
     */
    public static function baseCss($css = null)
    {
        if (!is_null($css)) {

            return self::$baseCss = array_merge(array_values(self::$baseCss),array_values((array) $css));
        }

        $css = array_unique(array_filter(static::$baseCss));
        $css = array_map(function($link) {
            if(Str::startsWith($link,'http') || Str::startsWith($link,'//')) {
                return $link;
            }
            return $link;
        }, $css);

        return view('layout::includes.css', compact('css'));
    }

    /**
     * Add js or get all js.
     *
     * @param null $js
     *
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public static function js($js = null)
    {
        if (!is_null($js)) {

            return self::$js = array_merge(array_values(self::$js), array_values((array) $js));
        }

        $js = array_unique(array_filter(self::$js));

        return view('layout::includes.js', compact('js'));
    }

    /**
     * Add js or get all js.
     *
     * @param null $js
     *
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public static function headerJs($js = null)
    {
        if (!is_null($js)) {

            return self::$headerJs = array_merge(array_values(self::$headerJs), array_values((array) $js));
        }

        return view('layout::includes.js', ['js' => array_unique(static::$headerJs)]);
    }

    /**
     * @param null $js
     *
     * @return array|null
     */
    public static function baseJs($js = null)
    {
        if (!is_null($js)) {
            return self::$baseJs = array_merge(array_values(self::$baseJs),array_values((array) $js));
        }

        $js = array_unique(array_filter(self::$baseJs));
        $js = array_map(function($src) {
            if(Str::startsWith($src,'http') || Str::startsWith($src,'//')) {
                return $src;
            }
            return $src;
        }, $js);

        return view('layout::includes.js', ['js' => $js]);
    }

    /**
     * @param string $script
     * @param bool   $deferred
     *
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public static function script($script = '', $deferred = false)
    {
        if (!empty($script)) {
            if ($deferred) {
                return self::$deferredScript = array_merge(self::$deferredScript, (array) $script);
            }

            return self::$script = array_merge(self::$script, (array) $script);
        }

        $script = array_unique(array_merge(static::$script, static::$deferredScript));

        return view('layout::includes.script', compact('script'));
    }

    /**
     * @param string $style
     *
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public static function style($style = '')
    {
        if (!empty($style)) {
            return self::$style = array_merge(self::$style, (array) $style);
        }

        return view('layout::includes.style', ['style' => array_unique(self::$style)]);
    }

    /**
     * @param string $html
     *
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public static function html($html = '')
    {
        if (!empty($html)) {
            return self::$html = array_merge(self::$html, (array) $html);
        }

        return view('layout::includes.html', ['html' => array_unique(self::$html)]);
    }

    /**
     * @todo: Hàm khai báo sử dụng 1 component trong danh sách Components
     * @purpose: 
     * - VD: khi cần dùng tables, thì sử dụng Layout::component("tables")
     * @author: Croco
     * @since: 29-05-2020
     * @param string tên component
     * @return mixed
    */
    public static function component(string $name) {

        $name = Str::lower($name);
        $component = self::$components[$name];
        if($component) {
            
            self::$useageComponents[] = $name;
            self::$useageComponents = array_unique(self::$useageComponents);
        }
    }

    /**
     * @todo: Hàm hỗ trợ huỷ sử dụng 1 component trong danh sách đang sử dụng
     * @purpose: 
     * - khi component nào đó được mặc định sử dụng
     * nhưng trang hiện tại không cần thì có thể dùng hàm này để loại bỏ
     * @author: Croco
     * @since: 11-06-2020
     * @param string tên component
    */
    public static function disableComponent(string $name) {

        $name = Str::lower($name);
        $component = self::$components[$name];
        if($component) {
            
            self::$useageComponents = array_diff(self::$useageComponents, [$name]);
        }
    }

    /**
     * @todo: Hàm hỗ trợ build các component
     * @purpose: 
     * - hàm component, disableComponent chỉ đăng ký sử dụng
     * khi nào layout render mới gọi hàm này để lấy js, css add vào
     * - vì trước khi render có thể component đó không cần dùng sẽ gọi qua disableComponent để bỏ
     * @author: Croco
     * @since: 11-06-2020
    */
    protected function buildComponents() {

        $components = self::$useageComponents ?: [];
        $events = $this->events ?: App::make(Dispatcher::class);

        $events->dispatch("layout.build.components", [$components]);
        foreach ($components as $name) {

            $this->buildComponent($name, $events);
        }
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
    protected function buildComponent(string $name) {

        $name = Str::lower($name);
        $component = self::$components[$name];

        if(!$component) {

            return;
        }

        $events = $this->events ?: App::make(Dispatcher::class);

        $css = $component["css"] ?: [];
        $js = $component["js"] ?: [];
        $components = $component["components"] ?: [];

        foreach ($components as $name) {
            
            self::component($name);
            $this->buildComponent($name);
        }

        $events->dispatch("layout.build.component:" . $name, [$component]);
        $events->dispatch("layout.build.component:*", [$name, $component]);

        self::componentIncludeOtherVendors($name);

        foreach ($css as $link) {
            
            self::baseCss(mix($link));
        }
        foreach ($js as $js) {
            
            self::baseJs(mix($js));
        }
    }

    /**
     * @todo: Hàm hỗ trợ add các js, css hoặc script khác ngoài config cho component
     * @purpose: 
     * - vì config là 1 biến nằm ngoài class nên không thể gọi các hàm như config
     * hoặc function nên khi nào khởi tạo xong layout mới gọi lại sau
     * để sử dụng cấu hình
     * - VD: https://maps.googleapis.com/maps/api/js?key=". config('maps.key_google_map')
     * @author: Croco
     * @since: 11-06-2020
     * @param string tên component
    */
    private static function componentIncludeOtherVendors(string $componentName) {

        switch ($componentName) {
            case "maps":
            case "geocomplete":
                self::initVendorGMaps();
                break;
        }
    }

    /**
     * @todo: Hàm khai báo sử dụng link api google map
     * @purpose: 
     * - VD: khi cần google maps thì gọi hàm này để chạy trước các baseJs khác
     * @note 
     * _ Lưu ý : hàm callback của thư viện googleapis khai báo phải trùng với hàm callback đã được khai báo trong app\Containers\Layout\Resources\Assets\js\vendor\components\maps.js là initMap
     * @author: Dũng
     * @since: 08-06-2020
     * @return mixed
    */
    private static function initVendorGMaps() {

        self::baseJs(mix("/vendor/architectui-pro/components/maps/initMap.js"));
        self::baseJs("https://maps.googleapis.com/maps/api/js?key=". config('maps.key_google_map') ."&v=3.exp&callback=initMap&libraries=geometry,drawing,places&language=" . App::getLocale());
    }
}
