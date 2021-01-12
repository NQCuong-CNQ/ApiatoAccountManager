<?php

namespace App\Containers\AccountManager\Tasks;

use App\Containers\AccountManager\Data\Repositories\AccountManagerRepository;
use App\Ship\Exceptions\CreateResourceFailedException;
use App\Ship\Parents\Tasks\Task;
use Exception;
use App\Ship\Transporters\DataTransporter;

class CreateAccountManagerTask extends Task
{

    protected $repository;

    public function __construct(AccountManagerRepository $repository)
    {
        $this->repository = $repository;
    }

    public function run(DataTransporter $data)
    {
        try {

            $accountManager = $this->repository->create([
                'company_name'      => $data->company_name,

                'app_name'          => $data->app_name,

                'app_brand'         => $data->app_brand,

                'app_code'          => $data->app_code,

                'domain_name'       => $data->domain_name,

                'site_name'         => $data->site_name,
  
                'base_url'          => $data->base_url,
            ]);

        } catch (Throwable $e) {

            throw new CreateResourceFailedException($e->getMessage());
        }
        return $accountManager;
    }
}
