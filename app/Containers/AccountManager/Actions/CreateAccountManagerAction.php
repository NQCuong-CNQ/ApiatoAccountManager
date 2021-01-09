<?php

namespace App\Containers\AccountManager\Actions;

use App\Ship\Parents\Actions\Action;
use App\Ship\Parents\Requests\Request;
use Apiato\Core\Foundation\Facades\Apiato;
use App\Ship\Transporters\DataTransporter;

class CreateAccountManagerAction extends Action
{
    public function run(DataTransporter $data)
    {
        // $data = $request->sanitizeInput([
        //     // add your request data here
        // ]);

        $accountmanager = Apiato::call('AccountManager@CreateAccountManagerTask', [$data]);
        

        // return $accountmanager;
    }
}
