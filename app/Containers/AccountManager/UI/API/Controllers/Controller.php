<?php
/**
 * @todo: controller xử lý các nghiệp vụ liên quan đến quản lý AccountManager bằng APIs,
 * - Lay danh sách cấu thành địa chỉ AddressComponent (listAllAddressComponents())
 * - Cap nhat cấu thành địa chỉ AddressComponent (updateAddressComponent())
 * - Thêm mới cấu thành địa chỉ AddressComponent (storeAddressComponent())
 * - Xóa cấu thành địa chỉ AddressComponent (deleteAddressComponent())
 * - cập nhật trạng thái cấu thành địa chỉ AddressComponent (changeStatusAddressComponent())
 */
namespace App\Containers\AccountManager\UI\API\Controllers;

use App\Containers\AccountManager\Data\Transporters\ProxyGetAllAccountManagerTransporter;
use App\Containers\AccountManager\Data\Transporters\ProxyCreateAccountManagerTransporter;

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
     * @todo Lấy danh sách cấu thành địa chỉ
     * - lấy danh sách tất cả cấu thành địa chỉ
     * @author Quốc Dũng
     * @param Request $request
     * search dùng cho chức năng search tự động theo keyword các field được định nghĩa trong $fieldSearchable AddressComponentRepository
     * address_component_code : tên cấu thành địa chỉ
     * address_component_name : mã cấu thành địa chỉ
     * address_component_alias : tên không dấu / alias để matching dữ liệu cho dễ
     * address_component_post_code : mã postcode
     * page lấy dữ liệu theo trang nào
     * limit lấy giới hạn mỗi trang bao nhiêu dữ liệu
     * search lọc bằng datatables
     * include : lấy bảng khóa ngoại của cấu thành địa chỉ
     * @since 18-05-2020
     * @algorithm
     *  - Gọi đến action ListAllAddressComponentsAction --> task GetAllAddressComponentsTask
     *  - Giao tiếp với CSLD tbl_location bằng AddressComponentRepository để lấy mảng danh sách cấu thành địa chỉ
     *  - Lấy dữ liệu trả về từ action format bằng AddressComponentTransformer
     *  - Render ra view danh sách cấu thành địa chỉ bằng dữ liệu đã được format
     * @change Dũng 08/06/2020
     * thêm phần phân trang cho serverside datatables
     * params['limit'] : nếu truyền vào sẽ lấy danh sách cấu thành địa chỉ phân trang bằng $params['limit']
     * - Giao tiếp với CSLD tbl_location bằng AddressComponentRepository để đếm mảng danh sách cấu thành địa chỉ
     */
    public function createAccountManager(CreateAccountManagerRequest $request)
    {
        // từ controller gọi qua action format param
        // và truyền qua action chứ không truyền request
        $params = [
            "company_name"          => $request->company_name,
            "app_name"              => $request->app_name,
            "app_brand"             => $request->app_brand,
            "app_code"              => $request->app_code,
            "domain_name"           => $request->domain_name,
            "site_name"             => $request->site_name,
            "base_url"              => $request->base_url,
        ];

        // lấy danh sách cấu thành địa chỉ
        $result = Apiato::call('AccountManager@CreateAccountManagerAction', [new ProxyCreateAccountManagerTransporter($params)]);
        $data   = $this->transform($result, AccountManagerTransformer::class);

        // // thông tin phân trang
        // $meta       = $data['meta'];
        // $pagination = $meta["pagination"] ?: [];
        // unset($meta["pagination"]);
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

    /**
     * @todo Màn hình form thêm mới partner
     * - Trả về màn hình thêm mới partner
     * @author Nguyễn Chiến
     * @param Request $request
     * @since 21/09/2020
     * @return Content
     * - view form thêm mới partner
     * @algorithm 
     * _ phần này không có xử lý nghiệp vụ nên không gọi Action và Task
     * _ Chỉ trả về view form cho người dùng thêm mới partner
     */
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

    /**
     * @todo Màn hình form thêm mới partner
     * - Trả về màn hình thêm mới partner
     * @author Nguyễn Chiến
     * @param Request $request
     * @since 21/09/2020
     * @return Content
     * - view form thêm mới partner
     * @algorithm 
     * _ phần này không có xử lý nghiệp vụ nên không gọi Action và Task
     * _ Chỉ trả về view form cho người dùng thêm mới partner
     */
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

        // lấy danh sách cấu thành địa chỉ
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

    /**
     * @todo Màn hình form thêm mới partner
     * - Trả về màn hình thêm mới partner
     * @author Nguyễn Chiến
     * @param Request $request
     * @since 21/09/2020
     * @return Content
     * - view form thêm mới partner
     * @algorithm 
     * _ phần này không có xử lý nghiệp vụ nên không gọi Action và Task
     * _ Chỉ trả về view form cho người dùng thêm mới partner
     */
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

        // lấy danh sách cấu thành địa chỉ
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

    /**
     * @todo Màn hình form thêm mới partner
     * - Trả về màn hình thêm mới partner
     * @author Nguyễn Chiến
     * @param Request $request
     * @since 21/09/2020
     * @return Content
     * - view form thêm mới partner
     * @algorithm 
     * _ phần này không có xử lý nghiệp vụ nên không gọi Action và Task
     * _ Chỉ trả về view form cho người dùng thêm mới partner
     */
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
