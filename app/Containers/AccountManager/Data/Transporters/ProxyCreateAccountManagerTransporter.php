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
        ],

        // những dữ liệu bắt buộc phải có
        'required'   => [
        ],
        // gán giá trị mặc định nếu có của schema dữ liệu
        'default'    => [

        ]
    ];
}
