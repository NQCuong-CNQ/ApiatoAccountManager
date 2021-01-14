<?php

/** @var Route $router */
$router->patch('accountmanagers/{id}', [
    'as' => 'web_accountmanager_update',
    'uses'  => 'AccountManagerController@update',
]);
