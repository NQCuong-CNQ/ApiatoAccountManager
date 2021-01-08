<?php

$router->get('/', [
    'as'   => 'home_page',
    'uses' => 'Controller@index',
]);

$router->get('addNew', [
    'as'   => 'addNew',
    'uses' => 'Controller@addNew',
]);
