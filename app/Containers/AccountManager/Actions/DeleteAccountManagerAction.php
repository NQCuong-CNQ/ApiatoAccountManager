<?php

namespace App\Containers\AccountManager\Actions;

use App\Ship\Parents\Actions\Action;
use App\Ship\Parents\Requests\Request;
use Apiato\Core\Foundation\Facades\Apiato;

class DeleteAccountManagerAction extends Action
{
    public function run(Request $request)
    {
        return Apiato::call('AccountManager@DeleteAccountManagerTask', [$request->id]);
    }
}
