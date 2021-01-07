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
    public function transform(AccountManager $entity)
    {
        $response = [
            'object' => 'AccountManager',
            'id' => $entity->getHashedKey(),
            'created_at' => $entity->created_at,
            'updated_at' => $entity->updated_at,

        ];

        $response = $this->ifAdmin([
            'real_id'    => $entity->id,
            // 'deleted_at' => $entity->deleted_at,
        ], $response);

        return $response;
    }
}
