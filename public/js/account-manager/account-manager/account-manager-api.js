/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./UI/WEB/Assets/js/account-manager/account-manager-api.js":
/*!*****************************************************************!*\
  !*** ./UI/WEB/Assets/js/account-manager/account-manager-api.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _includes_BaseApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../includes/BaseApi */ "./UI/WEB/Assets/js/includes/BaseApi.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


(function ($, phpData) {
  phpData = phpData || {};

  var AccountManagerApi = /*#__PURE__*/function (_BaseApi) {
    _inherits(AccountManagerApi, _BaseApi);

    var _super = _createSuper(AccountManagerApi);

    function AccountManagerApi(APIs) {
      _classCallCheck(this, AccountManagerApi);

      return _super.call(this, APIs);
    }

    _createClass(AccountManagerApi, [{
      key: "initDataTable",
      value: function initDataTable() {
        var data = window.PHP_DATA;
        var table = $("#datatable-list-all").DataTable({
          "scrollX": true,
          "responsive": false,
          "Processing": true,
          "ServerSide": true,
          "sAjaxSource": data['API_GET_ALL_ACCOUNT_MANAGERS'],
          "columns": [{
            data: 'id'
          }, {
            data: 'company_name'
          }, {
            data: 'domain_name'
          }, {
            data: 'app_name'
          }, {
            data: 'start_date'
          }],
          "paging": true
        });
        $('#datatable-list-all tbody').on('click', 'tr', function () {
          if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
          } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
          }

          var id = table.row(this).data()['id'];
          var baseApi = new _includes_BaseApi__WEBPACK_IMPORTED_MODULE_0__["default"](phpData);
          var api = baseApi.getAPI("API_GET_ACCOUNT_MANAGERS_BY_ID", {
            __ACCOUNT_MANAGER_ID__: id
          });
        });
      }
    }]);

    return AccountManagerApi;
  }(_includes_BaseApi__WEBPACK_IMPORTED_MODULE_0__["default"]); // document ready


  $(function () {
    // khởi tạo class
    var accountManagerApi = new AccountManagerApi(phpData); // khởi chạy hàm init

    accountManagerApi.initDataTable();
  });
}).bind(window)(jQuery, window.PHP_DATA);

/***/ }),

/***/ "./UI/WEB/Assets/js/includes/BaseApi.js":
/*!**********************************************!*\
  !*** ./UI/WEB/Assets/js/includes/BaseApi.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @todo: Class quản lý các api của 1 form
 * @purpose:
 * - mục đích:
 *     - tạo 1 base class cho các form thêm, cập nhật
 *          để các hàm hay sử dụng để lên class chung
 * @author: Croco
 * @since: 01-08-2020
 * @param jQuery element
 * @param Object apis
 * - danh sách các link api theo tên
*/
var BaseAPI = /*#__PURE__*/function () {
  function BaseAPI() {
    var APIs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, BaseAPI);

    this.APIs = APIs || {};
  }
  /**
   * @todo: Hàm hỗ trợ lấy link API từ options của truyền vào từ plugin
   * @purpose: 
   * - mục đích: VD muốn gọi ajax lấy danh sách address component
   *      thì cần có link để gọi ajax
   *      thì hàm này sẽ lấy link từ options ra
   *      và replace chuỗi nếu có replacements
   *          VD: trong trường hợp là link api chi tiết thì cần có ID trên url
   * @author: Croco
   * @since: 28-07-2020
   * @param string tên api trong options
   * @param Object dùng để replace các giá trị vào url
   *  [key] => value
   * @return string|null
  */


  _createClass(BaseAPI, [{
    key: "getAPI",
    value: function getAPI(name) {
      var replacements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var apis = this.APIs || {};
      var api = apis[name];

      if (!api) {
        return null;
      }

      if (replacements) {
        var keys = Object.keys(replacements);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          api = api.replace(key, replacements[key]);
        }
      }

      return api;
    }
    /**
     * @todo hàm gọi ajax
     * @author: Dũng
     * @since: 01-06-2020
     * @input
     * method phương thước của api
     * url đường dẫn api
     * data dữ liệu gửi lên api
     * headers set params trong headers gửi lên API
     * options cấu hình đặc biệt ngường dùng muốn đưa và hàm ajax
     * @flow 
     * Hàm gọi lên API bằng phương thức ajax
     */

  }, {
    key: "request",
    value: function request(method, url) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      headers = headers || {};
      options = options || {};
      return $.ajax(_objectSpread(_objectSpread({
        dataType: "json"
      }, options), {}, {
        url: url,
        method: method,
        data: data,
        headers: _objectSpread({}, headers)
      }));
    }
  }]);

  return BaseAPI;
}();

