<?php

namespace App\Containers\AccountManager\Data\Transporters;

use App\Ship\Transporters\DataTransporter;

/** 
 * @todo Transporter định nghĩa dữ liệu để có thể lấy danh sách AddressComponent
*/
class ProxyCreateAccountManagerTransporter extends DataTransporter
{

    /**
     * @var array
     */
    protected $schema = [
        'type' => 'object',
        'properties' => [
            "company_name",
            "app_name",
            "app_brand",
            "app_code",
            "domain_name",
            "site_name",
            "base_url",
            "start_date",
        ],

        // những dữ liệu bắt buộc phải có
        'required'   => [
        ],
        // gán giá trị mặc định nếu có của schema dữ liệu
        'default'    => [

        ]
    ];
}
