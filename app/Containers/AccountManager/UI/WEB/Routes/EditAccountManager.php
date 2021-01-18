<?php

/** ###ITVINA comment: ở đây sẽ giải thích use case theo người dùng của ứng dụng
 * @todo: lấy thông tin chi tiết account manager đưa vào form cập nhật để người dùng chỉnh sửa.
 * - 1. Chọn quốc gia: List các mã quốc gia (sẽ lọc từ address_component có country_code <> NULL, address_component_level = 0 (cấp cao nhất), theo order)
 *          + Lưu ý: Mình sẽ import bằng tay vào db các quoc gia truoc --> co nghia la form nay khong tao quoc gia duoc.
 * - 2. Chọn đơn vi hanh chinh: Ứng với quốc gia trên --> lọc từ administrative_unit 
            + (chọn tinh --> không cần show ra VN, )
            + Chọn câp thâp hơn --> cho chọn từ cấp 1 trở  xuống (ex: Tinh -> Quan --> huyen..) cho đến cấp đang chọn
 * - 3. Nhập tên
 * - 4. ...Nhập các field còn lai
 * 
 * @Usage(use case): muốn cập nhật chi tiết account manager (edit AddressComponent)
 * @Input: id id dùng để tìm đúng account manager 
 * @Output: chi tiết AddressComponent từ db 
 *    AddressComponent : chi tiết account manager
 * @note 
 *    Khi vào màn hình chi tiết/cập nhật :
 *  - Load JS Ajax dữ liệu dạng root chi tiết địa chỉ + các địa chỉ cấp cha
 *  - Load JS Ajax danh sách đơn vị hành chính để mapping vào mảng dữ liệu địa chỉ và render ra các select địa chỉ cấp con tương ứng
 * @Flow: 
 * - B1: vào màn hình cập nhật có chi tiết account manager cụ thể
 * - B2: đổ dữ liệu vào màn hình để người dùng xem chi tiết account manager đó
*/
            
$router->get('accountmanagers/{id}/edit', [
    'as' => 'web_accountmanager_edit',
    'uses'  => 'AccountManagerController@editAccountManager',
]);
