<?php

namespace App\Containers\AccountManager\Actions;

use App\Ship\Parents\Actions\Action;
use App\Ship\Parents\Requests\Request;
use Apiato\Core\Foundation\Facades\Apiato;
use App\Ship\Transporters\DataTransporter;

class UpdateAccountManagerAction extends Action
{
    public function run(DataTransporter $data, $id)
    {
        $accountmanager = Apiato::call('AccountManager@UpdateAccountManagerTask', [$id, $data]);

        return $accountmanager;
    }
}
