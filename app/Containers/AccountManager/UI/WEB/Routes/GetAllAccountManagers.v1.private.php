<?php

/** @var Route $router */
$router->get('/', [
    'as' => 'web_accountmanager_index',
    'uses'  => 'Controller@index',
]);
