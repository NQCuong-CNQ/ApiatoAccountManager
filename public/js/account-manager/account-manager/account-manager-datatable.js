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

/***/ "./UI/WEB/Assets/js/account-manager/AccountManagerApi.js":
/*!***************************************************************!*\
  !*** ./UI/WEB/Assets/js/account-manager/AccountManagerApi.js ***!
  \***************************************************************/
/*! exports provided: default */
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


/**
 * @todo: Class hỗ trợ quản lý các API về account manager
 * @author: Cường
 * @since: 15-01-2021
 * @param Object danh sách các api
*/

var AccountManagerApi = /*#__PURE__*/function (_BaseApi) {
  _inherits(AccountManagerApi, _BaseApi);

  var _super = _createSuper(AccountManagerApi);

  function AccountManagerApi(APIs) {
    _classCallCheck(this, AccountManagerApi);

    return _super.call(this, APIs);
  }
  /**
   * @todo: Hàm hỗ trợ gọi API thêm mới một account manager
   * @purpose: 
   * - mục đích:
   *      gọi lên api để tạo mới 1 address component 
   * @author: Cường
   * @since: 15-01-2021
   * @param Object parameters
   * @return 
   * @throws 
  */


  _createClass(AccountManagerApi, [{
    key: "createAccountManager",
    value: function createAccountManager(accountManager) {
      var api = this.getAPI("API_CREATE_ACCOUNT_MANAGERS");

      if (!api) {
        throw new Error("Không tìm thấy Api này!");
      }

      return this.request("POST", api, accountManager);
    }
    /**
     * @todo: Api cập nhật account manager
     * @purpose: 
     * - mục đích: gọi lên api để cập nhật 1 account manager
     *  (Tên công ty, tên ứng dụng, ...)
     * @author: Cường
     * @since: 15-01-2021
     * @param Object thông tin địa chỉ
     * @return Promise ajax
     * @throws Error
    */

  }, {
    key: "updateAccountManager",
    value: function updateAccountManager(accountManager, account_manager_id) {
      var api = this.getAPI("API_UPDATE_ACCOUNT_MANAGERS", {
        __ACCOUNT_MANAGER_ID__: account_manager_id
      });

      if (!api) {
        throw new Error("Không tìm thấy Api này!");
      }

      return this.request("PUT", api, accountManager);
    }
    /**
     * @todo: Api xóa account manager
     * @purpose: 
     * - mục đích: gọi lên api để xóa 1 account manager
     * @author: Cường
     * @since: 15-01-2021
     * @param Object thông tin địa chỉ
     * @return Promise ajax
     * @throws Error
    */

  }, {
    key: "deleteAccountManager",
    value: function deleteAccountManager(accountManagerId) {
      var api = this.getAPI("API_DELETE_ACCOUNT_MANAGERS", {
        __ACCOUNT_MANAGER_ID__: accountManagerId
      });

      if (!api) {
        throw new Error("Không tìm thấy Api này!");
      }

      return this.request("DELETE", api, accountManagerId);
    }
  }]);

  return AccountManagerApi;
}(_includes_BaseApi__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (AccountManagerApi);

/***/ }),

/***/ "./UI/WEB/Assets/js/account-manager/account-manager-datatable.js":
/*!***********************************************************************!*\
  !*** ./UI/WEB/Assets/js/account-manager/account-manager-datatable.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_manager_AccountManagerApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../account-manager/AccountManagerApi */ "./UI/WEB/Assets/js/account-manager/AccountManagerApi.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // scope

