<?php

/** @var Route $router */
$router->delete('accountmanagers/{id}', [
    'as' => 'web_accountmanager_delete',
    'uses'  => 'Controller@delete',
    'middleware' => [
      'auth:web',
    ],
]);
