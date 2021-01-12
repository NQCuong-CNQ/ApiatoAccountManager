<?php

/** @var Route $router */
$router->get('accountmanagers/create', [
    'as' => 'web_accountmanager_create',
    'uses'  => 'Controller@create',
]);
