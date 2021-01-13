/**
 * Public ArchitectUI Pro ra public folder
 * npm run dev <--chạy devs
 * npm run production <--public production trên mạng
 */
var mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

const publicFolder = '../../../public';
// Manifest với Resources chính
mix.setPublicPath(publicFolder)
    .mergeManifest()
    // .sass(__dirname + '/Resources/Assets/sass/vendor/all-components.scss', 'vendor/architectui-pro/all-components.css')
    // COMPONENTS
    // button
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/buttons.scss', 'vendor/architectui-pro/components/buttons/buttons.css')
    // datetime-picker
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/datetime-picker.scss', 'vendor/architectui-pro/components/datetime-picker/datetime-picker.css')
    .js(__dirname + '/Resources/Assets/js/vendor/components/datetime-picker.js', 'vendor/architectui-pro/components/datetime-picker/datetime-picker.js')
    // drawer
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/drawer.scss', 'vendor/architectui-pro/components/drawer/drawer.css')
    // dropdown-select-multiselect
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/dropdown-select-multiselect.scss', 'vendor/architectui-pro/components/dropdown-select-multiselect/dropdown-select-multiselect.css')
    .js(__dirname + '/Resources/Assets/js/vendor/components/dropdown-select-multiselect.js', 'vendor/architectui-pro/components/dropdown-select-multiselect/dropdown-select-multiselect.js')
    // forms
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/forms.scss', 'vendor/architectui-pro/components/forms/forms.css')
    .js(__dirname + '/Resources/Assets/js/vendor/components/forms.js', 'vendor/architectui-pro/components/forms/forms.js')
    // icons
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/icons.scss', 'vendor/architectui-pro/components/icons/icons.css')
    // images-image-crop
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/images-image-crop.scss', 'vendor/architectui-pro/components/images-image-crop/images-image-crop.css')
    // loaders-progress-spinners
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/loaders-progress-spinners.scss', 'vendor/architectui-pro/components/loaders-progress-spinners/loaders-progress-spinners.css')
    .js(__dirname + '/Resources/Assets/js/vendor/components/loaders-progress-spinners.js', 'vendor/architectui-pro/components/loaders-progress-spinners/loaders-progress-spinners.js')
    // maps
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/maps.scss', 'vendor/architectui-pro/components/maps/maps.css')
    .js(__dirname + '/Resources/Assets/js/vendor/components/maps.js', 'vendor/architectui-pro/components/maps/maps.js')
    .js(__dirname + '/Resources/Assets/js/vendor/components/initMap.js', 'vendor/architectui-pro/components/maps/initMap.js')
    // geocomplete
    .js(__dirname + '/Resources/Assets/js/vendor/components/geocomplete.js', 'vendor/architectui-pro/components/geocomplete/geocomplete.js')
    // selection
    .js(__dirname + '/Resources/Assets/js/vendor/components/selection.js', 'vendor/architectui-pro/components/selection/selection.js')
    // modals
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/modals.scss', 'vendor/architectui-pro/components/modals/modals.css')
    // navbar
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/navbar.scss', 'vendor/architectui-pro/components/navbar/navbar.css')
    .js(__dirname + '/Resources/Assets/js/vendor/components/navbar.js', 'vendor/architectui-pro/components/navbar/navbar.js')
    // notification-alert-toast
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/notification-alert-toast.scss', 'vendor/architectui-pro/components/notification-alert-toast/notification-alert-toast.css')
    .js(__dirname + '/Resources/Assets/js/vendor/components/notification-alert-toast.js', 'vendor/architectui-pro/components/notification-alert-toast/notification-alert-toast.js')
    // pagination
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/pagination.scss', 'vendor/architectui-pro/components/pagination/pagination.css')
    // popover-tooltip
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/popover-tooltip.scss', 'vendor/architectui-pro/components/popover-tooltip/popover-tooltip.css')
    // scrollable
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/scrollable.scss', 'vendor/architectui-pro/components/scrollable/scrollable.css')
    .js(__dirname + '/Resources/Assets/js/vendor/components/scrollable.js', 'vendor/architectui-pro/components/scrollable/scrollable.js')
    // sidebar
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/sidebar.scss', 'vendor/architectui-pro/components/sidebar/sidebar.css')
    .js(__dirname + '/Resources/Assets/js/vendor/components/sidebar.js', 'vendor/architectui-pro/components/sidebar/sidebar.js')
    // slider-carousel-rangeslider
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/slider-carousel-rangeslider.scss', 'vendor/architectui-pro/components/slider-carousel-rangeslider/slider-carousel-rangeslider.css')
    // tables
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/tables.scss', 'vendor/architectui-pro/components/tables/tables.css')
    .js(__dirname + '/Resources/Assets/js/vendor/components/tables.js', 'vendor/architectui-pro/components/tables/tables.js')
    // js render
    .js(__dirname + '/Resources/Assets/js/vendor/components/jsrender.js', 'vendor/architectui-pro/components/jsrender/jsrender.js')
    // jquery-ui
    .js(__dirname + '/Resources/Assets/js/vendor/components/jquery-ui.js', 'vendor/architectui-pro/components/jquery-ui/jquery-ui.js')
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/jquery-ui.scss', 'vendor/architectui-pro/components/jquery-ui/jquery-ui.css')
    // timeline
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/timeline.scss', 'vendor/architectui-pro/components/timeline/timeline.css')
    // tree-view
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/tree-view.scss', 'vendor/architectui-pro/components/tree-view/tree-view.css')
    // socket.io-client
    .js(__dirname + '/Resources/Assets/js/vendor/components/socket.io-client.js', 'vendor/architectui-pro/components/socket.io-client/socket.io-client.js')
    // async
    .js(__dirname + '/Resources/Assets/js/vendor/components/async.js', 'vendor/architectui-pro/components/async/async.js')
    // numeral
    .js(__dirname + '/Resources/Assets/js/vendor/components/numeral.js', 'vendor/architectui-pro/components/numeral/numeral.js')
    // jquery-hook
    .js(__dirname + '/Resources/Assets/js/vendor/components/jquery-hook.js', 'vendor/architectui-pro/components/jquery-hook/jquery-hook.js')
    // wysiwyg
    .sass(__dirname + '/Resources/Assets/sass/vendor/components/wysiwyg.scss', 'vendor/architectui-pro/components/wysiwyg/wysiwyg.css')
    .js(__dirname + '/Resources/Assets/js/vendor/components/wysiwyg.js', 'vendor/architectui-pro/components/wysiwyg/wysiwyg.js')
    .js(__dirname + '/Resources/Assets/js/vendor/components/config-ckeditor.js', 'vendor/architectui-pro/components/wysiwyg/config-ckeditor.js')
    .copy('node_modules/ckeditor4/config.js', publicFolder + '/vendor/architectui-pro/components/wysiwyg/ckeditor4/config.js')
    .copy('node_modules/ckeditor4/styles.js', publicFolder + '/vendor/architectui-pro/components/wysiwyg/ckeditor4/styles.js')
    .copy('node_modules/ckeditor4/ckeditor.js', publicFolder + '/vendor/architectui-pro/components/wysiwyg/ckeditor4/ckeditor.js')
    .copy('node_modules/ckeditor4/contents.css', publicFolder + '/vendor/architectui-pro/components/wysiwyg/ckeditor4/contents.css')
    .copyDirectory('node_modules/ckeditor4/plugins', publicFolder + '/vendor/architectui-pro/components/wysiwyg/ckeditor4/plugins')
    .copyDirectory('node_modules/ckeditor4/lang', publicFolder + '/vendor/architectui-pro/components/wysiwyg/ckeditor4/lang')
    .copyDirectory('node_modules/ckeditor4/adapters', publicFolder + '/vendor/architectui-pro/components/wysiwyg/ckeditor4/adapters')
    .copyDirectory('node_modules/ckeditor4/skins', publicFolder + '/vendor/architectui-pro/components/wysiwyg/ckeditor4/skins')
    .copyDirectory('node_modules/ckeditor4/vendor', publicFolder + '/vendor/architectui-pro/components/wysiwyg/ckeditor4/vendor')

    // jsvalidation
    .copy(__dirname + "../../../../vendor/proengsoft/laravel-jsvalidation/public/js/jsvalidation.min.js", publicFolder + '/vendor/jsvalidation/laravel-jsvalidation.js')

    // VENDOR
    // bootstrap 4
    .sass(__dirname + '/Resources/Assets/sass/vendor/bootstrap.scss', 'vendor/architectui-pro/bootstrap.css')
    // layout
    .sass(__dirname + '/Resources/Assets/sass/vendor/layout.scss', 'vendor/architectui-pro/layout.css')
    // CORE
    .sass(__dirname + '/Resources/Assets/sass/app.scss', 'css/app.css')
    .js(__dirname + '/Resources/Assets/js/app.js', 'js/app.js')
    .sass(__dirname + '/Resources/Assets/sass/custom.scss', 'css/custom.css')
    .extract([
        "jquery"
    ])
;

// nếu là chính thức thì đánh version
if (mix.inProduction()) {
    mix.version();
} else {

    mix.webpackConfig({
        devtool: 'inline-source-map'
    })
}

mix.disableNotifications();