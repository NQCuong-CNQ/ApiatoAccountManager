<?php
/**
 * @todo action cập nhật AccountManager từ CSDL.
 * @author Cường
 * @input 
 * id : để tìm đúng dữ liệu cần cập nhật
 * DataTransporter $data
 * - company_name : Tên công ty
 * - app_name : Tên ứng dụng
 * - app_brand : Loại ứng dụng ENUM('PMVE','WEBSITE_PMVE','PMHANG','TRACKING_PMHANG','NHAN_SU','MANUAL')
 * - app_code : Mã ứng dụng
 * - domain_name : Tên domain
 * - site_name : Tên site
 * - base_url : Địa chỉ url
 * @output: entity AccountManager vừa cập nhật
 * @return App\Containers\AccountManager\Models\AccountManager AccountManager vừa cập nhật
 * @algorithm
 * _ Action được gọi bởi controller
 * _ UpdateAccountManagerAction gọi đến task UpdateAccountManagerTask để xử lý nghiệp vụ cập nhật AccountManager
 */
namespace App\Containers\AccountManager\Actions;

use App\Ship\Parents\Actions\Action;
use App\Ship\Parents\Requests\Request;
use Apiato\Core\Foundation\Facades\Apiato;
use App\Ship\Transporters\DataTransporter;

class UpdateAccountManagerAction extends Action
{
    public function run(DataTransporter $data, $id)
    {
        $accountmanager = Apiato::call('AccountManager@UpdateAccountManagerTask', [$id, $data]);

        return $accountmanager;
    }
}
