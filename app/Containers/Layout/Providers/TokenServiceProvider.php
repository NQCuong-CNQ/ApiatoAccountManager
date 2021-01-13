<?php

namespace App\Containers\Layout\Providers;

use App\Ship\Parents\Providers\MainProvider;

use Illuminate\Support\Facades\Request;
use Laracasts\Utilities\JavaScript\JavaScriptFacade;
use Illuminate\Contracts\Encryption\Encrypter;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Cookie\CookieValuePrefix;


/**
 * @todo: provider lấy token đăng nhập put vào js
 * - khi web login thành công sẽ lưu lại cookie
 *      - accessToken: token đăng nhập
 *      - refreshToken: token tạo lại token đăng nhập
 *     để đăng nhập luôn cho API
 * - lấy accessToken đẩy ra js để gắn vào header authentication cho tất cả request
 * @author: Croco
 * @since: 15-06-2020
*/
class TokenServiceProvider extends MainProvider {

    /**
     * Container Service Providers.
     *
     * @var array
     */
    public $serviceProviders = [
    ];

    /**
     * Container Aliases
     *
     * @var  array
     */
    public $aliases = [
    ];

    /**
     * Register anything in the container.
     */
    public function register()
    {
        parent::register();
    }
    public function boot() {
        parent::boot();

        $this->putTokenToJavascript();
    }

    /**
     * @todo: Hàm lấy token đăng nhập từ cookie đẩy ra js để đăng nhập cho ajax gọi API
     * @purpose: 
     * - khi web login thành công sẽ lưu lại cookie
     * - khi vào các trang khác sẽ lấy token từ các cookie này ra để đăng nhập cho các ajax gọi API
     *  vendor\laravel\framework\src\Illuminate\Cookie\Middleware\EncryptCookies.php
     * @author: Croco
     * @since: 15-06-2020
    */
    protected function putTokenToJavascript() {

        $cookies = Request::cookie() ?: [];
        $encrypter = $this->app->make(Encrypter::class);

        $refreshToken = $cookies["refreshToken"];
        $accessToken = $cookies["accessToken"];
        if($refreshToken) {

            try {
                $refreshToken = $encrypter->decrypt($refreshToken, false);
            } catch (DecryptException $e) {
                $refreshToken = null;
            }

            if($refreshToken) {

                $hasValidPrefix = strpos($refreshToken, CookieValuePrefix::create("refreshToken", $encrypter->getKey())) === 0;
                if($hasValidPrefix) {

                    $refreshToken = CookieValuePrefix::remove($refreshToken);
                }
            }
        }

        if($accessToken) {

            try {
                $accessToken = $encrypter->decrypt($accessToken, false);
            } catch (DecryptException $e) {
                $accessToken = null;
            }

            if($accessToken) {

                $hasValidPrefix = strpos($accessToken, CookieValuePrefix::create("accessToken", $encrypter->getKey())) === 0;
                if($hasValidPrefix) {

                    $accessToken = CookieValuePrefix::remove($accessToken);
                }
            }
        }

        JavaScriptFacade::put([
            "refreshToken" => $refreshToken,
            "accessToken"  => $accessToken,
        ]);
    }
}