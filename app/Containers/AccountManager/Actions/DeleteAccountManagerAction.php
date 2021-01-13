<?php
/**
 * @todo action xóa AccountManager từ CSDL (xóa mềm).
 * @author Cường
 * @input id $id AccountManager cần xóa
 * @output: thông báo kết quả xử lý nghiệp vụ (boolen true/false)
 * @return Boolean thông báo kết quả xử lý nghiệp vụ (true/false)
 * @algorithm
 * _ Action được gọi bởi controller
 * _ DeleteAccountManagerAction gọi đến task DeleteAccountManagerTask để xử lý nghiệp vụ xóa AccountManager
 */
namespace App\Containers\AccountManager\Actions;

use App\Ship\Parents\Actions\Action;
use App\Ship\Parents\Requests\Request;
use Apiato\Core\Foundation\Facades\Apiato;

class DeleteAccountManagerAction extends Action
{
    public function run($id)
    {
        $result = Apiato::call('AccountManager@DeleteAccountManagerTask', [$id]);
        
        return $result;
    }
}
