<?php

namespace App\Containers\AccountManager\UI\API\Controllers;

use App\Containers\AccountManager\Data\Transporters\ProxyGetAllAccountManagerTransporter;

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
        // $params = [
        //     "id"            => $request->id,
        //     "app_brand"            => $request->app_brand,
        //     "app_code"           => $request->app_code,
        //     "domain_name"       => $request->domain_name,
        //     "site_name"     => $request->site_name,
        //     "base_url"           => $request->base_url,
        //     "company_name"           => $request->company_name,
        // ];

        // // lấy danh sách cấu thành địa chỉ
        // $result = Apiato::call('AccountManager@CreateAccountManagerAction', [new ProxyCreateAccountManagerTransporter($params)]);
        // $data   = $this->transform($result, AccountManagerTransformer::class);

        // // thông tin phân trang
        // // $meta       = $data['meta'];
        // // $pagination = $meta["pagination"] ?: [];
        // // unset($meta["pagination"]);
        // // $data       = $data['data'] ?: [];

        // // trả về dữ liệu response
        // return response()->json([
        //     'success'     => true,
        //     'STATUS'      => "OK",
        //     'status_code' => 200,
        //     // 'message'     => trans('address::address-component.api.list_all_address_components'),
        //     'data'        => $data,
        //     // 'pagination'  => $pagination,
        //     // 'meta'        => $meta,
        // ], 200);

        // return $this->created($this->transform($accountmanager, AccountManagerTransformer::class));
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
        $params = [
            "id"            => $request->id,
            "app_brand"            => $request->app_brand,
            "app_code"           => $request->app_code,
            "domain_name"       => $request->domain_name,
            "site_name"     => $request->site_name,
            "base_url"           => $request->base_url,
            "company_name"           => $request->company_name,
        ];

        // lấy danh sách cấu thành địa chỉ
        $result = Apiato::call('AccountManager@GetAllAccountManagerAction', [new ProxyGetAllAccountManagerTransporter($params)]);
        $data   = $this->transform($result, AccountManagerTransformer::class);

        // thông tin phân trang
        // $meta       = $data['meta'];
        // $pagination = $meta["pagination"] ?: [];
        // unset($meta["pagination"]);
        // $data       = $data['data'] ?: [];

        // trả về dữ liệu response
        return response()->json([
            'success'     => true,
            'STATUS'      => "OK",
            'status_code' => 200,
            // 'message'     => trans('address::address-component.api.list_all_address_components'),
            'data'        => $data,
            // 'pagination'  => $pagination,
            // 'meta'        => $meta,
        ], 200);
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
