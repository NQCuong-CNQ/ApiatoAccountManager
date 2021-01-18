<?php

/** ###ITVINA comment: ở đây sẽ giải thích use case theo người dùng của ứng dụng
 * @todo: Tạo address_component (country, province, district, township) combine theo cach tiếp cận mới 
 * 
 * - 1. Chọn quốc gia: List các mã quốc gia (sẽ lọc từ address_component có country_code <> NULL, address_component_level = 0 (cấp cao nhất), theo order)
 *          + Lưu ý: Mình sẽ import bằng tay vào db các quoc gia truoc --> co nghia la form nay khong tao quoc gia duoc.
 * - 2. Chọn đơn vi hanh chinh: Ứng với quốc gia trên --> lọc từ administrative_unit 
            + (chọn tinh --> không cần show ra VN, )
            + Chọn câp thâp hơn --> cho chọn từ cấp 1 trở  xuống (ex: Tinh -> Quan --> huyen..) cho đến cấp đang chọn
 * - 3. Nhập tên
 * - 4. ...Nhập các field còn lai
 * 
 * @Usage(use case): muốn tạo mới account manager (create AddressComponent)
 * @Input: 
 * @Output: form tạo account manager
 * @Flow: 
 * - B1: vào màn hình danh sách account manager click vào nút tạo mới
 * - B2: show form tạo mới account manager cho người dùng
*/
            
$router->get('accountmanagers/create', [
    'as' => 'web_accountmanager_create',
    'uses'  => 'AccountManagerController@createAccountManager',
]);
