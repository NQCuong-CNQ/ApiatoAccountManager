<?php
/**
 * @todo: Cấu hình danh sách menu ở navbar (thanh menu trên top)
 * - cấu trúc danh sách
 *  [
 *       // menu địa chỉ
 *       "label" => "Địa chỉ",
 *       "icon" => "pe-7s-rocket",
 *       "type" => "popover" // popover|dropdown,
 *       "content" => "" // tên view hoặc html
 *       "url" => "#", url,
 *       "matches" => [
 *          // danh sách các url con, dùng để 1 menu có thể không đúng link nhưng vẫn muốn active
 *          VD: link chi tiết quốc gia /countries/id quốc gia => /countries/*
 *       ]
 *   ],
 * 
 * - riêng đối với cấp ngoài cùng nếu là tiêu đề nhóm
 * thì có thêm type = heading
*/
return [
    // [
    //     "label" => "Địa chỉ",
    //     "icon" => "pe-7s-gift",
    //     "url" => "#",
    //     "type" => "popover",
    //     "content" => "sdfsdf"
    // ],
];