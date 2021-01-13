<?php
/**
 * @todo task xử lý nghiệp vụ xóa AccountManager từ CSDL.
 * @author Cường
 * @input Id $id dùng để tìm AccountManager theo khóa chính id
 * @output Boolean kết quả xóa dữ liệu (true/false)
 * @algorithm
 * _ Task được gọi bởi Action (có thể được gọi bởi nhiều action khác nhau)
 * _ DeleteAccountManagerTask giao tiếp với AccountManagerRepository để xử lý nghiệp vụ xóa AccountManager tìm được bằng $id
 * @throws DeleteResourceFailedException
 */
namespace App\Containers\AccountManager\Tasks;

use App\Containers\AccountManager\Data\Repositories\AccountManagerRepository;
use App\Ship\Exceptions\DeleteResourceFailedException;
use App\Ship\Parents\Tasks\Task;
use Exception;

class DeleteAccountManagerTask extends Task
{
    /**
     * @var  \App\Containers\AccountManager\Data\Repositories\AccountManagerRepository
     */
    protected $repository;

    /**
     * DeleteAccountManagerTask constructor.
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
            return $this->repository->delete($id);
        }
        catch (Exception $exception) {
            throw new DeleteResourceFailedException();
        }
    }
}
