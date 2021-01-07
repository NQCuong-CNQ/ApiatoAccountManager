<?php

/** @var Route $router */
$router->get('accountmanagers/{id}/edit', [
    'as' => 'web_accountmanager_edit',
    'uses'  => 'Controller@edit',
    'middleware' => [
      'auth:web',
    ],
]);
