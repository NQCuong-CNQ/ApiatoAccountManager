require("./includes/text-transform");
require("./includes/serialize");
require("./includes/select");
require("./includes/date-time");
require("./includes/popover");
require("./includes/datatable");
require("./includes/message");
require("./includes/autocomplete");
require("./includes/loading");
require("./includes/color");
require("./includes/numeric");
require("./includes/checkbox");

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]').content;
// mã công ty
var appCode = document.head.querySelector('meta[name="company-app-code"]').content;
// header để nhận diện mã công ty
var appCodeHeaderName = document.head.querySelector('meta[name="app-code-header-name"]').content;

var phpData = window.PHP_DATA || {};
if(typeof phpData == "string") {
    try {
        phpData = JSON.parse(phpData);
        window.PHP_DATA = phpData;
    } catch (error) {}
}

if (token) {

    var headers = {
        'X-CSRF-TOKEN': token,
        [appCodeHeaderName]: appCode,
        "X-Requested-With": "XMLHttpRequest"
    };
    if (phpData.accessToken) {

        headers["Authorization"] = phpData.accessToken;
    }

    $.ajaxSetup({
        headers: headers
    });
}

