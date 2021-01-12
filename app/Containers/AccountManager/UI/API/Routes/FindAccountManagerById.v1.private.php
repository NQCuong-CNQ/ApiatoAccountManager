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
 * @apiParam           {String}  parameters here..
 *
 * @apiSuccessExample  {json}  Success-Response:
 * HTTP/1.1 200 OK
{
  // Insert the response of the request here...
}
 */

/** @var Route $router */
$router->get('accountmanagers/{id}', [
    'as' => 'api_accountmanager_find_account_manager_by_id',
    'uses'  => 'Controller@findAccountManagerById',
]);
