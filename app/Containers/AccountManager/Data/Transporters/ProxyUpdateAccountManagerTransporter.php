<?php

namespace App\Containers\AccountManager\Data\Transporters;

use App\Ship\Transporters\DataTransporter;

/** 
 * @todo Transporter định nghĩa dữ liệu để có thể cập nhật 1 Account Manager
 * @Usage(use case): 
 *  - tất cả thông tin field AccountManager mà action, task cập nhật AccountManager cần
 * @Input:
 * @Output:
 * @Flow: (luồng xử lý,thuật toán)
 * @author Cuong
 * @since 13-01-2021
*/

class ProxyUpdateAccountManagerTransporter extends DataTransporter
{

    /**
     * @var array
     */
    protected $schema = [
        'type' => 'object',
        'properties' => [
            // Tên công ty
            "company_name",
            //Tên ứng dụng
            "app_name",
            //Loại ứng dụng
            "app_brand",
            //Mã ứng dụng ENUM('SMARTPOST', 'PMVE', 'TRANSPORT', 'FLEETMANAGEMENT')
            "app_code",
            //Tên domain 
            "domain_name",
            //Tên site
            "site_name",
            //Địa chỉ url
            "base_url",
            //Ngày sử dụng
            "start_date",
        ],

        // những dữ liệu bắt buộc phải có
        'required'   => [
            // Tên công ty
            "company_name",
            //Tên ứng dụng
            "app_name",
            //Loại ứng dụng
            "app_brand",
            //Mã ứng dụng ENUM('SMARTPOST', 'PMVE', 'TRANSPORT', 'FLEETMANAGEMENT')
            "app_code",
        ],
        // gán giá trị mặc định nếu có của schema dữ liệu
        'default'    => [
            // provide default values for specific properties here
        ]
    ];
}
 