/* harmony default export */ __webpack_exports__["default"] = (BaseAPI);

/***/ }),

/***/ 1:
/*!***********************************************************************!*\
  !*** multi ./UI/WEB/Assets/js/account-manager/account-manager-api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\ApiatoAccountManager\app\Containers\AccountManager\UI\WEB\Assets\js\account-manager\account-manager-api.js */"./UI/WEB/Assets/js/account-manager/account-manager-api.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9hY2NvdW50LW1hbmFnZXIvYWNjb3VudC1tYW5hZ2VyLWFwaS5qcyIsIndlYnBhY2s6Ly8vLi9VSS9XRUIvQXNzZXRzL2pzL2luY2x1ZGVzL0Jhc2VBcGkuanMiXSwibmFtZXMiOlsiJCIsInBocERhdGEiLCJBY2NvdW50TWFuYWdlckFwaSIsIkFQSXMiLCJkYXRhIiwid2luZG93IiwiUEhQX0RBVEEiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaWQiLCJyb3ciLCJiYXNlQXBpIiwiQmFzZUFwaSIsImFwaSIsImdldEFQSSIsIl9fQUNDT1VOVF9NQU5BR0VSX0lEX18iLCJhY2NvdW50TWFuYWdlckFwaSIsImluaXREYXRhVGFibGUiLCJiaW5kIiwialF1ZXJ5IiwiQmFzZUFQSSIsIm5hbWUiLCJyZXBsYWNlbWVudHMiLCJhcGlzIiwia2V5cyIsIk9iamVjdCIsImkiLCJsZW5ndGgiLCJrZXkiLCJyZXBsYWNlIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsIm9wdGlvbnMiLCJhamF4IiwiZGF0YVR5cGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5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V0FBRyxFQUFFQSxHQUhGO0FBSUhELGNBQU0sRUFBRUEsTUFKTDtBQUtIOUIsWUFBSSxFQUFFQSxJQUxIO0FBTUhnQyxlQUFPLG9CQUNBQSxPQURBO0FBTkosU0FBUDtBQVVIOzs7Ozs7QUFHVVosc0VBQWYsRSIsImZpbGUiOiIvanMvYWNjb3VudC1tYW5hZ2VyL2FjY291bnQtbWFuYWdlci9hY2NvdW50LW1hbmFnZXItYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4uL2luY2x1ZGVzL0Jhc2VBcGknO1xyXG5cclxuKGZ1bmN0aW9uICgkLCBwaHBEYXRhKSB7XHJcbiAgICBcclxuICBwaHBEYXRhID0gcGhwRGF0YSB8fCB7fTtcclxuXHJcbiAgY2xhc3MgQWNjb3VudE1hbmFnZXJBcGkgZXh0ZW5kcyBCYXNlQXBpe1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEFQSXMpIHtcclxuICAgICAgc3VwZXIoQVBJcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdERhdGFUYWJsZSgpIHtcclxuICAgICAgdmFyIGRhdGE9IHdpbmRvdy5QSFBfREFUQTtcclxuICAgICAgICBcclxuICAgICAgdmFyIHRhYmxlID0gJChcIiNkYXRhdGFibGUtbGlzdC1hbGxcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgXCJzY3JvbGxYXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwicmVzcG9uc2l2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJQcm9jZXNzaW5nXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiU2VydmVyU2lkZVwiOiB0cnVlLCBcclxuICAgICAgICAgICAgXCJzQWpheFNvdXJjZVwiOiBkYXRhWydBUElfR0VUX0FMTF9BQ0NPVU5UX01BTkFHRVJTJ10sXHJcbiAgICAgICAgICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA6J2lkJ30sXHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA6J2NvbXBhbnlfbmFtZSd9LFxyXG4gICAgICAgICAgICAgICAge2RhdGEgOidkb21haW5fbmFtZSd9LFxyXG4gICAgICAgICAgICAgICAge2RhdGEgOidhcHBfbmFtZSd9LFxyXG4gICAgICAgICAgICAgICAge2RhdGEgOidzdGFydF9kYXRlJ30sXHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICBcInBhZ2luZ1wiOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgJCgnI2RhdGF0YWJsZS1saXN0LWFsbCB0Ym9keScpLm9uKCdjbGljaycsICd0cicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGFibGUuJCgndHIuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaWQgPSB0YWJsZS5yb3codGhpcykuZGF0YSgpWydpZCddO1xyXG5cclxuICAgICAgICB2YXIgYmFzZUFwaSA9IG5ldyBCYXNlQXBpKHBocERhdGEpO1xyXG4gICAgICAgIHZhciBhcGkgPSBiYXNlQXBpLmdldEFQSShcIkFQSV9HRVRfQUNDT1VOVF9NQU5BR0VSU19CWV9JRFwiLCB7XHJcbiAgICAgICAgICBfX0FDQ09VTlRfTUFOQUdFUl9JRF9fIDogaWRcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGRvY3VtZW50IHJlYWR5XHJcbiAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIGto4bufaSB04bqhbyBjbGFzc1xyXG4gICAgICB2YXIgYWNjb3VudE1hbmFnZXJBcGkgPSBuZXcgQWNjb3VudE1hbmFnZXJBcGkocGhwRGF0YSk7XHJcbiAgICAgIC8vIGto4bufaSBjaOG6oXkgaMOgbSBpbml0XHJcbiAgICAgIGFjY291bnRNYW5hZ2VyQXBpLmluaXREYXRhVGFibGUoKTtcclxuICB9KTtcclxufS5iaW5kKHdpbmRvdykpKGpRdWVyeSwgd2luZG93LlBIUF9EQVRBKTsiLCIvKipcclxuICogQHRvZG86IENsYXNzIHF14bqjbiBsw70gY8OhYyBhcGkgY+G7p2EgMSBmb3JtXHJcbiAqIEBwdXJwb3NlOlxyXG4gKiAtIG3hu6VjIMSRw61jaDpcclxuICogICAgIC0gdOG6oW8gMSBiYXNlIGNsYXNzIGNobyBjw6FjIGZvcm0gdGjDqm0sIGPhuq1wIG5o4bqtdFxyXG4gKiAgICAgICAgICDEkeG7gyBjw6FjIGjDoG0gaGF5IHPhu60gZOG7pW5nIMSR4buDIGzDqm4gY2xhc3MgY2h1bmdcclxuICogQGF1dGhvcjogQ3JvY29cclxuICogQHNpbmNlOiAwMS0wOC0yMDIwXHJcbiAqIEBwYXJhbSBqUXVlcnkgZWxlbWVudFxyXG4gKiBAcGFyYW0gT2JqZWN0IGFwaXNcclxuICogLSBkYW5oIHPDoWNoIGPDoWMgbGluayBhcGkgdGhlbyB0w6puXHJcbiovXHJcbmNsYXNzIEJhc2VBUEkge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEFQSXMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuQVBJcyA9IEFQSXMgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbzogSMOgbSBo4buXIHRy4bujIGzhuqV5IGxpbmsgQVBJIHThu6sgb3B0aW9ucyBj4bunYSB0cnV54buBbiB2w6BvIHThu6sgcGx1Z2luXHJcbiAgICAgKiBAcHVycG9zZTogXHJcbiAgICAgKiAtIG3hu6VjIMSRw61jaDogVkQgbXXhu5FuIGfhu41pIGFqYXggbOG6pXkgZGFuaCBzw6FjaCBhZGRyZXNzIGNvbXBvbmVudFxyXG4gICAgICogICAgICB0aMOsIGPhuqduIGPDsyBsaW5rIMSR4buDIGfhu41pIGFqYXhcclxuICAgICAqICAgICAgdGjDrCBow6BtIG7DoHkgc+G6vSBs4bqleSBsaW5rIHThu6sgb3B0aW9ucyByYVxyXG4gICAgICogICAgICB2w6AgcmVwbGFjZSBjaHXhu5dpIG7hur91IGPDsyByZXBsYWNlbWVudHNcclxuICAgICAqICAgICAgICAgIFZEOiB0cm9uZyB0csaw4budbmcgaOG7o3AgbMOgIGxpbmsgYXBpIGNoaSB0aeG6v3QgdGjDrCBj4bqnbiBjw7MgSUQgdHLDqm4gdXJsXHJcbiAgICAgKiBAYXV0aG9yOiBDcm9jb1xyXG4gICAgICogQHNpbmNlOiAyOC0wNy0yMDIwXHJcbiAgICAgKiBAcGFyYW0gc3RyaW5nIHTDqm4gYXBpIHRyb25nIG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSBPYmplY3QgZMO5bmcgxJHhu4MgcmVwbGFjZSBjw6FjIGdpw6EgdHLhu4sgdsOgbyB1cmxcclxuICAgICAqICBba2V5XSA9PiB2YWx1ZVxyXG4gICAgICogQHJldHVybiBzdHJpbmd8bnVsbFxyXG4gICAgKi9cclxuICAgIGdldEFQSShuYW1lLCByZXBsYWNlbWVudHMgPSB7fSkge1xyXG5cclxuICAgICAgICBsZXQgYXBpcyA9IHRoaXMuQVBJcyB8fCB7fTtcclxuICAgICAgICBsZXQgYXBpID0gYXBpc1tuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCFhcGkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcGxhY2VtZW50cykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhyZXBsYWNlbWVudHMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcclxuICAgICAgICAgICAgICAgIGFwaSA9IGFwaS5yZXBsYWNlKGtleSwgcmVwbGFjZW1lbnRzW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXBpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHRvZG8gaMOgbSBn4buNaSBhamF4XHJcbiAgICAgKiBAYXV0aG9yOiBExaluZ1xyXG4gICAgICogQHNpbmNlOiAwMS0wNi0yMDIwXHJcbiAgICAgKiBAaW5wdXRcclxuICAgICAqIG1ldGhvZCBwaMawxqFuZyB0aMaw4bubYyBj4bunYSBhcGlcclxuICAgICAqIHVybCDEkcaw4budbmcgZOG6q24gYXBpXHJcbiAgICAgKiBkYXRhIGThu68gbGnhu4d1IGfhu61pIGzDqm4gYXBpXHJcbiAgICAgKiBoZWFkZXJzIHNldCBwYXJhbXMgdHJvbmcgaGVhZGVycyBn4butaSBsw6puIEFQSVxyXG4gICAgICogb3B0aW9ucyBj4bqldSBow6xuaCDEkeG6t2MgYmnhu4d0IG5nxrDhu51uZyBkw7luZyBtdeG7kW4gxJHGsGEgdsOgIGjDoG0gYWpheFxyXG4gICAgICogQGZsb3cgXHJcbiAgICAgKiBIw6BtIGfhu41pIGzDqm4gQVBJIGLhurFuZyBwaMawxqFuZyB0aOG7qWMgYWpheFxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhID0gbnVsbCwgaGVhZGVycyA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuXHJcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMgfHwge307XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4uaGVhZGVyc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VBUEk7Il0sInNvdXJjZVJvb3QiOiIifQ==