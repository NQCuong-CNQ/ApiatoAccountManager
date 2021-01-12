<?php

namespace App\Containers\AccountManager\Tasks;

use App\Containers\AccountManager\Data\Repositories\AccountManagerRepository;
use App\Ship\Exceptions\UpdateResourceFailedException;
use App\Ship\Parents\Tasks\Task;
use Exception;
use App\Ship\Transporters\DataTransporter;

class UpdateAccountManagerTask extends Task
{

    protected $repository;

    public function __construct(AccountManagerRepository $repository)
    {
        $this->repository = $repository;
    }

    public function run($id, DataTransporter $data)
    {
        try {
            $accountManager = $this->repository->update([
                'company_name'      => $data->company_name,

                'app_name'          => $data->app_name,

                'app_brand'         => $data->app_brand,

                'app_code'          => $data->app_code,

                'domain_name'       => $data->domain_name,

                'site_name'         => $data->site_name,
  
                'base_url'          => $data->base_url,
            ], $id);
        }
        catch (Exception $exception) {
            throw new UpdateResourceFailedException();
        }
    }
}
