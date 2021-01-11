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

        return view('accountmanager::account-manager.account-manager');
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
        return view('accountmanager::account-manager.detail-account-manager');
    }

    /**
     * Show one entity
     *
     * @param FindAccountManagerByIdRequest $request
     */
    public function show(FindAccountManagerByIdRequest $request, $id)
    {
        // $accountmanager = Apiato::call('AccountManager@FindAccountManagerByIdAction', [$id]);

        $result = Apiato::call('AccountManager@FindAccountManagerByIdAction', [$id]);
        
        // chi tiết cấu thành địa chỉ
        $accountManager = $result;
        // return $content
        //     ->title(trans("address::address-component.headers.find_by_id_address_component"))
        //     ->row(function($row) use($addressComponent) {

        //         $row->column(view('address::address-component.find-by-id-address-component', [
        //             "addressComponent"      =>  $addressComponent,
        //         ]), 12);
        //     })
        //     ->component("maps")
        //     ->component("forms")
        //     ->component('notification-alert-toast')
        //     ->component("dropdown-select-multiselect")
        //     ->component('jsrender')
        // ..
        return view('accountmanager::account-manager.detail-account-manager')->with('accountManager', $accountManager);
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