(function ($, phpData) {
  phpData = phpData || {};
  /**
   * @todo: Class hiển thị bảng AccountManager
   * @purpose: 
   * - mục đích: hiển thị danh sách các AccountManager và xử lý sự kiện onclick
   * @author: Cường
   * @since: 15-01-2021
   * @param 
  */

  var AccountManageDataTable = /*#__PURE__*/function () {
    function AccountManageDataTable() {
      _classCallCheck(this, AccountManageDataTable);

      this.API = new _account_manager_AccountManagerApi__WEBPACK_IMPORTED_MODULE_0__["default"](phpData);
    }

    _createClass(AccountManageDataTable, [{
      key: "initDataTable",
      value: function initDataTable() {
        var table = $("#datatable-list-all").DataTable({
          "scrollX": true,
          "responsive": false,
          "Processing": true,
          "ServerSide": true,
          "sAjaxSource": phpData['API_GET_ALL_ACCOUNT_MANAGERS'],
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
        var thisAPI = this.API;
        $('#datatable-list-all tbody').on('click', 'tr', function () {
          if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
          } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
          }

          var id = table.row(this).data()['id'];
          var api = thisAPI.getAPI("WEB_GET_ACCOUNT_MANAGERS_BY_ID", {
            __ACCOUNT_MANAGER_ID__: id
          });
          location.href = api;
        });
      }
    }]);

    return AccountManageDataTable;
  }(); // document ready


  $(function () {
    // khởi tạo class
    var accountManageDataTable = new AccountManageDataTable(); // khởi chạy hàm init

    accountManageDataTable.initDataTable();
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
/*!*****************************************************************************!*\
  !*** multi ./UI/WEB/Assets/js/account-manager/account-manager-datatable.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\ApiatoAccountManager\app\Containers\AccountManager\UI\WEB\Assets\js\account-manager\account-manager-datatable.js */"./UI/WEB/Assets/js/account-manager/account-manager-datatable.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9hY2NvdW50LW1hbmFnZXIvQWNjb3VudE1hbmFnZXJBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9hY2NvdW50LW1hbmFnZXIvYWNjb3VudC1tYW5hZ2VyLWRhdGF0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9VSS9XRUIvQXNzZXRzL2pzL2luY2x1ZGVzL0Jhc2VBcGkuanMiXSwibmFtZXMiOlsiQWNjb3VudE1hbmFnZXJBcGkiLCJBUElzIiwiYWNjb3VudE1hbmFnZXIiLCJhcGkiLCJnZXRBUEkiLCJFcnJvciIsInJlcXVlc3QiLCJhY2NvdW50X21hbmFnZXJfaWQiLCJfX0FDQ09VTlRfTUFOQUdFUl9JRF9fIiwiYWNjb3VudE1hbmFnZXJJZCIsIkJhc2VBcGkiLCIkIiwicGhwRGF0YSIsIkFjY291bnRNYW5hZ2VEYXRhVGFibGUiLCJBUEkiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImRhdGEiLCJ0aGlzQVBJIiwib24iLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJpZCIsInJvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFjY291bnRNYW5hZ2VEYXRhVGFibGUiLCJpbml0RGF0YVRhYmxlIiwiYmluZCIsIndpbmRvdyIsImpRdWVyeSIsIlBIUF9EQVRBIiwiQmFzZUFQSSIsIm5hbWUiLCJyZXBsYWNlbWVudHMiLCJhcGlzIiwia2V5cyIsIk9iamVjdCIsImkiLCJsZW5ndGgiLCJrZXkiLCJyZXBsYWNlIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsIm9wdGlvbnMiLCJhamF4IiwiZGF0YVR5cGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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O0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzRCQUNZd0MsTSxFQUFRQyxHLEVBQThDO0FBQUEsVUFBekMzQixJQUF5Qyx1RUFBbEMsSUFBa0M7QUFBQSxVQUE1QjRCLE9BQTRCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUUxREQsYUFBTyxHQUFHQSxPQUFPLElBQUksRUFBckI7QUFDQUMsYUFBTyxHQUFHQSxPQUFPLElBQUksRUFBckI7QUFFQSxhQUFPbkMsQ0FBQyxDQUFDb0MsSUFBRjtBQUNIQyxnQkFBUSxFQUFFO0FBRFAsU0FFQUYsT0FGQTtBQUdIRixXQUFHLEVBQUVBLEdBSEY7QUFJSEQsY0FBTSxFQUFFQSxNQUpMO0FBS0gxQixZQUFJLEVBQUVBLElBTEg7QUFNSDRCLGVBQU8sb0JBQ0FBLE9BREE7QUFOSixTQUFQO0FBVUg7Ozs7OztBQUdVWixzRUFBZixFIiwiZmlsZSI6Ii9qcy9hY2NvdW50LW1hbmFnZXIvYWNjb3VudC1tYW5hZ2VyL2FjY291bnQtbWFuYWdlci1kYXRhdGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiaW1wb3J0IEJhc2VBcGkgZnJvbSAnLi4vaW5jbHVkZXMvQmFzZUFwaSc7XHJcblxyXG4vKipcclxuICogQHRvZG86IENsYXNzIGjhu5cgdHLhu6MgcXXhuqNuIGzDvSBjw6FjIEFQSSB24buBIGFjY291bnQgbWFuYWdlclxyXG4gKiBAYXV0aG9yOiBDxrDhu51uZ1xyXG4gKiBAc2luY2U6IDE1LTAxLTIwMjFcclxuICogQHBhcmFtIE9iamVjdCBkYW5oIHPDoWNoIGPDoWMgYXBpXHJcbiovXHJcbmNsYXNzIEFjY291bnRNYW5hZ2VyQXBpIGV4dGVuZHMgQmFzZUFwaXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihBUElzKSB7XHJcbiAgICAgICAgc3VwZXIoQVBJcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbzogSMOgbSBo4buXIHRy4bujIGfhu41pIEFQSSB0aMOqbSBt4bubaSBt4buZdCBhY2NvdW50IG1hbmFnZXJcclxuICAgICAqIEBwdXJwb3NlOiBcclxuICAgICAqIC0gbeG7pWMgxJHDrWNoOlxyXG4gICAgICogICAgICBn4buNaSBsw6puIGFwaSDEkeG7gyB04bqhbyBt4bubaSAxIGFkZHJlc3MgY29tcG9uZW50IFxyXG4gICAgICogQGF1dGhvcjogQ8aw4budbmdcclxuICAgICAqIEBzaW5jZTogMTUtMDEtMjAyMVxyXG4gICAgICogQHBhcmFtIE9iamVjdCBwYXJhbWV0ZXJzXHJcbiAgICAgKiBAcmV0dXJuIFxyXG4gICAgICogQHRocm93cyBcclxuICAgICovXHJcbiAgICBjcmVhdGVBY2NvdW50TWFuYWdlcihhY2NvdW50TWFuYWdlcil7XHJcbiAgICBcdGxldCBhcGkgPSB0aGlzLmdldEFQSShcIkFQSV9DUkVBVEVfQUNDT1VOVF9NQU5BR0VSU1wiKTtcclxuXHJcbiAgICAgICAgaWYgKCFhcGkpIHtcclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIktow7RuZyB0w6xtIHRo4bqleSBBcGkgbsOgeSFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFx0cmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgICAgICAgXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGFwaSxcclxuICAgICAgICAgICAgYWNjb3VudE1hbmFnZXJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHRvZG86IEFwaSBj4bqtcCBuaOG6rXQgYWNjb3VudCBtYW5hZ2VyXHJcbiAgICAgKiBAcHVycG9zZTogXHJcbiAgICAgKiAtIG3hu6VjIMSRw61jaDogZ+G7jWkgbMOqbiBhcGkgxJHhu4MgY+G6rXAgbmjhuq10IDEgYWNjb3VudCBtYW5hZ2VyXHJcbiAgICAgKiAgKFTDqm4gY8O0bmcgdHksIHTDqm4g4bupbmcgZOG7pW5nLCAuLi4pXHJcbiAgICAgKiBAYXV0aG9yOiBDxrDhu51uZ1xyXG4gICAgICogQHNpbmNlOiAxNS0wMS0yMDIxXHJcbiAgICAgKiBAcGFyYW0gT2JqZWN0IHRow7RuZyB0aW4gxJHhu4thIGNo4buJXHJcbiAgICAgKiBAcmV0dXJuIFByb21pc2UgYWpheFxyXG4gICAgICogQHRocm93cyBFcnJvclxyXG4gICAgKi9cclxuICAgIHVwZGF0ZUFjY291bnRNYW5hZ2VyKGFjY291bnRNYW5hZ2VyLCBhY2NvdW50X21hbmFnZXJfaWQpe1xyXG4gICAgICAgIGxldCBhcGkgPSB0aGlzLmdldEFQSShcIkFQSV9VUERBVEVfQUNDT1VOVF9NQU5BR0VSU1wiLCB7XHJcbiAgICAgICAgICBfX0FDQ09VTlRfTUFOQUdFUl9JRF9fIDogYWNjb3VudF9tYW5hZ2VyX2lkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghYXBpKSB7XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJLaMO0bmcgdMOsbSB0aOG6pXkgQXBpIG7DoHkhXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgICAgICAgXCJQVVRcIixcclxuICAgICAgICAgICAgYXBpLFxyXG4gICAgICAgICAgICBhY2NvdW50TWFuYWdlclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbzogQXBpIHjDs2EgYWNjb3VudCBtYW5hZ2VyXHJcbiAgICAgKiBAcHVycG9zZTogXHJcbiAgICAgKiAtIG3hu6VjIMSRw61jaDogZ+G7jWkgbMOqbiBhcGkgxJHhu4MgeMOzYSAxIGFjY291bnQgbWFuYWdlclxyXG4gICAgICogQGF1dGhvcjogQ8aw4budbmdcclxuICAgICAqIEBzaW5jZTogMTUtMDEtMjAyMVxyXG4gICAgICogQHBhcmFtIE9iamVjdCB0aMO0bmcgdGluIMSR4buLYSBjaOG7iVxyXG4gICAgICogQHJldHVybiBQcm9taXNlIGFqYXhcclxuICAgICAqIEB0aHJvd3MgRXJyb3JcclxuICAgICovXHJcbiAgICBkZWxldGVBY2NvdW50TWFuYWdlcihhY2NvdW50TWFuYWdlcklkKXtcclxuICAgICAgICBsZXQgYXBpID0gdGhpcy5nZXRBUEkoXCJBUElfREVMRVRFX0FDQ09VTlRfTUFOQUdFUlNcIiwge1xyXG4gICAgICAgICAgX19BQ0NPVU5UX01BTkFHRVJfSURfXyA6IGFjY291bnRNYW5hZ2VySWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhcGkpIHtcclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIktow7RuZyB0w6xtIHRo4bqleSBBcGkgbsOgeSFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXHJcbiAgICAgICAgICAgIFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGFwaSxcclxuICAgICAgICAgICAgYWNjb3VudE1hbmFnZXJJZFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50TWFuYWdlckFwaTtcclxuIiwiaW1wb3J0IEFjY291bnRNYW5hZ2VyQXBpIGZyb20gJy4uL2FjY291bnQtbWFuYWdlci9BY2NvdW50TWFuYWdlckFwaSc7XHJcblxyXG4vLyBzY29wZVxyXG4oZnVuY3Rpb24gKCQsIHBocERhdGEpIHtcclxuICAgIFxyXG4gIHBocERhdGEgPSBwaHBEYXRhIHx8IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBAdG9kbzogQ2xhc3MgaGnhu4NuIHRo4buLIGLhuqNuZyBBY2NvdW50TWFuYWdlclxyXG4gICAqIEBwdXJwb3NlOiBcclxuICAgKiAtIG3hu6VjIMSRw61jaDogaGnhu4NuIHRo4buLIGRhbmggc8OhY2ggY8OhYyBBY2NvdW50TWFuYWdlciB2w6AgeOG7rSBsw70gc+G7sSBraeG7h24gb25jbGlja1xyXG4gICAqIEBhdXRob3I6IEPGsOG7nW5nXHJcbiAgICogQHNpbmNlOiAxNS0wMS0yMDIxXHJcbiAgICogQHBhcmFtIFxyXG4gICovXHJcbiAgY2xhc3MgQWNjb3VudE1hbmFnZURhdGFUYWJsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5BUEkgPSBuZXcgQWNjb3VudE1hbmFnZXJBcGkocGhwRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdERhdGFUYWJsZSgpIHtcclxuICAgICBcclxuICAgICAgdmFyIHRhYmxlID0gJChcIiNkYXRhdGFibGUtbGlzdC1hbGxcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgXCJzY3JvbGxYXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwicmVzcG9uc2l2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJQcm9jZXNzaW5nXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiU2VydmVyU2lkZVwiOiB0cnVlLCBcclxuICAgICAgICAgICAgXCJzQWpheFNvdXJjZVwiOiBwaHBEYXRhWydBUElfR0VUX0FMTF9BQ0NPVU5UX01BTkFHRVJTJ10sXHJcbiAgICAgICAgICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA6J2lkJ30sXHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA6J2NvbXBhbnlfbmFtZSd9LFxyXG4gICAgICAgICAgICAgICAge2RhdGEgOidkb21haW5fbmFtZSd9LFxyXG4gICAgICAgICAgICAgICAge2RhdGEgOidhcHBfbmFtZSd9LFxyXG4gICAgICAgICAgICAgICAge2RhdGEgOidzdGFydF9kYXRlJ30sXHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICBcInBhZ2luZ1wiOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHRoaXNBUEkgPSB0aGlzLkFQSTtcclxuXHJcbiAgICAgICQoJyNkYXRhdGFibGUtbGlzdC1hbGwgdGJvZHknKS5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhYmxlLiQoJ3RyLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGlkID0gdGFibGUucm93KHRoaXMpLmRhdGEoKVsnaWQnXTtcclxuICAgICAgICB2YXIgYXBpID0gdGhpc0FQSS5nZXRBUEkoXCJXRUJfR0VUX0FDQ09VTlRfTUFOQUdFUlNfQllfSURcIiwge1xyXG4gICAgICAgICAgX19BQ0NPVU5UX01BTkFHRVJfSURfXyA6IGlkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBhcGk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBkb2N1bWVudCByZWFkeVxyXG4gICQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBraOG7n2kgdOG6oW8gY2xhc3NcclxuICAgICAgdmFyIGFjY291bnRNYW5hZ2VEYXRhVGFibGUgPSBuZXcgQWNjb3VudE1hbmFnZURhdGFUYWJsZSgpO1xyXG4gICAgICAvLyBraOG7n2kgY2jhuqF5IGjDoG0gaW5pdFxyXG4gICAgICBhY2NvdW50TWFuYWdlRGF0YVRhYmxlLmluaXREYXRhVGFibGUoKTtcclxuICB9KTtcclxufS5iaW5kKHdpbmRvdykpKGpRdWVyeSwgd2luZG93LlBIUF9EQVRBKTsiLCIvKipcclxuICogQHRvZG86IENsYXNzIHF14bqjbiBsw70gY8OhYyBhcGkgY+G7p2EgMSBmb3JtXHJcbiAqIEBwdXJwb3NlOlxyXG4gKiAtIG3hu6VjIMSRw61jaDpcclxuICogICAgIC0gdOG6oW8gMSBiYXNlIGNsYXNzIGNobyBjw6FjIGZvcm0gdGjDqm0sIGPhuq1wIG5o4bqtdFxyXG4gKiAgICAgICAgICDEkeG7gyBjw6FjIGjDoG0gaGF5IHPhu60gZOG7pW5nIMSR4buDIGzDqm4gY2xhc3MgY2h1bmdcclxuICogQGF1dGhvcjogQ3JvY29cclxuICogQHNpbmNlOiAwMS0wOC0yMDIwXHJcbiAqIEBwYXJhbSBqUXVlcnkgZWxlbWVudFxyXG4gKiBAcGFyYW0gT2JqZWN0IGFwaXNcclxuICogLSBkYW5oIHPDoWNoIGPDoWMgbGluayBhcGkgdGhlbyB0w6puXHJcbiovXHJcbmNsYXNzIEJhc2VBUEkge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEFQSXMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuQVBJcyA9IEFQSXMgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbzogSMOgbSBo4buXIHRy4bujIGzhuqV5IGxpbmsgQVBJIHThu6sgb3B0aW9ucyBj4bunYSB0cnV54buBbiB2w6BvIHThu6sgcGx1Z2luXHJcbiAgICAgKiBAcHVycG9zZTogXHJcbiAgICAgKiAtIG3hu6VjIMSRw61jaDogVkQgbXXhu5FuIGfhu41pIGFqYXggbOG6pXkgZGFuaCBzw6FjaCBhZGRyZXNzIGNvbXBvbmVudFxyXG4gICAgICogICAgICB0aMOsIGPhuqduIGPDsyBsaW5rIMSR4buDIGfhu41pIGFqYXhcclxuICAgICAqICAgICAgdGjDrCBow6BtIG7DoHkgc+G6vSBs4bqleSBsaW5rIHThu6sgb3B0aW9ucyByYVxyXG4gICAgICogICAgICB2w6AgcmVwbGFjZSBjaHXhu5dpIG7hur91IGPDsyByZXBsYWNlbWVudHNcclxuICAgICAqICAgICAgICAgIFZEOiB0cm9uZyB0csaw4budbmcgaOG7o3AgbMOgIGxpbmsgYXBpIGNoaSB0aeG6v3QgdGjDrCBj4bqnbiBjw7MgSUQgdHLDqm4gdXJsXHJcbiAgICAgKiBAYXV0aG9yOiBDcm9jb1xyXG4gICAgICogQHNpbmNlOiAyOC0wNy0yMDIwXHJcbiAgICAgKiBAcGFyYW0gc3RyaW5nIHTDqm4gYXBpIHRyb25nIG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSBPYmplY3QgZMO5bmcgxJHhu4MgcmVwbGFjZSBjw6FjIGdpw6EgdHLhu4sgdsOgbyB1cmxcclxuICAgICAqICBba2V5XSA9PiB2YWx1ZVxyXG4gICAgICogQHJldHVybiBzdHJpbmd8bnVsbFxyXG4gICAgKi9cclxuICAgIGdldEFQSShuYW1lLCByZXBsYWNlbWVudHMgPSB7fSkge1xyXG5cclxuICAgICAgICBsZXQgYXBpcyA9IHRoaXMuQVBJcyB8fCB7fTtcclxuICAgICAgICBsZXQgYXBpID0gYXBpc1tuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCFhcGkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcGxhY2VtZW50cykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhyZXBsYWNlbWVudHMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcclxuICAgICAgICAgICAgICAgIGFwaSA9IGFwaS5yZXBsYWNlKGtleSwgcmVwbGFjZW1lbnRzW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXBpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHRvZG8gaMOgbSBn4buNaSBhamF4XHJcbiAgICAgKiBAYXV0aG9yOiBExaluZ1xyXG4gICAgICogQHNpbmNlOiAwMS0wNi0yMDIwXHJcbiAgICAgKiBAaW5wdXRcclxuICAgICAqIG1ldGhvZCBwaMawxqFuZyB0aMaw4bubYyBj4bunYSBhcGlcclxuICAgICAqIHVybCDEkcaw4budbmcgZOG6q24gYXBpXHJcbiAgICAgKiBkYXRhIGThu68gbGnhu4d1IGfhu61pIGzDqm4gYXBpXHJcbiAgICAgKiBoZWFkZXJzIHNldCBwYXJhbXMgdHJvbmcgaGVhZGVycyBn4butaSBsw6puIEFQSVxyXG4gICAgICogb3B0aW9ucyBj4bqldSBow6xuaCDEkeG6t2MgYmnhu4d0IG5nxrDhu51uZyBkw7luZyBtdeG7kW4gxJHGsGEgdsOgIGjDoG0gYWpheFxyXG4gICAgICogQGZsb3cgXHJcbiAgICAgKiBIw6BtIGfhu41pIGzDqm4gQVBJIGLhurFuZyBwaMawxqFuZyB0aOG7qWMgYWpheFxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhID0gbnVsbCwgaGVhZGVycyA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuXHJcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMgfHwge307XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4uaGVhZGVyc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VBUEk7Il0sInNvdXJjZVJvb3QiOiIifQ==