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
 * Class Controller
 *
 * @package App\Containers\AccountManager\UI\WEB\Controllers
 */
class Controller extends WebController
{
    /**
     * Show all entities
     *
     * @param GetAllAccountManagersRequest $request
     */
    public function index(GetAllAccountManagersRequest $request)
    {

        return view('accountmanager::pages.mainpage');
    }

    /**
     * Show all entities
     *
     * @param GetAllAccountManagersRequest $request
     */
    public function addNew(GetAllAccountManagersRequest $request)
    {
        // $accountmanagers = Apiato::call('AccountManager@GetAllAccountManagersAction', [$request]);

        // ..
        return view('accountmanager::pages.add-account-manager');
    }

    /**
     * Show one entity
     *
     * @param FindAccountManagerByIdRequest $request
     */
    public function show(FindAccountManagerByIdRequest $request)
    {
        $accountmanager = Apiato::call('AccountManager@FindAccountManagerByIdAction', [$request]);

        // ..
    }

    /**
     * Create entity (show UI)
     *
     * @param CreateAccountManagerRequest $request
     */
    public function create(CreateAccountManagerRequest $request)
    {
        // ..
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
    public function edit(EditAccountManagerRequest $request)
    {
        $accountmanager = Apiato::call('AccountManager@GetAccountManagerByIdAction', [$request]);

        // ..
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
