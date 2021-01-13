<?php

namespace App\Containers\Layout\Facades;

use Illuminate\Support\Facades\Facade;
use App\Containers\Layout\Layout as LayoutAdmin;
/**
 * @todo: tạo facades để sử dụng layout
 * @usage:
 *  // set logo
    Layout::logo('<div class="logo-src"></div>');

    // khởi tạo header
    Layout::header(function($header) {

        $header->append("header");
    });

    // khởi tạo sidebar
    Layout::sidebar(function($sidebar) {

        // khởi tạo danh sách menu
        $sidebar->menu(function($menu) {

            // tiêu đề 1 nhóm menu
            $menu->item("Nhóm menu")->heading();
            // các item con của menu
            $menu->link("trang chủ", "/")->icon("pe-7s-rocket");
            $menu->icon("pe-7s-rocket", "Thành viên")
                // tạo ra 1 menu con của item thành viên
                ->menu(function($menu) {

                    // active link
                    $menu->link("Đăng ký", "/register")->active();
                    $menu->link("Danh sách thành viên", "/users");
                })
            ;
        });
    });

    // khởi tạo header
    Layout::header(function($header) {
        
        $header->left(function($headerLeft) {

            // input search
            $headerLeft->searchInput(function($searchInput) {

                $searchInput->placeholder(trans("layout::headers.placeholders.search_input"))
                    ->value("")
                ;
            });
            $headerLeft->append($searchInput);

            // thanh navbar
            $headerLeft->navbar(function($navbar) {

                // menu dạng popover
                $navbar->link("Test nav popover")
                    ->icon("pe-7s-gift")
                    ->type("popover")
                ;
                $navbar->link("Test nav")
                    ->icon("pe-7s-gift")
                    ->type("dropdown")
                ;
            });
        });
        $header->right(function($headerRight) {
            
        });
    });



    use Layout\Content;
    // sử dụng layout trong controller
    return $content
        // tiêu đề trang (tag html title)
        ->title(trans("user::register-user.headers.register"))
        // add dòng (chia dòng cột của bootstrap css)
        ->row(function($row) {
            
            // ứng với dòng 1 có 1 cột nên with của cột = 12 (đánh cột như trong bootstrap)
            $row->column(view('user::register-user'), 12);
        })
    ;

    // add js ở view
    Layout::js(mix('/js/users/register-user.js'))
    
    // add css ở view
    Layout::css(mix('/css/users/register-user.css'))
 */
class Layout extends Facade
{
    protected static function getFacadeAccessor()
    {
        return LayoutAdmin::class;
    }
}
