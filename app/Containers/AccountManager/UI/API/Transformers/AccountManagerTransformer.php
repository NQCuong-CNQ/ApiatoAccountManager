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

            // // các link quản lý
            // 'links'     =>  [
            //     // create
            //     'create'                =>  route('web_get_address_create_address_component'),
            //     // store
            //     'api_create'                 =>  route('api_post_address_store_address_component'),
            //     // chi tiết
            //     'detail'            =>  route('web_get_address_find_by_id_address_component', $accountManager->address_component_uuid),
            //     // edit
            //     'edit'                  =>  route('web_get_address_edit_address_component', $accountManager->address_component_uuid),
            //     // update
            //     'api_update'                =>  route('api_put_address_update_address_component', $accountManager->address_component_uuid),
            //     // delete
            //     'api_delete'                =>  route('api_delete_address_delete_address_component', $accountManager->address_component_uuid),
            //     // change status
            //     'api_change_status'         =>  route('api_put_address_change_status_address_component', $accountManager->address_component_uuid),
            //     // get detail
            //     'api_find_by_uuid'        =>  route('api_get_address_find_by_id_address_component', $accountManager->address_component_uuid),  
            // ],
        ];
        
        return $response;
    }
}
