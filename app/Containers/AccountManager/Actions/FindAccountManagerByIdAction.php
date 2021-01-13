<?php
/**
 * @todo action lấy thông tin chi tiết AccountManager từ CSDL.
 * @author Cường
 * @input id $id AccountManager cần lấy
 * @output: entity accountmanager
 * @return App\Containers\AccountManager\Models\AccountManager AccountManager cần lấy
 * @algorithm
 * _ Action được gọi bởi controller
 * _ FindAccountManagerByIdAction gọi đến task FindAccountManagerByIdTask để xử lý nghiệp vụ lấy chi tiết AccountManager
 */
namespace App\Containers\AccountManager\Actions;

use App\Ship\Parents\Actions\Action;
use App\Ship\Parents\Requests\Request;
use Apiato\Core\Foundation\Facades\Apiato;

class FindAccountManagerByIdAction extends Action
{
    public function run($id)
    {
        $accountmanager = Apiato::call('AccountManager@FindAccountManagerByIdTask', [$id]);

        return $accountmanager;
    }
}
