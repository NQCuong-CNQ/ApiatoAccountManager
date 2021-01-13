<?php

/**
 * @todo: Cấu hình danh sách menu ở sidebar (thanh menu bên trái)
 * - cấu trúc danh sách
 *  [
 *       // menu địa chỉ
 *       "label" => "Địa chỉ",
 *       "icon" => "pe-7s-rocket",
 *       "children" => [
 *           [
 *               "label" => "Quốc gia",
 *               "icon" => "pe-7s-rocket",
 *               "url" => "/address/countries"
 *           ]
 *       ],
 *      "matches" => [
 *          // danh sách các url con, dùng để 1 menu có thể không đúng link nhưng vẫn muốn active
 *          VD: link chi tiết quốc gia /countries/id quốc gia => /countries/*
 *      ]
 *   ],
 *
 * - riêng đối với cấp ngoài cùng nếu là tiêu đề nhóm
 * thì có thêm type = heading
*/
return [

    [
        "label" => "Dashboard",
        "icon" => "pe-7s-display1",
        "type" => "heading",
        "url"     => "/",
    ],
    // nhóm menu dữ liệu cơ sở
    [
        "label" => "Dữ liệu cơ sở",
        "icon" => "pe-7s-server",
        "type" => "heading",
    ],
    [
        // menu địa chỉ
        "label" => "Địa chỉ",
        "icon" => "pe-7s-map-2",
        "children" => [
            [
                "label" => "Đơn vị hành chính",
                "url" => "/address/admistrative-units",
                "matches" => [
                    "/address/admistrative-units/*"
                ]
            ],
            [
                "label" => "Cấu thành địa chỉ",
                "url" => "/address/address-components",
                "matches" => [
                    "/address/address-components/*"
                ]
            ],
            [
                "label" => "Nhóm tuyến đường",
                "url" => "/address/route-groups",
                "matches" => [
                    "/address/route-groups/*"
                ]
            ],
            [
                "label" => "Tuyến đường",
                "url" => "/address/routes",
                "matches" => [
                    "/address/routes/*"
                ]
            ],
            [
                "label" => "Vị trí",
                "url" => "/address/locations",
                "matches" => [
                    "/address/locations/*"
                ]
            ],
        ],
    ],
    [
        "label" => "Công ty",
        "icon" => "lnr-apartment",
        "children" => [
            [
                "label" => "Công ty",
                "url" => "/company/companies",
                "matches" => [
                    "/company/companies/*"
                ]
            ],
            [
                "label" => "Phòng ban",
                "url" => "/company/departments",
                "matches" => [
                    "/company/departments/*"
                ]
            ],
        ]
            
    ],
    [
        "label" => "Business partner",
        "icon" => "pe-7s-network",
        "children" => [
            [
                "label" => "Đối tác",
                "url" => "/partner/partners",
                "matches" => [
                    "/partner/partners/*"
                ]
            ],
            [
                "label" => "Dịch vụ cung cấp",
                "url" => "/partner/service-types",
                "matches" => [
                    "/partner/service-types/*"
                ]
            ],
        ]
    ],
    [
        // menu hằng số
        "label" => "Cài đặt",
        "icon" => "pe-7s-config",
        "children" => [
            [
                "label" => "Hằng số",
                "url" => "/constant/constants",
                "matches" => [
                    "/constant/constants/*"
                ]
            ],
            [
                "label" => "Ngoại tệ",
                "url" => "/constant/currencies",
                "matches" => [
                    "/constant/currencies/*"
                ]
            ],
            [
                "label" => "Ngôn ngữ",
                "url" => "/constant/languages",
                "matches" => [
                    "/constant/languages/*"
                ]
            ],
            [
                "label" => "Múi giờ",
                "url" => "/constant/time-zones",
                "matches" => [
                    "/constant/time-zones/*"
                ]
            ],
            [
                "label" => "Tạo dữ liệu hệ thống",
                "url" => "/configs/tool-seeder",
            ],
        ]
    ],
    [
        "label" => "Thành viên",
        "icon" => "pe-7s-users",
        "url" => "/staff/staffs",
        "children" => [
            [
                "label" => "Thành viên",
                "url" => "/staff/staffs",
                "matches" => [
                    "/staff/staffs/*"
                ]
            ],
            [
                "label" => "Chức vụ",
                "url" => "/staff/positions",
                "matches" => [
                    "/staff/positions/*"
                ]
            ],
            
        ]
        
    ],
    [
        "label" => "Phân quyền",
        "icon" => "pe-7s-share",
        "children" => [
            [
                "label" => "Quyền",
                "url" => "/authorization/permissions"
            ],
            [
                "label" => "Vai trò - Nhóm quyền",
                "url" => "/authorization/roles"
            ],
        ]
    ],
];
