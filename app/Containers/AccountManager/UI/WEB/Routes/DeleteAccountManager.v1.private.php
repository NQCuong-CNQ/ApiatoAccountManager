<?php

/** @var Route $router */
$router->delete('accountmanagers/{id}', [
    'as' => 'web_accountmanager_delete',
    'uses'  => 'AccountManagerController@delete',
]);
