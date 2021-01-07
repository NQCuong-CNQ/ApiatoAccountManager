<?php

namespace App\Containers\AccountManager\UI\API\Controllers;

use App\Containers\AccountManager\UI\API\Requests\CreateAccountManagerRequest;
use App\Containers\AccountManager\UI\API\Requests\DeleteAccountManagerRequest;
use App\Containers\AccountManager\UI\API\Requests\GetAllAccountManagersRequest;
use App\Containers\AccountManager\UI\API\Requests\FindAccountManagerByIdRequest;
use App\Containers\AccountManager\UI\API\Requests\UpdateAccountManagerRequest;
use App\Containers\AccountManager\UI\API\Transformers\AccountManagerTransformer;
use App\Ship\Parents\Controllers\ApiController;
use Apiato\Core\Foundation\Facades\Apiato;

/**
 * Class Controller
 *
 * @package App\Containers\AccountManager\UI\API\Controllers
 */
class Controller extends ApiController
{
    /**
     * @param CreateAccountManagerRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createAccountManager(CreateAccountManagerRequest $request)
    {
        $accountmanager = Apiato::call('AccountManager@CreateAccountManagerAction', [$request]);

        return $this->created($this->transform($accountmanager, AccountManagerTransformer::class));
    }

    /**
     * @param FindAccountManagerByIdRequest $request
     * @return array
     */
    public function findAccountManagerById(FindAccountManagerByIdRequest $request)
    {
        $accountmanager = Apiato::call('AccountManager@FindAccountManagerByIdAction', [$request]);

        return $this->transform($accountmanager, AccountManagerTransformer::class);
    }

    /**
     * @param GetAllAccountManagersRequest $request
     * @return array
     */
    public function getAllAccountManagers(GetAllAccountManagersRequest $request)
    {
        $accountmanagers = Apiato::call('AccountManager@GetAllAccountManagersAction', [$request]);

        return $this->transform($accountmanagers, AccountManagerTransformer::class);
    }

    /**
     * @param UpdateAccountManagerRequest $request
     * @return array
     */
    public function updateAccountManager(UpdateAccountManagerRequest $request)
    {
        $accountmanager = Apiato::call('AccountManager@UpdateAccountManagerAction', [$request]);

        return $this->transform($accountmanager, AccountManagerTransformer::class);
    }

    /**
     * @param DeleteAccountManagerRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteAccountManager(DeleteAccountManagerRequest $request)
    {
        Apiato::call('AccountManager@DeleteAccountManagerAction', [$request]);

        return $this->noContent();
    }
}
