<?php

namespace App\Containers\AccountManager\Tasks;

use App\Containers\AccountManager\Data\Repositories\AccountManagerRepository;
use App\Ship\Exceptions\NotFoundException;
use App\Ship\Parents\Tasks\Task;
use Exception;

class FindAccountManagerByIdTask extends Task
{

    protected $repository;

    public function __construct(AccountManagerRepository $repository)
    {
        $this->repository = $repository;
    }

    public function run($id)
    {
        try {
            $accountManager = $this->repository->find($id);
        }
        catch (Exception $exception) {
            throw new NotFoundException();
        }

        return $accountManager;
    }
}
