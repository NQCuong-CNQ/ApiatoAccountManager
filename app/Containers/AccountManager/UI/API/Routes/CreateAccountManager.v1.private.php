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
 * @apiParam           {String}  parameters here..
 *
 * @apiSuccessExample  {json}  Success-Response:
 * HTTP/1.1 200 OK
{
  // Insert the response of the request here...
}
 */

/** @var Route $router */
$router->post('create_account_managers', [
    'as' => 'api_accountmanager_create_account_manager',
    'uses'  => 'Controller@createAccountManager',
]);
