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
    protected $skipPagination = false;

    /**
     * GetAllAccountManagersTask constructor.
     * inject AccountManager repo vào để hàm run có thể sử dụng
     * @param \App\Containers\AccountManager\Data\Repositories\AccountManagerRepository $repository
     */
    public function __construct(AccountManagerRepository $repository)
    {
        if($this->skipPagination) {

            return $this->repository->all();
        }

        $this->repository = $repository;
    }

    public function run()
    {
        return $this->repository->paginate();
    }

    /**
     * @todo: Hàm tìm policies theo param dạng
     * http://container.local/policies?search=Cá
     *      &filter=rate_policy_for:SUPPLIER;rate_policy_name:like:Chính sách 1|rate_policy_name:Chính sách 2 
     *      &orderBy=rate_policy_for:asc;rate_policy_name
     *      &sort=asc
     *      &select=rate_policy_name,rate_policy_id
     *      &include=rates
     * @purpose: 
     * - mục đích có thể query trên param các trường hợp đơn giản không cần tạo nhiều Criteria
     * @input: array
     * @author: cuong
     * @since: 18-01-2021
     * @param array
    */
    public function withParameters($params) 
    {
        // Chưa hiểu Criteria
    }

    /**
     * @todo: Hàm bỏ qua phân trang
     * @purpose: 
     * - mục đích để lấy hết dữ liệu, không giới hạn để xử lý dữ liệu khác
     * @author: cuong
     * @since: 18-01-2021
     * @param bool skipPagination
    */
    public function skipPagination(bool $skipPagination = true) {
        $this->skipPagination = $skipPagination;
    }

}
