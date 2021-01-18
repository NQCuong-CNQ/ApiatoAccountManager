<?php

/** ###ITVINA comment: ở đây sẽ giải thích use case theo người dùng của ứng dụng
 * @todo: lấy danh sách tất cả account manager .
 * @Usage(use case): xem danh sách account manager (list AddressComponent)
 * @Input: 
 * @Output: Route này không trả ra dữ liệu mà chỉ trả view ( dữ liệu được load vào view bằng ajax)
 * @Flow: 
 * - B1: vào màn hình danh sách account manager
 * - B2: dữ liệu được load vào màn hình bằng ajax datatables serverside processing
*/

$router->get('/', [
    'as' => 'web_accountmanager_index',
    'uses'  => 'AccountManagerController@getAllAccountManagers',
]);
