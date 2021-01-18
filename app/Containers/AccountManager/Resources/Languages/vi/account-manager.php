<?php
// translate trang account manager
return [

    "title_app" => "Quản lý tài khoản",

    // translate web
    "headers" => [
        "add_new" => "Thêm mới thông tin",
        "detail" => "Thông tin chi tiết",
        "edit" => "Chỉnh sửa",
    ],

    // translate form
    "labels" => [
        'id'         => "ID",
        'company_name'                  => "Tên công ty",
        "domain_name"                   => "Tên domain",
        "base_url"                      => "Base URL (Đường dẫn module sử dụng vd: /admin , /fronend...)",
        'app_code'                      => "Mã ứng dụng",
        "app_name"                      => "Tên ứng dụng",
        "app_brand"                      => "Chọn loại ứng dụng",
        "site_name"                     => "Site name",
        "start_date" => "Bắt đầu sử dụng",
    ],

    "placeholders" => [
        'company_name'                  => "Tên công ty",
        "domain_name"                   => "Tên domain",
        "base_url"                      => "Base URL",
        'app_code'                      => "Mã ứng dụng",
        "app_name"                      => "Tên ứng dụng",
        "site_name"                     => "Nhập site name",
    ],

    "buttons" => [
        "back"                                 => "Quay về",
        "add_new"                                 => "Thêm mới",
        "delete"                                    => "Xóa",
        "edit" => "Chỉnh sửa",
        "save" => "Lưu",

    ],
    // translate api
    "api"   =>  [
        //
        "list_all_address_components" =>  "Lấy danh sách cấu thành địa chỉ thành công",
        // 
        "store_address_component"     =>  "Tạo mới cấu thành địa chỉ thành công",
        //
        "update_address_component"    =>  "Cập nhật cấu thành địa chỉ thành công",
        //
        "delete_address_component"    =>  "Xóa cấu thành địa chỉ thành công",
        //
        "update_status_address_component"   => "Cập nhật trạng thái cấu thành địa chỉ thành công",    
        //
        "find_by_id_address_component"  =>  "Lấy chi tiết cấu thành địa chỉ thành công",
    ],
    
    // validate dữ liệu
    'validations'   =>  [
        'company_name'  =>  [
            'required'  =>  'Tên công ty không được để trống',
            // 'unique'    =>  'Mã này đã được sử dụng',
        ],
        'domain_name'  =>  [
            'required'  =>  'Tên domain không được để trống',
        ],
        'base_url' =>  [
            'required'  =>  'Base url không được để trống',
        ],
    ],

    //forms
    'forms'     =>  [
        'instruc'  =>  [
            'domain_name'  =>  "Chỉ nhâp tên domain (vd: nếu là 'buslines.phanmemve.vn' thì sẽ nhập   'buslines')",
            'base_url'  =>  "Mặc định ('/'), nếu nhập 'dongphuoc' thì domain đầy đủ sẽ là 'express.phanmemve.vn/dongphuoc'",
            'app_code'  =>  'Mã ứng dụng là tên công ty viết liền không dấu',
            'site_name'  =>  'Chọn tên file config phần mềm vé',
            // 'unique'    =>  'Mã này đã được sử dụng',
        ],
    ],

    // messages
    'messages'=>[
        'add_new_success'                     => 'Thêm mới thành công!',
        'find_success'                     => 'Tìm kiếm thành công!',
        'get_all_success'                     => 'Lấy dữ liệu thành công!',
        'update_success'                     => 'Câp nhật thành công!',
        'delete_success'                     => 'Đã xóa thành công!',
        'delete_now' => "Xóa ngay!",
        'are_you_sure' => "Bạn chắc chứ?",
        'cant_revert' => "Bạn sẽ không thể hoàn tác tác vụ này."
    ],

    // thông báo lỗi
    "errors" => [
        "api_not_found" => "Không tìm thấy Api này!",
    ],
];
