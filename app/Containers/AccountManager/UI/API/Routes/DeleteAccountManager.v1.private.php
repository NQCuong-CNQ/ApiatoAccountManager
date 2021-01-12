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
{
  // Insert the response of the request here...
}
 */

/** @var Route $router */
$router->delete('accountmanagers/{id}', [
    'as' => 'api_accountmanager_delete_account_manager',
    'uses'  => 'Controller@deleteAccountManager',
]);
