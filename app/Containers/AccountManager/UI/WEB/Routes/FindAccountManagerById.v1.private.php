<?php

/** ###ITVINA comment: ở đây sẽ giải thích use case theo người dùng của ứng dụng
 * @todo: lấy thông tin chi tiết account manager .
 * @Usage(use case): muốn chi tiết account manager (edit AddressComponent)
 * @Input: id id dùng để tìm đúng account manager 
 * @Output: chi tiết AddressComponent từ db 
 *    AddressComponent : chi tiết account manager
 * @note 
 *    Khi vào màn hình chi tiết/cập nhật :
 *  - Load JS Ajax dữ liệu dạng root chi tiết địa chỉ + các địa chỉ cấp cha
 *  - Load JS Ajax danh sách đơn vị hành chính để mapping vào mảng dữ liệu địa chỉ và render ra các select địa chỉ cấp con tương ứng
 * @Flow: 
 * - B1: vào chi tiết account manager cụ thể
 * - B2: show chi tiết account manager cho người dùng xem
*/

$router->get('accountmanagers/{id}', [
    'as' => 'web_accountmanager_show',
    'uses'  => 'AccountManagerController@findAccountManagerById',

]);
