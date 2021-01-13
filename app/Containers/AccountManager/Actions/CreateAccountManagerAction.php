<?php
/**
 * @todo action tạo accountmanager từ CSDL.
 * @author Cường
 * @input DataTransporter $data
 * - company_name : Tên công ty
 * - app_name : Tên ứng dụng
 * - app_brand : Loại ứng dụng
 * - app_code : Mã ứng dụng ENUM('SMARTPOST', 'PMVE', 'TRANSPORT', 'FLEETMANAGEMENT')
 * - domain_name : Tên domain
 * - site_name : Tên site
 * - base_url : Địa chỉ url
 * @output: entity accountmanager vừa tạo
 * @return App\Containers\AccountManager\Models\AccountManager cấu thành địa chỉ vừa tạo
 * @algorithm
 * _ Action được gọi bởi controller
 * _ CreateAccountManagerAction gọi đến task CreateAccountManagerTask để xử lý nghiệp vụ thêm mới AccountManager
 */
namespace App\Containers\AccountManager\Actions;

use App\Ship\Parents\Actions\Action;
use App\Ship\Parents\Requests\Request;
use Apiato\Core\Foundation\Facades\Apiato;
use App\Ship\Transporters\DataTransporter;

class CreateAccountManagerAction extends Action
{
    public function run(DataTransporter $data)
    {
        $accountmanager = Apiato::call('AccountManager@CreateAccountManagerTask', [$data]);

        return $accountmanager;
    }
}
