<?php
/**
 * @todo Task cập nhật 1 AccountManager
 * @purpose
 *  - mục đích: cập nhật lại dữ liệu như Tên công ty, Tên ứng dụng,...
 * @author Cường
 * @param DataTransporter
 * - company_name : Tên công ty
 * - app_name : Tên ứng dụng
 * - app_brand : Loại ứng dụng ENUM('PMVE','WEBSITE_PMVE','PMHANG','TRACKING_PMHANG','NHAN_SU','MANUAL')
 * - app_code : Mã ứng dụng
 * - domain_name : Tên domain
 * - site_name : Tên site
 * - base_url : Địa chỉ url
 * @param id: mã id AccountManager cần cập nhật
 * @return AccountManager vừa cập nhật
 * @throws UpdateResourceFailedException
 */
namespace App\Containers\AccountManager\Tasks;

use App\Containers\AccountManager\Data\Repositories\AccountManagerRepository;
use App\Ship\Exceptions\UpdateResourceFailedException;
use App\Ship\Parents\Tasks\Task;
use Exception;
use App\Ship\Transporters\DataTransporter;

class UpdateAccountManagerTask extends Task
{
    /**
     * @var \App\Containers\AccountManager\Data\Repositories\AccountManagerRepository
     */
    protected $repository;

    /**
     * UpdateAccountManagerTask constructor.
     * inject AccountManager repo vào để hàm run có thể sử dụng
     * @param \App\Containers\AccountManager\Data\Repositories\AccountManagerRepository $repository
     */
    public function __construct(AccountManagerRepository $repository)
    {
        $this->repository = $repository;
    }

    public function run($id, DataTransporter $data)
    {
        try {
            $accountManager = $this->repository->update([
                 // company_name : Tên công ty
                'company_name'      => $data->company_name,
                // app_name : Tên ứng dụng
                'app_name'          => $data->app_name,
                // app_brand : Loại ứng dụng ENUM('PMVE','WEBSITE_PMVE','PMHANG','TRACKING_PMHANG','NHAN_SU','MANUAL')
                'app_brand'         => $data->app_brand,
                // app_code : Mã ứng dụng 
                'app_code'          => $data->app_code,
                // domain_name : Tên domain
                'domain_name'       => $data->domain_name,
                // site_name : Tên site
                'site_name'         => $data->site_name,
                // base_url : Địa chỉ url
                'base_url'          => $data->base_url,
            ], $id);
        }
        catch (Exception $exception) {
            throw new UpdateResourceFailedException();
        }
        return $accountManager;
    }
}
