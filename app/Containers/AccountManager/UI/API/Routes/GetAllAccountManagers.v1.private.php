<?php

/**
 * @apiGroup           AccountManager
 * @apiName            getAllAccountManagers
 *
 * @api                {GET} /v1/accountmanagers Endpoint title here..
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
 * @todo: lấy danh sách account manager .
 * @Usage(use case): muốn load danh sách account manager chỉ từ APIs (list AccountManager)
 * @Flow: 
 * - B1: gửi dữ liệu Resquest lên API (các params để filter)
 * - B2: load danh sách account manager
 * - B3: trả về dữ liệu response json danh sách account manager 
*/
$router->get('accountmanagers', [
    'as' => 'api_accountmanager_get_all_account_managers',
    'uses'  => 'AccountManagerController@getAllAccountManagers',
]);
