<?php
/**
 * @todo task xử lý nghiệp vụ lấy chi tiết AccountManager từ CSDL.
 * @author Cường
 * @input ID $id dùng để tìm AccountManager theo khóa chính id
 * @output entity AccountManager tìm được bằng $id
 * @algorithm
 * _ Task được gọi bởi Action (có thể được gọi bởi nhiều action khác nhau)
 * _ FindAccountManagerByIdTask giao tiếp với AccountManagerRepository để xử lý nghiệp vụ lấy chi tiết AccountManager bằng $id
 * @throws NotFoundException
 */
namespace App\Containers\AccountManager\Tasks;

use App\Containers\AccountManager\Data\Repositories\AccountManagerRepository;
use App\Ship\Exceptions\NotFoundException;
use App\Ship\Parents\Tasks\Task;
use Exception;

class FindAccountManagerByIdTask extends Task
{
    /**
     * @var  \App\Containers\AccountManager\Data\Repositories\AccountManagerRepository
     */
    protected $repository;

    /**
     * FindAccountManagerByIdTask constructor.
     * inject AccountManager repo vào để hàm run có thể sử dụng
     * @param \App\Containers\AccountManager\Data\Repositories\AccountManagerRepository $repository
     */  
    public function __construct(AccountManagerRepository $repository)
    {
        $this->repository = $repository;
    }

    public function run($id)
    {
        try {
            $accountManager = $this->repository->find($id);
        }
        catch (Exception $exception) {
            throw new NotFoundException();
        }

        return $accountManager;
    }
}
