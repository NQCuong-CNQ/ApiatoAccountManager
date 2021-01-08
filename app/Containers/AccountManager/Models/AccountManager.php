<?php

namespace App\Containers\AccountManager\Models;

use App\Ship\Parents\Models\Model;

class AccountManager extends Model
{
    protected $table ='tbl_domain_config';
    
    public $timestamps = false;

    protected $fillable = [

    ];

    protected $attributes = [

    ];

    protected $hidden = [

    ];

    protected $casts = [

    ];

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    /**
     * A resource key to be used by the the JSON API Serializer responses.
     */
    protected $resourceKey = 'accountmanagers';
}
