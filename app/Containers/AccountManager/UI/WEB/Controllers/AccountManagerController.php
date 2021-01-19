<?php
/**
 * @todo: controller xử lý các nghiệp vụ liên quan đến account manager, 
 * - Lay danh sach account manager (getAllAccountManagers())
 * - Xem chi tiết account manager (findAccountManagerById())
 * - form cập nhật account manager (editAccountManager())
 * - form thêm mới account manager (createAccountManager())
 */
namespace App\Containers\AccountManager\UI\WEB\Controllers;

use App\Containers\AccountManager\UI\WEB\Requests\CreateAccountManagerRequest;
use App\Containers\AccountManager\UI\WEB\Requests\GetAllAccountManagersRequest;
use App\Containers\AccountManager\UI\WEB\Requests\FindAccountManagerByIdRequest;
use App\Containers\AccountManager\UI\WEB\Requests\EditAccountManagerRequest;
use App\Ship\Parents\Controllers\WebController;
use Apiato\Core\Foundation\Facades\Apiato;
use Layout\Content;

/**
 * Class AccountManagerController
 *
 * @package App\Containers\AccountManager\UI\WEB\Controllers
 */
class AccountManagerController extends WebController
{
    /**
     * @todo Màn hình danh sách account manager
     * - lấy danh sách tất cả account manager
     * @author Cuờng
     * @param GetAllAccountManagersRequest $request
     * @since 16-01-2021
     * @return view
     */
    public function getAllAccountManagers(Content $content, GetAllAccountManagersRequest $request)
    {
        return $content->view('accountmanager::account-manager.account-manager');
    }

    /**
     * @todo Màn hình form chi tiết account manager
     * - lấy thông tin chi tiết account manager bằng id đưa vào form chi tiết
     * @author Cuờng
     * @param FindAccountManagerByIdRequest $request
     * @param id $id của account manager cần chi tiết
     * @since 16-01-2021
     * @return view
     * @algorithm 
     *  - Gọi đến action FindAccountManagerByIdAction --> task FindAccountManagerByIdTask
     *  - Giao tiếp với CSLD tbl_domain_config bằng AccountManagerRepository để lấy chi tiết account manager bằng $id 
     */
    public function findAccountManagerById(Content $content, FindAccountManagerByIdRequest $request, $id)
    {
        $accountManager = Apiato::call('AccountManager@FindAccountManagerByIdAction', [$id]);

        return $content->view('accountmanager::account-manager.detail-account-manager', 
            [
                'accountManager' => $accountManager
            ]);
    }

    /**
     * @todo Màn hình form thêm mới account manager
     * - Trả về màn hình thêm mới account manager
     * @author Cuờng
     * @param CreateAccountManagerRequest $request
     * @since 16-01-2021
     * @return view
     * @algorithm 
     * _ phần này không có xử lý nghiệp vụ nên không gọi Action và Task
     * _ Chỉ trả về view form cho người dùng thêm mới account manager
     */
    public function createAccountManager(Content $content, CreateAccountManagerRequest $request)
    {
        return $content->view('accountmanager::account-manager.addnew-account-manager');
    }

    /**
     * @todo Màn hình form cập nhật account manager
     * - lấy thông tin chi tiết account manager bằng id đưa vào form cập nhật
     * @author Cuờng
     * @param EditAccountManagerRequest $request
     * @param id $id của account manager cần cập nhật
     * @since 16-01-2021
     * @return view
     * @algorithm 
     *  - Gọi đến action FindAccountManagerByIdAction --> task FindAccountManagerByIdTask
     *  - Giao tiếp với CSLD tbl_domain_config bằng AccountManagerRepository để lấy chi tiết account manager bằng $id
     */
    public function editAccountManager(Content $content, EditAccountManagerRequest $request, $id)
    {
        $accountManager = Apiato::call('AccountManager@FindAccountManagerByIdAction', [$id]);

        return $content->view('accountmanager::account-manager.edit-account-manager', [
            'accountManager' => $accountManager
        ]);
    }

}
