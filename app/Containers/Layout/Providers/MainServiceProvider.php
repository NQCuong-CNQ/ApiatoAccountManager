<?php

namespace App\Containers\Layout\Providers;

use App\Ship\Parents\Providers\MainProvider;
// layout
use App\Containers\Layout\Layout\Column;
use App\Containers\Layout\Layout\Content;
use App\Containers\Layout\Layout\Row;
// thanh sidebar
use App\Containers\Layout\Widgets\Sidebar;
use App\Containers\Layout\Widgets\Sidebar\MenuItem;
use App\Containers\Layout\Widgets\Sidebar\MenuIcon;
use App\Containers\Layout\Widgets\Sidebar\Menu;
use App\Containers\Layout\Widgets\Sidebar\Link;
// thanh navbar
use App\Containers\Layout\Widgets\Navbar\NavbarItem;
use App\Containers\Layout\Widgets\Navbar\NavbarIcon;
use App\Containers\Layout\Widgets\Navbar\NavbarLink;
// header
use App\Containers\Layout\Widgets\Logo;
use App\Containers\Layout\Widgets\Header;
use App\Containers\Layout\Facades\Layout as LayoutAdmin;

/**
 * @todo: Service provider chính của container quản lý layout
 * - đăng ký các provider khác
 *      - provider publish assets
 *      - provider khởi tạo sidebar, navbar
 * - đăng ký alias
 * @author: Croco
 * @since: 16-05-2020
*/
class MainServiceProvider extends MainProvider
{

    /**
     * Container Service Providers.
     *
     * @var array
     */
    public $serviceProviders = [
        PublishAssetsServiceProvider::class,
        HeaderServiceProvider::class,
        SidebarServiceProvider::class,
        TokenServiceProvider::class
    ];

    /**
     * Container Aliases
     *
     * @var  array
     */
    public $aliases = [
        'Layout\Column' => Column::class,
        'Layout\Content' => Content::class,
        'Layout\Row' => Row::class,

        'Layout\Widgets\Sidebar' => Sidebar::class,
        'Layout\Widgets\Sidebar\MenuItem' => MenuItem::class,
        'Layout\Widgets\Sidebar\MenuIcon' => MenuIcon::class,
        'Layout\Widgets\Sidebar\Menu' => Menu::class,
        'Layout\Widgets\Sidebar\Link' => Link::class,

        'Layout\Widgets\Navbar' => Sidebar::class,
        'Layout\Widgets\Navbar\NavbarItem' => NavbarItem::class,
        'Layout\Widgets\Navbar\NavbarIcon' => NavbarIcon::class,
        'Layout\Widgets\Navbar\NavbarLink' => NavbarLink::class,


        'Layout\Widgets\Logo' => Logo::class,
        'Layout\Widgets\Header' => Header::class,
        'Layout' => LayoutAdmin::class,
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

        error_reporting(E_ALL & ~E_NOTICE);
        
        // đăng ký namespace view cho layout
        $this->loadViewsFrom(__DIR__.'/../Resources/View', 'layout');

        try {
            // add bản dịch
            LayoutAdmin::js(mix("/lang/layout.js"));
            LayoutAdmin::css(mix('/css/custom.css'));

        } catch (\Exception $e) {}
    }
}
