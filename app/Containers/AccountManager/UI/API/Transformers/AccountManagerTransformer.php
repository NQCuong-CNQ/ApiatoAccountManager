<?php

namespace App\Containers\AccountManager\UI\API\Transformers;

use App\Containers\AccountManager\Models\AccountManager;
use App\Ship\Parents\Transformers\Transformer;

class AccountManagerTransformer extends Transformer
{
    /**
     * @var  array
     */
    protected $defaultIncludes = [

    ];

    /**
     * @var  array
     */
    protected $availableIncludes = [

    ];

    /**
     * @param AccountManager $entity
     *
     * @return array
     */
    public function transform(AccountManager $accountManager)
    {
        $response = [
            'object'                => 'AccountManager',
            'id'                    => $accountManager->id,
            'app_name'              => $accountManager->app_name,
            'app_brand'             => $accountManager->app_brand,
            'app_code'              => $accountManager->app_code,
            'domain_name'           => $accountManager->domain_name,
            'site_name'             => $accountManager->site_name,
            'base_url'              => $accountManager->base_url,
            'company_name'          => $accountManager->company_name,
            'start_date'            => $accountManager->start_date,

            // // các link quản lý
            // 'links'     =>  [
            //     // create
            //     'create'                =>  route('web_accountmanager_create'),
            //     // find
            //     'find'                 =>  route('web_accountmanager_show', $accountManager->id),
            //     // danh sach
            //     'get_index'            =>  route('web_accountmanager_index'),
            //     // edit
            //     'edit'                  =>  route('web_accountmanager_edit', $accountManager->id),
            //     // update
            //     'api_update'                =>  route('api_accountmanager_update_account_manager', $accountManager->id),
            //     // delete
            //     'api_delete'                =>  route('api_accountmanager_delete_account_manager', $accountManager->id),
            //     // tim kiem
            //     'api_find'         =>  route('api_accountmanager_find_account_manager_by_id', $accountManager->id),
            //     // them oi
            //     'api_create'        =>  route('api_accountmanager_create_account_manager'),  
            //     // danh sach
            //     'api_get_all'        =>  route('api_accountmanager_update_account_manager'),  
            // ],
        ];
        
        return $response;
    }
}
