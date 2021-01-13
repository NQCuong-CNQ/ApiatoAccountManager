<?php

namespace App\Containers\AccountManager\Data\Repositories;

use App\Ship\Parents\Repositories\Repository;

/**
 * Class AccountManagerRepository
 * -> hỗ trợ lấy dữ liệu từ Model AccountManager
 * @author Cuong
 * @since 13-01-2021
 */
class AccountManagerRepository extends Repository
{

    /**
     * định nghĩa các field, và phương thức query khi sử dụng hàm search
     * cách sử dụng : thêm ?search=keyword vào url
     * @var array
     */
    protected $fieldSearchable = [
        'id' 					=> '=',
        'app_brand'            	=> 'like',
        'app_code'      		=> 'like',
        'app_name'       		=> 'like',
        'domain_name'        	=> 'like',
        'site_name' 			=> 'like',
        'base_url'        		=> 'like',
        'company_name'          => 'like',
        'start_date'           	=> 'like',
    ];

}
