<?php

namespace App\Containers\AccountManager\Actions;

use App\Ship\Parents\Actions\Action;
use App\Ship\Parents\Requests\Request;
use Apiato\Core\Foundation\Facades\Apiato;

class GetAllAccountManagersAction extends Action
{
    public function run(Request $request)
    {
        $accountmanagers = Apiato::call('AccountManager@GetAllAccountManagersTask', [], ['addRequestCriteria']);

        return $accountmanagers;
    }
}
