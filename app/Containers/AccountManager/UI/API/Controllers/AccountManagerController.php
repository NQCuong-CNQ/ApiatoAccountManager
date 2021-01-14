<?php
/**
 * @todo: controller xử lý các nghiệp vụ liên quan đến quản lý AccountManager bằng APIs,
 * - Lay danh sách AccountManager  (getAllAccountManagers())
 * - Cap nhat AccountManager  (updateAccountManager())
 * - Thêm mới AccountManager  (createAccountManager())
 * - Xóa AccountManager  (deleteAccountManager())
 * - Tìm kiếm AccountManager theo ID  (findAccountManagerById())
 */
namespace App\Containers\AccountManager\UI\API\Controllers;

use App\Containers\AccountManager\Data\Transporters\ProxyGetAllAccountManagerTransporter;
use App\Containers\AccountManager\Data\Transporters\ProxyCreateAccountManagerTransporter;
use App\Containers\AccountManager\Data\Transporters\ProxyUpdateAccountManagerTransporter;
use App\Containers\AccountManager\UI\API\Requests\CreateAccountManagerRequest;
use App\Containers\AccountManager\UI\API\Requests\DeleteAccountManagerRequest;
use App\Containers\AccountManager\UI\API\Requests\GetAllAccountManagersRequest;
use App\Containers\AccountManager\UI\API\Requests\FindAccountManagerByIdRequest;
use App\Containers\AccountManager\UI\API\Requests\UpdateAccountManagerRequest;
use App\Containers\AccountManager\UI\API\Transformers\AccountManagerTransformer;
use App\Ship\Parents\Controllers\ApiController;
use Apiato\Core\Foundation\Facades\Apiato;

/**
 * Class AccountManagerController
 *
 * @package App\Containers\AccountManager\UI\API\Controllers
 */
class AccountManagerController extends ApiController
{
    /**
     * @todo hàm thêm mới AccountManager
     * - thêm mới AccountManager bằng dữ liệu Request
     * @author Cường
     * @param Request params để thêm mới AccountManager
     * - company_name : Tên công ty
     * - app_name : Tên ứng dụng
     * - app_brand : Loại ứng dụng
     * - app_code : Mã ứng dụng ENUM('SMARTPOST', 'PMVE', 'TRANSPORT', 'FLEETMANAGEMENT')
     * - domain_name : Tên domain
     * - site_name : Tên site
     * - base_url : Địa chỉ url
     * @since 14/01/2021
     * @algorithm
     *  - Gọi đến action CreateAccountManagerAction --> task CreateAccountManagerTask
     *  - Giao tiếp với CSLD tbl_domain_config bằng AccountManagerRepository
     *  - Lấy dữ liệu Request truyền vào để thêm mới cho AccountManager đó --> trả về AccountManager vừa thêm mới
     *  - Lấy dữ liệu trả về từ action format bằng AddressComponentTransformer
     *  - Trả về dữ liệu json
     */
    public function createAccountManager(CreateAccountManagerRequest $request)
    {
        // từ controller gọi qua action format param
        // và truyền qua action chứ không truyền request
        $params = [
            // company_name : Tên công ty
            "company_name"          => $request->company_name,
            // app_name : Tên ứng dụng
            "app_name"              => $request->app_name,
            // app_brand : Loại ứng dụng
            "app_brand"             => $request->app_brand,
            // app_code : Mã ứng dụng ENUM('SMARTPOST', 'PMVE', 'TRANSPORT', 'FLEETMANAGEMENT')
            "app_code"              => $request->app_code,
            // domain_name : Tên domain
            "domain_name"           => $request->domain_name,
            // site_name : Tên site
            "site_name"             => $request->site_name,
            // base_url : Địa chỉ url
            "base_url"              => $request->base_url,
        ];

        // lấy danh sách AccountManager
        $result = Apiato::call('AccountManager@CreateAccountManagerAction', [new ProxyCreateAccountManagerTransporter($params)]);
        $data   = $this->transform($result, AccountManagerTransformer::class);

        // lấy chi tiết AccountManager vừa tạo
        $data       = $data['data'] ?: [];

        // // trả về dữ liệu response
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

    
    public function findAccountManagerById(FindAccountManagerByIdRequest $request)
    {
        $result = Apiato::call('AccountManager@FindAccountManagerByIdAction', [$request]);
        $data = $this->transform($result, AccountManagerTransformer::class);
        // lấy dữ liệu chi tiết địa chỉ
        $addressComponent = $data['data'] ?: [];
        // trả về dữ liệu response
        return response()->json([
            'success'       => true,
            'STATUS'        => "OK",
            'status_code'   => 200,
            // 'message'       => trans('address::address-component.api.find_by_id_address_component'),
            'data'          => $addressComponent,
        ], 200);

        $accountmanager = Apiato::call('AccountManager@FindAccountManagerByIdAction', [$request]);
    }


    public function getAllAccountManagers(GetAllAccountManagersRequest $request)
    {
        $params = [
            "id"                    => $request->id,
            "app_brand"             => $request->app_brand,
            "app_code"              => $request->app_code,
            "domain_name"           => $request->domain_name,
            "site_name"             => $request->site_name,
            "base_url"              => $request->base_url,
            "company_name"          => $request->company_name,
        ];

        // lấy danh sách AccountManager
        $result = Apiato::call('AccountManager@GetAllAccountManagersAction', [new ProxyGetAllAccountManagerTransporter($params)]);
        $data   = $this->transform($result, AccountManagerTransformer::class);

        // thông tin phân trang
        $meta       = $data['meta'];
        $pagination = $meta["pagination"] ?: [];
        unset($meta["pagination"]);
        $data       = $data['data'] ?: [];

        // trả về dữ liệu response
        return response()->json([
            'success'     => true,
            'STATUS'      => "OK",
            'status_code' => 200,
            // 'message'     => trans('address::address-component.api.list_all_address_components'),
            'data'        => $data,
            'pagination'  => $pagination,
            'meta'        => $meta,
        ], 200);
    }


    public function updateAccountManager(UpdateAccountManagerRequest $request, $id)
    {
        $params = [
            "company_name"          => $request->company_name,
            "app_name"              => $request->app_name,
            "app_brand"             => $request->app_brand,
            "app_code"              => $request->app_code,
            "domain_name"           => $request->domain_name,
            "site_name"             => $request->site_name,
            "base_url"              => $request->base_url,
        ];

        // lấy danh sách AccountManager
        $result = Apiato::call('AccountManager@UpdateAccountManagerAction', [new ProxyUpdateAccountManagerTransporter($params), $id]);
        $data   = $this->transform($result, AccountManagerTransformer::class);

        $accountManager = $data["data"] ?: [];
        // trả về dữ liệu response
        return response()->json([
            'success'       => true,
            'STATUS'        => "OK",
            'status_code'   => 200,
            // 'message'       => trans('address::address-component.api.update_address_component'),
            'data'          => $accountManager,
        ], 200);
    }

    public function deleteAccountManager(DeleteAccountManagerRequest $request, $id)
    {
        $result = Apiato::call('AccountManager@DeleteAccountManagerAction', [$id]);
        // trả về dữ liệu response
        return response()->json([
            'success'       => true,
            'STATUS'        => "OK",
            'status_code'   => 200,
            // 'message'       => trans('address::address-component.api.delete_address_component'),
        ], 200);
    }
}
