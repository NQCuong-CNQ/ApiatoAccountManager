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
 * @apiParam           {String}  parameters here..
 *
 * @apiSuccessExample  {json}  Success-Response:
 * HTTP/1.1 200 OK
{
  // Insert the response of the request here...
}
 */

/** @var Route $router */
$router->get('accountmanagers', [
    'as' => 'api_accountmanager_get_all_account_managers',
    'uses'  => 'Controller@getAllAccountManagers',
    // 'middleware' => [
    //   'auth:api',
    // ],
]);
