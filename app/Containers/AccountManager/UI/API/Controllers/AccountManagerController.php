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
     *  - Lấy dữ liệu trả về từ action format bằng AccountManagerTransformer
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
            'message'     => 'Thêm mới thành công',
            'data'        => $data,
            // 'pagination'  => $pagination,
            // 'meta'        => $meta,
        ], 200);
    }

    /**
     * @todo Hàm lấy dữ liệu chi tiết của account manager 
     * Hàm sử dụng khi người dùng cần lấy dữ liệu account manager
     * @algorithm
     *  - Gọi đến action FindAccountManagerByIdAction --> task FindAccountManagerByIdTask
     *  - Giao tiếp với CSLD tbl_domain_config bằng AccountManagerRepository để lấy mảng danh sách account manager
     *  - Lấy dữ liệu trả về từ action format bằng AccountManagerTransformer
     *  - Trả về dữ liệu json
     * @author Cường
     * @param $id của account manager cần lấy dữ liệu
     * @param FindAccountManagerByIdRequest $request
     * @since 16-01-2021
     */
    public function findAccountManagerById(FindAccountManagerByIdRequest $request, $id)
    {
        $result = Apiato::call('AccountManager@FindAccountManagerByIdAction', [$id]);
        $data = $this->transform($result, AccountManagerTransformer::class);
        // lấy dữ liệu chi tiết địa chỉ
        $AccountManager = $data['data'] ?: [];
        // trả về dữ liệu response
        return response()->json([
            'success'       => true,
            'STATUS'        => "OK",
            'status_code'   => 200,
            'message'       => 'Tìm kiếm thành công',
            'data'          => $AccountManager,
        ], 200);

        $accountmanager = Apiato::call('AccountManager@FindAccountManagerByIdAction', [$request]);
    }

    /**
     * @todo Lấy danh sách account manager
     * - lấy danh sách tất cả account manager
     * @author Cường
     * @param GetAllAccountManagersRequest $request
     * - company_name : Tên công ty
     * - app_name : Tên ứng dụng
     * - app_brand : Loại ứng dụng
     * - app_code : Mã ứng dụng ENUM('SMARTPOST', 'PMVE', 'TRANSPORT', 'FLEETMANAGEMENT')
     * - domain_name : Tên domain
     * - site_name : Tên site
     * - base_url : Địa chỉ url
     * @since 16-01-2021
     * @algorithm
     *  - Gọi đến action GetAllAccountManagersAction --> task GetAllAccountManagersTask
     *  - Giao tiếp với CSLD tbl_domain_config bằng AccountManagerRepository để lấy mảng danh sách account manager
     *  - Lấy dữ liệu trả về từ action format bằng AccountManagerTransformer
     *  - Trả về dữ liệu json
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
            'message'     => 'Lấy dữ liệu thành công',
            'data'        => $data,
            'pagination'  => $pagination,
            'meta'        => $meta,
        ], 200);
    }

    /**
     * @todo hàm cập nhật account manager
     * - tìm account manager cần cập nhật bằng uuid
     * @author Cường
     * @param id $id account manager cần cập nhật
     * @param Request params để cập nhật account manager
     * - company_name : Tên công ty
     * - app_name : Tên ứng dụng
     * - app_brand : Loại ứng dụng
     * - app_code : Mã ứng dụng ENUM('SMARTPOST', 'PMVE', 'TRANSPORT', 'FLEETMANAGEMENT')
     * - domain_name : Tên domain
     * - site_name : Tên site
     * - base_url : Địa chỉ url
     * @since 16-01-2021
     * @algorithm
     *  - Gọi đến action UpdateAccountManagerAction --> task UpdateAccountManagerTask
     *  - Giao tiếp với CSLD tbl_domain_config bằng AccountManagerRepository
     *  - Lấy dữ liệu Request truyền vào để cập nhật cho account manager đó --> trả về account manager vừa thêm mới
     *  - Lấy dữ liệu trả về từ action format bằng AccountManagerTransformer
     *  - Trả về dữ liệu json
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

        // lấy danh sách AccountManager
        $result = Apiato::call('AccountManager@UpdateAccountManagerAction', [new ProxyUpdateAccountManagerTransporter($params), $id]);
        $data   = $this->transform($result, AccountManagerTransformer::class);

        $accountManager = $data["data"] ?: [];
        // trả về dữ liệu response
        return response()->json([
            'success'       => true,
            'STATUS'        => "OK",
            'status_code'   => 200,
            'message'       => 'Câp nhật thành công',
            'data'          => $accountManager,
        ], 200);
    }

    /**
     * @todo Xóa account manager
     * - tìm account manager bằng $id truyền vào và xóa account manager đó
     * @author Cường
     * @param Id $id của account manager muốn xóa
     * @since 16-01-2021
     * @algorithm
     *  - Gọi đến action DeleteAccountManagerAction --> task DeleteAccountManagerTask
     *  - Giao tiếp với CSLD tbl_domain_config bằng AccountManagerRepository để account manager bằng $uuid
     *  - Xóa account manager vừa tìm vào trả về response
     *  - Trả về dữ liệu json
     */
    public function deleteAccountManager(DeleteAccountManagerRequest $request, $id)
    {
        $result = Apiato::call('AccountManager@DeleteAccountManagerAction', [$id]);
        // trả về dữ liệu response
        return response()->json([
            'success'       => true,
            'STATUS'        => "OK",
            'status_code'   => 200,
            'message'       => 'Đã xóa thành công',
        ], 200);
    }
}
