<?php
/**
 * @todo task xử lý nghiệp vụ lấy danh sách tất cả các AccountManager từ CSDL.
 * @author Cương
 * @input Params $params
 * @output array entity AccountManager lấy được
 * @algorithm
 * _ Task được gọi bởi Action
 * _ GetAllAccountManagersTask giao tiếp với AccountManagerRepository để xử lý nghiệp vụ lấy danh sách tất cả địa chỉ
 */
namespace App\Containers\AccountManager\Tasks;

use App\Containers\AccountManager\Data\Repositories\AccountManagerRepository;
use App\Ship\Parents\Tasks\Task;

class GetAllAccountManagersTask extends Task
{
    /**
     * @var  \App\Containers\AccountManager\Data\Repositories\AccountManagerRepository
     */
    protected $repository;

    /**
     * GetAllAccountManagersTask constructor.
     * inject AccountManager repo vào để hàm run có thể sử dụng
     * @param \App\Containers\AccountManager\Data\Repositories\AccountManagerRepository $repository
     */
    public function __construct(AccountManagerRepository $repository)
    {
        $this->repository = $repository;
    }

    public function run()
    {
        return $this->repository->paginate();
    }
}
