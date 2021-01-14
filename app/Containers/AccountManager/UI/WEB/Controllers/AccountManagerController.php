<?php

namespace App\Containers\AccountManager\UI\WEB\Controllers;

use App\Containers\AccountManager\UI\WEB\Requests\CreateAccountManagerRequest;
use App\Containers\AccountManager\UI\WEB\Requests\DeleteAccountManagerRequest;
use App\Containers\AccountManager\UI\WEB\Requests\GetAllAccountManagersRequest;
use App\Containers\AccountManager\UI\WEB\Requests\FindAccountManagerByIdRequest;
use App\Containers\AccountManager\UI\WEB\Requests\UpdateAccountManagerRequest;
use App\Containers\AccountManager\UI\WEB\Requests\StoreAccountManagerRequest;
use App\Containers\AccountManager\UI\WEB\Requests\EditAccountManagerRequest;
use App\Ship\Parents\Controllers\WebController;
use Apiato\Core\Foundation\Facades\Apiato;

/**
 * Class AccountManagerController
 *
 * @package App\Containers\AccountManager\UI\WEB\Controllers
 */
class AccountManagerController extends WebController
{
    /**
     * Show all entities
     *
     * @param GetAllAccountManagersRequest $request
     */
    public function index(GetAllAccountManagersRequest $request)
    {

        return view('accountmanager::account-manager.account-manager');
    }

    /**
     * Show one entity
     *
     * @param FindAccountManagerByIdRequest $request
     */
    public function show(FindAccountManagerByIdRequest $request, $id)
    {
        $accountManager = Apiato::call('AccountManager@FindAccountManagerByIdAction', [$id]);

        return view('accountmanager::account-manager.detail-account-manager')->with('accountManager', $accountManager);
    }

    /**
     * Create entity (show UI)
     *
     * @param CreateAccountManagerRequest $request
     */
    public function create(CreateAccountManagerRequest $request)
    {
        return view('accountmanager::account-manager.addnew-account-manager');
    }

    /**
     * Add a new entity
     *
     * @param StoreAccountManagerRequest $request
     */
    public function store(StoreAccountManagerRequest $request)
    {
        $accountmanager = Apiato::call('AccountManager@CreateAccountManagerAction', [$request]);

        // ..
    }

    /**
     * Edit entity (show UI)
     *
     * @param EditAccountManagerRequest $request
     */
    public function edit(EditAccountManagerRequest $request, $id)
    {
        $accountManager = Apiato::call('AccountManager@FindAccountManagerByIdAction', [$id]);

        return view('accountmanager::account-manager.edit-account-manager')->with('accountManager', $accountManager);
    }

    /**
     * Update a given entity
     *
     * @param UpdateAccountManagerRequest $request
     */
    public function update(UpdateAccountManagerRequest $request)
    {
        $accountmanager = Apiato::call('AccountManager@UpdateAccountManagerAction', [$request]);

        // ..
    }

    /**
     * Delete a given entity
     *
     * @param DeleteAccountManagerRequest $request
     */
    public function delete(DeleteAccountManagerRequest $request)
    {
         $result = Apiato::call('AccountManager@DeleteAccountManagerAction', [$request]);

         // ..
    }
}
