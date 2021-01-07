<?php

/** @var Route $router */
$router->post('accountmanagers/store', [
    'as' => 'web_accountmanager_store',
    'uses'  => 'Controller@store',
    'middleware' => [
      'auth:web',
    ],
]);
