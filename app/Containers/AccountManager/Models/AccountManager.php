<?php

namespace App\Containers\AccountManager\Models;

use App\Ship\Parents\Models\Model;

class AccountManager extends Model
{
     /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table ='tbl_domain_config';
    
    /**
     * SET cấu hình: sử dụng timestamp auto khi thao tác dữ liệu
     * @var boolean
     */
    public $timestamps = false;

    /**
     * Khai báo column trong bảng dữ liệu.
     *
     * @var array
     */
    protected $fillable = [
        // int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
        'id',
        //  enum('SMARTPOST', 'PMVE', 'TRANSPORT', 'FLEETMANAGEMENT') COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Quản lý loại sản phẩm nào : Phần mềm vé , SmartPost',
        'app_brand',
        //  varchar(255) COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Mã ứng dụng',
        'app_code',
        //  varchar(255) COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Tên ứng dụng',
        'app_name',
        //  varchar(255) COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Tên domain',
        'domain_name',
        //  varchar(255) COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Tên site ứng dụng trong app  ',
        'site_name',
        //  varchar(255) COLLATE utf8_general_ci NOT NULL DEFAULT '/' COMMENT 'Tên base url',
        'base_url',
        //  varchar(255) COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Thông tin cty/ đơn vị sử dụng',
        'company_name',
        //  datetime COLLATE utf8_general_ci NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày bắt đầu sử dụng',
        'start_date',
    ];

    protected $attributes = [

    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [

    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [

    ];

    /**
     * The dates attributes.
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    /**
     * A resource key to be used by the the JSON API Serializer responses.
     */
    protected $resourceKey = 'accountmanagers';
}
