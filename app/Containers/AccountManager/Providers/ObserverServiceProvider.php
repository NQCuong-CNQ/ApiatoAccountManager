<?php

namespace App\Containers\AccountManager\Providers;

use App\Ship\Parents\Providers\MainProvider;
use App\Containers\AccountManager\Observers\AccountManagerObserver;
use App\Containers\AccountManager\Models\AccountManager;

/** 
 * @todo Provider đăng ký các Observers
 * @Usage(use case): 
 *  - sử dụng để đăng ký các sự kiện thêm xoá sửa của các model
 * @Input:
 * @Output:
 * @Flow: (luồng xử lý,thuật toán)
 * @author Dũng
 * @since 20-05-2020
*/
class ObserverServiceProvider extends MainProvider
{
    /**
     * Container Service Providers.
     *
     * @var array
     */
    public $serviceProviders = [
    ];

    /**
     * Observers.
     *
     * @var array
     */
    public $observers = [
        //AccountManager
        AccountManager::class => [
            AccountManagerObserver::class
        ],
    ];
    /**
     * Register anything in the container.
     */
    public function register()
    {
        parent::register();

        $this->registerObservers();
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * @todo: Hàm đăng ký Observer cho model
     * @input: 
     *  - observers[ class model ] => array observer class
     * @output: 
     * @author: Croco
     * @since: 09-05-2020
    */
    protected function registerObservers() {

        $models = $this->observers ?: [];
        foreach ($models as $model => $observers) {
            
            foreach ($observers as $observer) {

                $model::observe($observer);
            }
        }
    }
}
