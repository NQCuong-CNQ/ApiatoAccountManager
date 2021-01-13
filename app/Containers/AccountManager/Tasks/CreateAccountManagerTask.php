<?php
/**
 * @todo Task cập nhật tạo mới AccountManager
 * @purpose
 *  - mục đích: thêm mới một AccountManager...
 * @author Cường
 * @param DataTransporter
 * - company_name : Tên công ty
 * - app_name : Tên ứng dụng
 * - app_brand : Loại ứng dụng
 * - app_code : Mã ứng dụng ENUM('SMARTPOST', 'PMVE', 'TRANSPORT', 'FLEETMANAGEMENT')
 * - domain_name : Tên domain
 * - site_name : Tên site
 * - base_url : Địa chỉ url
 * @return accountManager vừa mới được tạo
 * @throws CreateResourceFailedException
 */
namespace App\Containers\AccountManager\Tasks;

use App\Containers\AccountManager\Data\Repositories\AccountManagerRepository;
use App\Ship\Exceptions\CreateResourceFailedException;
use App\Ship\Parents\Tasks\Task;
use Exception;
use App\Ship\Transporters\DataTransporter;

class CreateAccountManagerTask extends Task
{
    /**
     * @var  \App\Containers\AccountManager\Data\Repositories\AccountManagerRepository
     */
    protected $repository;

    /**
     * CreateAccountManagerTask constructor.
     * inject AccountManager repo vào để hàm run có thể sử dụng
     * @param \App\Containers\AccountManager\Data\Repositories\AccountManagerRepository $repository
     */
    public function __construct(AccountManagerRepository $repository)
    {
        $this->repository = $repository;
    }

    public function run(DataTransporter $data)
    {
        try {
            // thêm mới accountManager bằng dữ liệu data
            $accountManager = $this->repository->create([
                 // company_name : Tên công ty
                'company_name'      => $data->company_name,
                // app_name : Tên ứng dụng
                'app_name'          => $data->app_name,
                // app_brand : Loại ứng dụng
                'app_brand'         => $data->app_brand,
                // app_code : Mã ứng dụng ENUM('SMARTPOST', 'PMVE', 'TRANSPORT', 'FLEETMANAGEMENT')
                'app_code'          => $data->app_code,
                // domain_name : Tên domain
                'domain_name'       => $data->domain_name,
                // site_name : Tên site
                'site_name'         => $data->site_name,
                // base_url : Địa chỉ url
                'base_url'          => $data->base_url,
            ]);

        } catch (Throwable $e) {

            throw new CreateResourceFailedException($e->getMessage());
        }
        return $accountManager;
    }
}
