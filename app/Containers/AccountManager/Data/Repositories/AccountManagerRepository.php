<?php

namespace App\Containers\AccountManager\Data\Repositories;

use App\Ship\Parents\Repositories\Repository;

/**
 * Class AccountManagerRepository
 */
class AccountManagerRepository extends Repository
{

    /**
     * @var array
     */
    protected $fieldSearchable = [
        'id' => '=',
        // ...
    ];

}
