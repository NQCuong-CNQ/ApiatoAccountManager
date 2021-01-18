<?php

/**
 * @apiGroup           AccountManager
 * @apiName            createAccountManager
 *
 * @api                {POST} /v1/accountmanagers Endpoint title here..
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
 * @todo: gọi API tạo mới account manager .
 * @Usage(use case): muốn tạo mới account manager (create AccountManager)
 * @Input: 
 * @Output: Response 200
 *    data chi tiết account manager vừa tạo
 * @Flow: 
 * - B1: gửi dữ liệu tạo mới 
 * - B2: kiểm tra dữ liệu bằng Request
 * - B3: dùng dữ liệu tạo mới một account manager
*/
$router->post('create_account_managers', [
    'as' => 'api_accountmanager_create_account_manager',
    'uses'  => 'AccountManagerController@createAccountManager',
]);
