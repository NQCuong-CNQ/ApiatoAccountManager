<?php

/** @var Route $router */
$router->patch('accountmanagers/{id}', [
    'as' => 'web_accountmanager_update',
    'uses'  => 'Controller@update',
    'middleware' => [
      'auth:web',
    ],
]);
