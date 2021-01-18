<?php

/**
 * @apiGroup           AccountManager
 * @apiName            findAccountManagerById
 *
 * @api                {GET} /v1/accountmanagers/:id Endpoint title here..
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
 * @todo: Api lấy gốc dữ liệu account manager
 * @Usage(use case): Hàm sử dụng khi người dùng cần lấy dữ liệu account manager id account manager đưa vào, 
 * @Flow: 
 * vd: có $id sẽ lấy được dữ liệu gồm :
 * -- Tên công ty
 * -- Tên ứng dụng
 * -- Loại ứng dụng 
 * -- Mã ứng dụng
 * -- Tên domain
 * -- Tên site
 * -- Địa chỉ url
*/
$router->get('accountmanagers/{id}', [
    'as' => 'api_accountmanager_find_account_manager_by_id',
    'uses'  => 'AccountManagerController@findAccountManagerById',
]);
