<?php

/**
 * @apiGroup           AccountManager
 * @apiName            deleteAccountManager
 *
 * @api                {DELETE} /v1/accountmanagers/:id Endpoint title here..
 * @apiDescription     Endpoint description here..
 *
 * @apiVersion         1.0.0
 * @apiPermission      none
 *
 * @apiParam           {String}  parameters here..
 *
 * @apiSuccessExample  {json}  Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "success": true,
 *   "STATUS": "OK",
 *   "status_code": 200,
 *   "message": "Xóa account manager thành công"
 * }
 */

/** ###ITVINA comment: ở đây sẽ giải thích use case theo người dùng của ứng dụng
 * @todo: xóa account manager.
 * @Usage(use case): Địa chỉ muốn xóa account manager (delete AccountManager)
 * @Input: id account manager
 * @Output: Response 200
 * @Flow: 
 * - B1: người dùng click vào nút xóa account manager -- gọi API truyền id
 * - B2: xóa account manager đã chọn và trả về response thông báo thành công
*/
$router->delete('accountmanagers/{id}', [
    'as' => 'api_accountmanager_delete_account_manager',
    'uses'  => 'AccountManagerController@deleteAccountManager',
]);
