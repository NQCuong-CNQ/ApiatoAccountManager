var mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

var publicFolder = '../../../public';

// Manifest với Resources chính
mix.setPublicPath(publicFolder).mergeManifest();

// trang danh sách vị trí
mix.js(__dirname + '/UI/WEB/Assets/js/includes/BaseApi.js', 'js/account-manager/includes/BaseApi.js');
mix.js(__dirname + '/UI/WEB/Assets/js/account-manager/account-manager-api.js', 'js/account-manager/account-manager/account-manager-api.js');
mix.js(__dirname + '/UI/WEB/Assets/js/account-manager/route-account-manager.js', 'js/account-manager/account-manager/route-account-manager.js');

if (mix.inProduction()) {
    mix.version();
} else {

    mix.webpackConfig({
        devtool: 'inline-source-map'
    })
}

mix.disableNotifications();