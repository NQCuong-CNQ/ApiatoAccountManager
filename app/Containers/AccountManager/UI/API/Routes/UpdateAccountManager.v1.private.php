<?php

/**
 * @apiGroup           AccountManager
 * @apiName            updateAccountManager
 *
 * @api                {PATCH} /v1/accountmanagers/:id Endpoint title here..
 * @apiDescription     Endpoint description here..
 *
 * @apiVersion         1.0.0
 * @apiPermission      none
 *
 * @apiParam           {String}  company_name (required) Tên công ty
 * @apiParam           {String}  app_name (required) Tên ứng dụng
 * @apiParam           {Emun}  app_brand (required) Loại ứng dụng ENUM('PMVE','WEBSITE_PMVE','PMHANG','TRACKING_PMHANG','NHAN_SU','MANUAL')
 * @apiParam           {String}  app_code (required) Mã ứng dụng
 * @apiParam           {String}  domain_name (required) Tên domain
 * @apiParam           {String}  site_name (optional) Tên site
 * @apiParam           {String}  base_url (optional) Địa chỉ url
 *
 * @apiSuccessExample  {json}  Success-Response:
 * HTTP/1.1 200 OK
{
 *     "success": true,
 *     "STATUS": "OK",
 *     "status_code": 200,
 *     "message": "Thêm mới account manager thành công",
 *     "data": {
 *         "object": "AccountManager",
 *         "id": null,
 *         "company_name": 'Công ty An Hòa Hiệp',
 *         "app_name": 'Phần mềm vé',
 *         "app_brand": 'phanmemve',
 *         "app_code": 'phanmemve',
 *         "domain_name": 'anhoahiepexpress.phanmemve.vn',
 *         "site_name": 'Tracking phần mềm hàng',
 *         "base_url": 'anhoahiepexpress.phanmemve.vn',
 *     }
}
 */

/** ###ITVINA comment: ở đây sẽ giải thích use case theo người dùng của ứng dụng
 * @todo: gọi API cập nhật account manager .
 * @Usage(use case): muốn cập nhậtaccount manager (update AccountManager)
 * @Input: 
 * @Output: Response 200
 *    data chi tiết account manager vừa cập nhật
 * @Flow: 
 * - B1: gửi dữ liệu cập nhật 
 * - B2: kiểm tra dữ liệu bằng Request
 * - B3: dùng dữ liệu cập nhật một account manager
*/
$router->put('accountmanagers/{id}', [
    'as' => 'api_accountmanager_update_account_manager',
    'uses'  => 'AccountManagerController@updateAccountManager',
]);
