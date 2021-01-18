<?php

namespace App\Containers\AccountManager\Actions;

use App\Ship\Parents\Actions\Action;
use App\Ship\Parents\Requests\Request;
use Apiato\Core\Foundation\Facades\Apiato;
use App\Ship\Transporters\DataTransporter;

class GetAllAccountManagersAction extends Action
{
    public function run(DataTransporter $params)
    {
        $accountmanagers = Apiato::call('AccountManager@GetAllAccountManagersTask', [], ['
        	
        	addRequestCriteria',

        	"withParameters" => [$params],

        	"skipPagination" => [(boolean)$params->skipPagination],
    	]);

        return $accountmanagers;
    }
}
