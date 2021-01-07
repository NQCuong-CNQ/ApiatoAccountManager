<?php

$router->get('/', [
    'as'   => 'home_page',
    'uses' => 'Controller@index',
]);
