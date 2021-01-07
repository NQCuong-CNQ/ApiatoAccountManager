<?php

/** @var Route $router */
$router->get('accountmanagers', [
    'as' => 'web_accountmanager_index',
    'uses'  => 'Controller@index',
    'middleware' => [
      'auth:web',
    ],
]);
