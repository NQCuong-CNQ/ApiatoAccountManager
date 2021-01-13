<?php

namespace App\Containers\Layout\Providers;

use App\Ship\Parents\Providers\MainProvider;
use Laracasts\Utilities\JavaScript\JavaScriptServiceProvider;
use Laracasts\Utilities\JavaScript\JavaScriptFacade;
use App\Containers\Layout\Support\JavascriptTransformer;
use Laracasts\Utilities\JavaScript\LaravelViewBinder;

/**
 * @todo: publish asset ra folder public
 * @author: Croco
 * @since: 16-05-2020
*/
class PublishAssetsServiceProvider extends MainProvider
{

    /**
     * Container Service Providers.
     *
     * @var array
     */
    public $serviceProviders = [
        JavaScriptServiceProvider::class
    ];

    /**
     * Container Aliases
     *
     * @var  array
     */
    public $aliases = [
        "JavaScript" => JavaScriptFacade::class
    ];

    /**
     * Register anything in the container.
     */
    public function register()
    {
        parent::register();

        // override lại Transformer của laracasts/utilities
        // để chỉ chống dublicate js khi gọi JavaScript:put nhiều lần
        // ý tưởng mỗi lần gọi hàm put thì chỉ merge lại thành mảng
        // khi nào layout render mới gọi đến laracasts/utilities để add script vào
        $this->app->singleton('JavaScript', function ($app) {
            return new JavascriptTransformer(
                new LaravelViewBinder(
                    $app['events'], 
                    config('javascript.bind_js_vars_to_this_view')
                ),
                config('javascript.js_namespace'),
                config('javascript.bind_js_vars_to_this_view')
            );
        });
    }
}
