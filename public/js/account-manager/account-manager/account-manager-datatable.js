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
        throw new Error(trans("accountmanager::account-manager.errors.api_not_found"));
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
        throw new Error(trans("accountmanager::account-manager.errors.api_not_found"));
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
        throw new Error(trans("accountmanager::account-manager.errors.api_not_found"));
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
    /**
     * @todo: hàm khởi tạo và load dữ liệu vào datatable
     * @purpose:
     * - mục đích khởi tạo và load dữ liệu vào datatable, khởi tạo sự kiện click vào table
     * @author: Cường
     * @since: 16-01-2021
     * @param table
    */


    _createClass(AccountManageDataTable, [{
      key: "initDataTable",
      value: function initDataTable() {
        var $this = this; //khởi tạo và load dữ liệu

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
        }); // sự kiện click vào row của table

        $('#datatable-list-all tbody').on('click', 'tr', function () {
          $this.onClickTable(table, this);
        });
      }
      /**
       * @todo: Sự kiện click vào row trong table
       * @purpose:
       * - mục đích khi click vào row thì load chuyển hướng đến trang detail của id đó
       * @author: Cường
       * @since: 16-01-2021
       * @param table
      */

    }, {
      key: "onClickTable",
      value: function onClickTable(table, $this) {
        if ($($this).hasClass('selected')) {
          $($this).removeClass('selected');
        } else {
          table.$('tr.selected').removeClass('selected');
          $($this).addClass('selected');
        } //lấy id của row để chuyển hướng đến detail


        var id = table.row($this).data()['id'];
        var api = this.API.getAPI("WEB_GET_ACCOUNT_MANAGERS_BY_ID", {
          __ACCOUNT_MANAGER_ID__: id
        });
        location.href = api;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9hY2NvdW50LW1hbmFnZXIvQWNjb3VudE1hbmFnZXJBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9hY2NvdW50LW1hbmFnZXIvYWNjb3VudC1tYW5hZ2VyLWRhdGF0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9VSS9XRUIvQXNzZXRzL2pzL2luY2x1ZGVzL0Jhc2VBcGkuanMiXSwibmFtZXMiOlsiQWNjb3VudE1hbmFnZXJBcGkiLCJBUElzIiwiYWNjb3VudE1hbmFnZXIiLCJhcGkiLCJnZXRBUEkiLCJFcnJvciIsInRyYW5zIiwicmVxdWVzdCIsImFjY291bnRfbWFuYWdlcl9pZCIsIl9fQUNDT1VOVF9NQU5BR0VSX0lEX18iLCJhY2NvdW50TWFuYWdlcklkIiwiQmFzZUFwaSIsIiQiLCJwaHBEYXRhIiwiQWNjb3VudE1hbmFnZURhdGFUYWJsZSIsIkFQSSIsIiR0aGlzIiwidGFibGUiLCJEYXRhVGFibGUiLCJkYXRhIiwib24iLCJvbkNsaWNrVGFibGUiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJpZCIsInJvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFjY291bnRNYW5hZ2VEYXRhVGFibGUiLCJpbml0RGF0YVRhYmxlIiwiYmluZCIsIndpbmRvdyIsImpRdWVyeSIsIlBIUF9EQVRBIiwiQmFzZUFQSSIsIm5hbWUiLCJyZXBsYWNlbWVudHMiLCJhcGlzIiwia2V5cyIsIk9iamVjdCIsImkiLCJsZW5ndGgiLCJrZXkiLCJyZXBsYWNlIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsIm9wdGlvbnMiLCJhamF4IiwiZGF0YVR5cGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ01BLGlCOzs7OztBQUVGLDZCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsNkJBQ1JBLElBRFE7QUFFakI7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozt5Q0FDeUJDLGMsRUFBZTtBQUNuQyxVQUFJQyxHQUFHLEdBQUcsS0FBS0MsTUFBTCxDQUFZLDZCQUFaLENBQVY7O0FBRUcsVUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFFTixjQUFNLElBQUlFLEtBQUosQ0FBVUMsS0FBSyxDQUFDLHNEQUFELENBQWYsQ0FBTjtBQUNIOztBQUVKLGFBQU8sS0FBS0MsT0FBTCxDQUNBLE1BREEsRUFFQUosR0FGQSxFQUdBRCxjQUhBLENBQVA7QUFLQTtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7eUNBQ3lCQSxjLEVBQWdCTSxrQixFQUFtQjtBQUNwRCxVQUFJTCxHQUFHLEdBQUcsS0FBS0MsTUFBTCxDQUFZLDZCQUFaLEVBQTJDO0FBQ25ESyw4QkFBc0IsRUFBR0Q7QUFEMEIsT0FBM0MsQ0FBVjs7QUFJQSxVQUFJLENBQUNMLEdBQUwsRUFBVTtBQUVOLGNBQU0sSUFBSUUsS0FBSixDQUFVQyxLQUFLLENBQUMsc0RBQUQsQ0FBZixDQUFOO0FBQ0g7O0FBRUQsYUFBTyxLQUFLQyxPQUFMLENBQ0gsS0FERyxFQUVISixHQUZHLEVBR0hELGNBSEcsQ0FBUDtBQUtIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7eUNBQ3lCUSxnQixFQUFpQjtBQUNsQyxVQUFJUCxHQUFHLEdBQUcsS0FBS0MsTUFBTCxDQUFZLDZCQUFaLEVBQTJDO0FBQ25ESyw4QkFBc0IsRUFBR0M7QUFEMEIsT0FBM0MsQ0FBVjs7QUFJQSxVQUFJLENBQUNQLEdBQUwsRUFBVTtBQUVOLGNBQU0sSUFBSUUsS0FBSixDQUFVQyxLQUFLLENBQUMsc0RBQUQsQ0FBZixDQUFOO0FBQ0g7O0FBRUQsYUFBTyxLQUFLQyxPQUFMLENBQ0gsUUFERyxFQUVISixHQUZHLEVBR0hPLGdCQUhHLENBQVA7QUFLSDs7OztFQXJGMkJDLHlEOztBQXdGakJYLGdGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDOUZBOztBQUNDLFdBQVVZLENBQVYsRUFBYUMsT0FBYixFQUFzQjtBQUVyQkEsU0FBTyxHQUFHQSxPQUFPLElBQUksRUFBckI7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVh1QixNQVlkQyxzQkFaYztBQWNuQixzQ0FBYztBQUFBOztBQUNaLFdBQUtDLEdBQUwsR0FBVyxJQUFJZiwwRUFBSixDQUFzQmEsT0FBdEIsQ0FBWDtBQUNEO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBekJ1QjtBQUFBO0FBQUEsc0NBMEJIO0FBQ2QsWUFBSUcsS0FBSyxHQUFHLElBQVosQ0FEYyxDQUVkOztBQUNBLFlBQUlDLEtBQUssR0FBR0wsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJNLFNBQXpCLENBQW1DO0FBQzdDLHFCQUFXLElBRGtDO0FBRTdDLHdCQUFjLEtBRitCO0FBRzdDLHdCQUFjLElBSCtCO0FBSTdDLHdCQUFjLElBSitCO0FBSzdDLHlCQUFlTCxPQUFPLENBQUMsOEJBQUQsQ0FMdUI7QUFNN0MscUJBQVcsQ0FDWDtBQUFDTSxnQkFBSSxFQUFFO0FBQVAsV0FEVyxFQUVYO0FBQUNBLGdCQUFJLEVBQUU7QUFBUCxXQUZXLEVBR1g7QUFBQ0EsZ0JBQUksRUFBRTtBQUFQLFdBSFcsRUFJWDtBQUFDQSxnQkFBSSxFQUFFO0FBQVAsV0FKVyxFQUtYO0FBQUNBLGdCQUFJLEVBQUU7QUFBUCxXQUxXLENBTmtDO0FBYzdDLG9CQUFVO0FBZG1DLFNBQW5DLENBQVosQ0FIYyxDQW9CZDs7QUFDQVAsU0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JRLEVBQS9CLENBQWtDLE9BQWxDLEVBQTJDLElBQTNDLEVBQWlELFlBQVk7QUFDM0RKLGVBQUssQ0FBQ0ssWUFBTixDQUFtQkosS0FBbkIsRUFBMEIsSUFBMUI7QUFDRCxTQUZEO0FBR0Q7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTNEdUI7QUFBQTtBQUFBLG1DQTRETkEsS0E1RE0sRUE0RENELEtBNURELEVBNERPO0FBRXhCLFlBQUlKLENBQUMsQ0FBQ0ksS0FBRCxDQUFELENBQVNNLFFBQVQsQ0FBa0IsVUFBbEIsQ0FBSixFQUFtQztBQUNqQ1YsV0FBQyxDQUFDSSxLQUFELENBQUQsQ0FBU08sV0FBVCxDQUFxQixVQUFyQjtBQUNELFNBRkQsTUFFTztBQUNMTixlQUFLLENBQUNMLENBQU4sQ0FBUSxhQUFSLEVBQXVCVyxXQUF2QixDQUFtQyxVQUFuQztBQUNBWCxXQUFDLENBQUNJLEtBQUQsQ0FBRCxDQUFTUSxRQUFULENBQWtCLFVBQWxCO0FBQ0QsU0FQdUIsQ0FTeEI7OztBQUNBLFlBQUlDLEVBQUUsR0FBR1IsS0FBSyxDQUFDUyxHQUFOLENBQVVWLEtBQVYsRUFBaUJHLElBQWpCLEdBQXdCLElBQXhCLENBQVQ7QUFDQSxZQUFJaEIsR0FBRyxHQUFHLEtBQUtZLEdBQUwsQ0FBU1gsTUFBVCxDQUFnQixnQ0FBaEIsRUFBa0Q7QUFDMURLLGdDQUFzQixFQUFHZ0I7QUFEaUMsU0FBbEQsQ0FBVjtBQUlBRSxnQkFBUSxDQUFDQyxJQUFULEdBQWdCekIsR0FBaEI7QUFDRDtBQTVFa0I7O0FBQUE7QUFBQSxPQStFckI7OztBQUNBUyxHQUFDLENBQUMsWUFBWTtBQUNWO0FBQ0EsUUFBSWlCLHNCQUFzQixHQUFHLElBQUlmLHNCQUFKLEVBQTdCLENBRlUsQ0FHVjs7QUFDQWUsMEJBQXNCLENBQUNDLGFBQXZCO0FBQ0QsR0FMRixDQUFEO0FBT0QsQ0F2RkEsRUF1RkNDLElBdkZELENBdUZNQyxNQXZGTixDQUFELENBdUZnQkMsTUF2RmhCLEVBdUZ3QkQsTUFBTSxDQUFDRSxRQXZGL0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNNQyxPO0FBRUYscUJBQXVCO0FBQUEsUUFBWGxDLElBQVcsdUVBQUosRUFBSTs7QUFBQTs7QUFDbkIsU0FBS0EsSUFBTCxHQUFZQSxJQUFJLElBQUksRUFBcEI7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7MkJBQ1dtQyxJLEVBQXlCO0FBQUEsVUFBbkJDLFlBQW1CLHVFQUFKLEVBQUk7QUFFNUIsVUFBSUMsSUFBSSxHQUFHLEtBQUtyQyxJQUFMLElBQWEsRUFBeEI7QUFDQSxVQUFJRSxHQUFHLEdBQUdtQyxJQUFJLENBQUNGLElBQUQsQ0FBZDs7QUFFQSxVQUFJLENBQUNqQyxHQUFMLEVBQVU7QUFFTixlQUFPLElBQVA7QUFDSDs7QUFFRCxVQUFJa0MsWUFBSixFQUFrQjtBQUVkLFlBQUlFLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlGLFlBQVosQ0FBWDs7QUFDQSxhQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ0csTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFFbEMsY0FBSUUsR0FBRyxHQUFHSixJQUFJLENBQUNFLENBQUQsQ0FBZDtBQUNBdEMsYUFBRyxHQUFHQSxHQUFHLENBQUN5QyxPQUFKLENBQVlELEdBQVosRUFBaUJOLFlBQVksQ0FBQ00sR0FBRCxDQUE3QixDQUFOO0FBQ0g7QUFDSjs7QUFFRCxhQUFPeEMsR0FBUDtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7NEJBQ1kwQyxNLEVBQVFDLEcsRUFBOEM7QUFBQSxVQUF6QzNCLElBQXlDLHVFQUFsQyxJQUFrQztBQUFBLFVBQTVCNEIsT0FBNEIsdUVBQWxCLEVBQWtCO0FBQUEsVUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBRTFERCxhQUFPLEdBQUdBLE9BQU8sSUFBSSxFQUFyQjtBQUNBQyxhQUFPLEdBQUdBLE9BQU8sSUFBSSxFQUFyQjtBQUVBLGFBQU9wQyxDQUFDLENBQUNxQyxJQUFGO0FBQ0hDLGdCQUFRLEVBQUU7QUFEUCxTQUVBRixPQUZBO0FBR0hGLFdBQUcsRUFBRUEsR0FIRjtBQUlIRCxjQUFNLEVBQUVBLE1BSkw7QUFLSDFCLFlBQUksRUFBRUEsSUFMSDtBQU1INEIsZUFBTyxvQkFDQUEsT0FEQTtBQU5KLFNBQVA7QUFVSDs7Ozs7O0FBR1VaLHNFQUFmLEUiLCJmaWxlIjoiL2pzL2FjY291bnQtbWFuYWdlci9hY2NvdW50LW1hbmFnZXIvYWNjb3VudC1tYW5hZ2VyLWRhdGF0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuLi9pbmNsdWRlcy9CYXNlQXBpJztcclxuXHJcbi8qKlxyXG4gKiBAdG9kbzogQ2xhc3MgaOG7lyB0cuG7oyBxdeG6o24gbMO9IGPDoWMgQVBJIHbhu4EgYWNjb3VudCBtYW5hZ2VyXHJcbiAqIEBhdXRob3I6IEPGsOG7nW5nXHJcbiAqIEBzaW5jZTogMTUtMDEtMjAyMVxyXG4gKiBAcGFyYW0gT2JqZWN0IGRhbmggc8OhY2ggY8OhYyBhcGlcclxuKi9cclxuY2xhc3MgQWNjb3VudE1hbmFnZXJBcGkgZXh0ZW5kcyBCYXNlQXBpe1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEFQSXMpIHtcclxuICAgICAgICBzdXBlcihBUElzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0b2RvOiBIw6BtIGjhu5cgdHLhu6MgZ+G7jWkgQVBJIHRow6ptIG3hu5tpIG3hu5l0IGFjY291bnQgbWFuYWdlclxyXG4gICAgICogQHB1cnBvc2U6IFxyXG4gICAgICogLSBt4bulYyDEkcOtY2g6XHJcbiAgICAgKiAgICAgIGfhu41pIGzDqm4gYXBpIMSR4buDIHThuqFvIG3hu5tpIDEgYWRkcmVzcyBjb21wb25lbnQgXHJcbiAgICAgKiBAYXV0aG9yOiBDxrDhu51uZ1xyXG4gICAgICogQHNpbmNlOiAxNS0wMS0yMDIxXHJcbiAgICAgKiBAcGFyYW0gT2JqZWN0IHBhcmFtZXRlcnNcclxuICAgICAqIEByZXR1cm4gXHJcbiAgICAgKiBAdGhyb3dzIFxyXG4gICAgKi9cclxuICAgIGNyZWF0ZUFjY291bnRNYW5hZ2VyKGFjY291bnRNYW5hZ2VyKXtcclxuICAgIFx0bGV0IGFwaSA9IHRoaXMuZ2V0QVBJKFwiQVBJX0NSRUFURV9BQ0NPVU5UX01BTkFHRVJTXCIpO1xyXG5cclxuICAgICAgICBpZiAoIWFwaSkge1xyXG5cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRyYW5zKFwiYWNjb3VudG1hbmFnZXI6OmFjY291bnQtbWFuYWdlci5lcnJvcnMuYXBpX25vdF9mb3VuZFwiKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFx0cmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgICAgICAgXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGFwaSxcclxuICAgICAgICAgICAgYWNjb3VudE1hbmFnZXJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHRvZG86IEFwaSBj4bqtcCBuaOG6rXQgYWNjb3VudCBtYW5hZ2VyXHJcbiAgICAgKiBAcHVycG9zZTogXHJcbiAgICAgKiAtIG3hu6VjIMSRw61jaDogZ+G7jWkgbMOqbiBhcGkgxJHhu4MgY+G6rXAgbmjhuq10IDEgYWNjb3VudCBtYW5hZ2VyXHJcbiAgICAgKiAgKFTDqm4gY8O0bmcgdHksIHTDqm4g4bupbmcgZOG7pW5nLCAuLi4pXHJcbiAgICAgKiBAYXV0aG9yOiBDxrDhu51uZ1xyXG4gICAgICogQHNpbmNlOiAxNS0wMS0yMDIxXHJcbiAgICAgKiBAcGFyYW0gT2JqZWN0IHRow7RuZyB0aW4gxJHhu4thIGNo4buJXHJcbiAgICAgKiBAcmV0dXJuIFByb21pc2UgYWpheFxyXG4gICAgICogQHRocm93cyBFcnJvclxyXG4gICAgKi9cclxuICAgIHVwZGF0ZUFjY291bnRNYW5hZ2VyKGFjY291bnRNYW5hZ2VyLCBhY2NvdW50X21hbmFnZXJfaWQpe1xyXG4gICAgICAgIGxldCBhcGkgPSB0aGlzLmdldEFQSShcIkFQSV9VUERBVEVfQUNDT1VOVF9NQU5BR0VSU1wiLCB7XHJcbiAgICAgICAgICBfX0FDQ09VTlRfTUFOQUdFUl9JRF9fIDogYWNjb3VudF9tYW5hZ2VyX2lkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghYXBpKSB7XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodHJhbnMoXCJhY2NvdW50bWFuYWdlcjo6YWNjb3VudC1tYW5hZ2VyLmVycm9ycy5hcGlfbm90X2ZvdW5kXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXHJcbiAgICAgICAgICAgIFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGFwaSxcclxuICAgICAgICAgICAgYWNjb3VudE1hbmFnZXJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHRvZG86IEFwaSB4w7NhIGFjY291bnQgbWFuYWdlclxyXG4gICAgICogQHB1cnBvc2U6IFxyXG4gICAgICogLSBt4bulYyDEkcOtY2g6IGfhu41pIGzDqm4gYXBpIMSR4buDIHjDs2EgMSBhY2NvdW50IG1hbmFnZXJcclxuICAgICAqIEBhdXRob3I6IEPGsOG7nW5nXHJcbiAgICAgKiBAc2luY2U6IDE1LTAxLTIwMjFcclxuICAgICAqIEBwYXJhbSBPYmplY3QgdGjDtG5nIHRpbiDEkeG7i2EgY2jhu4lcclxuICAgICAqIEByZXR1cm4gUHJvbWlzZSBhamF4XHJcbiAgICAgKiBAdGhyb3dzIEVycm9yXHJcbiAgICAqL1xyXG4gICAgZGVsZXRlQWNjb3VudE1hbmFnZXIoYWNjb3VudE1hbmFnZXJJZCl7XHJcbiAgICAgICAgbGV0IGFwaSA9IHRoaXMuZ2V0QVBJKFwiQVBJX0RFTEVURV9BQ0NPVU5UX01BTkFHRVJTXCIsIHtcclxuICAgICAgICAgIF9fQUNDT1VOVF9NQU5BR0VSX0lEX18gOiBhY2NvdW50TWFuYWdlcklkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghYXBpKSB7XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodHJhbnMoXCJhY2NvdW50bWFuYWdlcjo6YWNjb3VudC1tYW5hZ2VyLmVycm9ycy5hcGlfbm90X2ZvdW5kXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgICAgICAgXCJERUxFVEVcIixcclxuICAgICAgICAgICAgYXBpLFxyXG4gICAgICAgICAgICBhY2NvdW50TWFuYWdlcklkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRNYW5hZ2VyQXBpO1xyXG4iLCJpbXBvcnQgQWNjb3VudE1hbmFnZXJBcGkgZnJvbSAnLi4vYWNjb3VudC1tYW5hZ2VyL0FjY291bnRNYW5hZ2VyQXBpJztcclxuXHJcbi8vIHNjb3BlXHJcbihmdW5jdGlvbiAoJCwgcGhwRGF0YSkge1xyXG5cclxuICBwaHBEYXRhID0gcGhwRGF0YSB8fCB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHRvZG86IENsYXNzIGhp4buDbiB0aOG7iyBi4bqjbmcgQWNjb3VudE1hbmFnZXJcclxuICAgKiBAcHVycG9zZTogXHJcbiAgICogLSBt4bulYyDEkcOtY2g6IGhp4buDbiB0aOG7iyBkYW5oIHPDoWNoIGPDoWMgQWNjb3VudE1hbmFnZXIgdsOgIHjhu60gbMO9IHPhu7Ega2nhu4duIG9uY2xpY2tcclxuICAgKiBAYXV0aG9yOiBDxrDhu51uZ1xyXG4gICAqIEBzaW5jZTogMTUtMDEtMjAyMVxyXG4gICAqIEBwYXJhbSBcclxuICAgKi9cclxuICAgY2xhc3MgQWNjb3VudE1hbmFnZURhdGFUYWJsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5BUEkgPSBuZXcgQWNjb3VudE1hbmFnZXJBcGkocGhwRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbzogaMOgbSBraOG7n2kgdOG6oW8gdsOgIGxvYWQgZOG7ryBsaeG7h3UgdsOgbyBkYXRhdGFibGVcclxuICAgICAqIEBwdXJwb3NlOlxyXG4gICAgICogLSBt4bulYyDEkcOtY2gga2jhu59pIHThuqFvIHbDoCBsb2FkIGThu68gbGnhu4d1IHbDoG8gZGF0YXRhYmxlLCBraOG7n2kgdOG6oW8gc+G7sSBraeG7h24gY2xpY2sgdsOgbyB0YWJsZVxyXG4gICAgICogQGF1dGhvcjogQ8aw4budbmdcclxuICAgICAqIEBzaW5jZTogMTYtMDEtMjAyMVxyXG4gICAgICogQHBhcmFtIHRhYmxlXHJcbiAgICAqL1xyXG4gICAgaW5pdERhdGFUYWJsZSgpIHtcclxuICAgICAgbGV0ICR0aGlzID0gdGhpcztcclxuICAgICAgLy9raOG7n2kgdOG6oW8gdsOgIGxvYWQgZOG7ryBsaeG7h3VcclxuICAgICAgbGV0IHRhYmxlID0gJChcIiNkYXRhdGFibGUtbGlzdC1hbGxcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBcInNjcm9sbFhcIjogdHJ1ZSxcclxuICAgICAgICBcInJlc3BvbnNpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgXCJQcm9jZXNzaW5nXCI6IHRydWUsXHJcbiAgICAgICAgXCJTZXJ2ZXJTaWRlXCI6IHRydWUsIFxyXG4gICAgICAgIFwic0FqYXhTb3VyY2VcIjogcGhwRGF0YVsnQVBJX0dFVF9BTExfQUNDT1VOVF9NQU5BR0VSUyddLFxyXG4gICAgICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAge2RhdGEgOidpZCd9LFxyXG4gICAgICAgIHtkYXRhIDonY29tcGFueV9uYW1lJ30sXHJcbiAgICAgICAge2RhdGEgOidkb21haW5fbmFtZSd9LFxyXG4gICAgICAgIHtkYXRhIDonYXBwX25hbWUnfSxcclxuICAgICAgICB7ZGF0YSA6J3N0YXJ0X2RhdGUnfSxcclxuICAgICAgICBdLFxyXG5cclxuICAgICAgICBcInBhZ2luZ1wiOiB0cnVlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHPhu7Ega2nhu4duIGNsaWNrIHbDoG8gcm93IGPhu6dhIHRhYmxlXHJcbiAgICAgICQoJyNkYXRhdGFibGUtbGlzdC1hbGwgdGJvZHknKS5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHRoaXMub25DbGlja1RhYmxlKHRhYmxlLCB0aGlzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbzogU+G7sSBraeG7h24gY2xpY2sgdsOgbyByb3cgdHJvbmcgdGFibGVcclxuICAgICAqIEBwdXJwb3NlOlxyXG4gICAgICogLSBt4bulYyDEkcOtY2gga2hpIGNsaWNrIHbDoG8gcm93IHRow6wgbG9hZCBjaHV54buDbiBoxrDhu5tuZyDEkeG6v24gdHJhbmcgZGV0YWlsIGPhu6dhIGlkIMSRw7NcclxuICAgICAqIEBhdXRob3I6IEPGsOG7nW5nXHJcbiAgICAgKiBAc2luY2U6IDE2LTAxLTIwMjFcclxuICAgICAqIEBwYXJhbSB0YWJsZVxyXG4gICAgKi9cclxuICAgIG9uQ2xpY2tUYWJsZSh0YWJsZSwgJHRoaXMpe1xyXG4gICAgICBcclxuICAgICAgaWYgKCQoJHRoaXMpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgJCgkdGhpcykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFibGUuJCgndHIuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICAkKCR0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9s4bqleSBpZCBj4bunYSByb3cgxJHhu4MgY2h1eeG7g24gaMaw4bubbmcgxJHhur9uIGRldGFpbFxyXG4gICAgICBsZXQgaWQgPSB0YWJsZS5yb3coJHRoaXMpLmRhdGEoKVsnaWQnXTtcclxuICAgICAgbGV0IGFwaSA9IHRoaXMuQVBJLmdldEFQSShcIldFQl9HRVRfQUNDT1VOVF9NQU5BR0VSU19CWV9JRFwiLCB7XHJcbiAgICAgICAgX19BQ0NPVU5UX01BTkFHRVJfSURfXyA6IGlkXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbG9jYXRpb24uaHJlZiA9IGFwaTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGRvY3VtZW50IHJlYWR5XHJcbiAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIGto4bufaSB04bqhbyBjbGFzc1xyXG4gICAgICBsZXQgYWNjb3VudE1hbmFnZURhdGFUYWJsZSA9IG5ldyBBY2NvdW50TWFuYWdlRGF0YVRhYmxlKCk7XHJcbiAgICAgIC8vIGto4bufaSBjaOG6oXkgaMOgbSBpbml0XHJcbiAgICAgIGFjY291bnRNYW5hZ2VEYXRhVGFibGUuaW5pdERhdGFUYWJsZSgpO1xyXG4gICAgfSk7XHJcblxyXG59LmJpbmQod2luZG93KSkoalF1ZXJ5LCB3aW5kb3cuUEhQX0RBVEEpOyIsIi8qKlxyXG4gKiBAdG9kbzogQ2xhc3MgcXXhuqNuIGzDvSBjw6FjIGFwaSBj4bunYSAxIGZvcm1cclxuICogQHB1cnBvc2U6XHJcbiAqIC0gbeG7pWMgxJHDrWNoOlxyXG4gKiAgICAgLSB04bqhbyAxIGJhc2UgY2xhc3MgY2hvIGPDoWMgZm9ybSB0aMOqbSwgY+G6rXAgbmjhuq10XHJcbiAqICAgICAgICAgIMSR4buDIGPDoWMgaMOgbSBoYXkgc+G7rSBk4bulbmcgxJHhu4MgbMOqbiBjbGFzcyBjaHVuZ1xyXG4gKiBAYXV0aG9yOiBDcm9jb1xyXG4gKiBAc2luY2U6IDAxLTA4LTIwMjBcclxuICogQHBhcmFtIGpRdWVyeSBlbGVtZW50XHJcbiAqIEBwYXJhbSBPYmplY3QgYXBpc1xyXG4gKiAtIGRhbmggc8OhY2ggY8OhYyBsaW5rIGFwaSB0aGVvIHTDqm5cclxuKi9cclxuY2xhc3MgQmFzZUFQSSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQVBJcyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5BUElzID0gQVBJcyB8fCB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0b2RvOiBIw6BtIGjhu5cgdHLhu6MgbOG6pXkgbGluayBBUEkgdOG7qyBvcHRpb25zIGPhu6dhIHRydXnhu4FuIHbDoG8gdOG7qyBwbHVnaW5cclxuICAgICAqIEBwdXJwb3NlOiBcclxuICAgICAqIC0gbeG7pWMgxJHDrWNoOiBWRCBtdeG7kW4gZ+G7jWkgYWpheCBs4bqleSBkYW5oIHPDoWNoIGFkZHJlc3MgY29tcG9uZW50XHJcbiAgICAgKiAgICAgIHRow6wgY+G6p24gY8OzIGxpbmsgxJHhu4MgZ+G7jWkgYWpheFxyXG4gICAgICogICAgICB0aMOsIGjDoG0gbsOgeSBz4bq9IGzhuqV5IGxpbmsgdOG7qyBvcHRpb25zIHJhXHJcbiAgICAgKiAgICAgIHbDoCByZXBsYWNlIGNodeG7l2kgbuG6v3UgY8OzIHJlcGxhY2VtZW50c1xyXG4gICAgICogICAgICAgICAgVkQ6IHRyb25nIHRyxrDhu51uZyBo4bujcCBsw6AgbGluayBhcGkgY2hpIHRp4bq/dCB0aMOsIGPhuqduIGPDsyBJRCB0csOqbiB1cmxcclxuICAgICAqIEBhdXRob3I6IENyb2NvXHJcbiAgICAgKiBAc2luY2U6IDI4LTA3LTIwMjBcclxuICAgICAqIEBwYXJhbSBzdHJpbmcgdMOqbiBhcGkgdHJvbmcgb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIE9iamVjdCBkw7luZyDEkeG7gyByZXBsYWNlIGPDoWMgZ2nDoSB0cuG7iyB2w6BvIHVybFxyXG4gICAgICogIFtrZXldID0+IHZhbHVlXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ3xudWxsXHJcbiAgICAqL1xyXG4gICAgZ2V0QVBJKG5hbWUsIHJlcGxhY2VtZW50cyA9IHt9KSB7XHJcblxyXG4gICAgICAgIGxldCBhcGlzID0gdGhpcy5BUElzIHx8IHt9O1xyXG4gICAgICAgIGxldCBhcGkgPSBhcGlzW25hbWVdO1xyXG5cclxuICAgICAgICBpZiAoIWFwaSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVwbGFjZW1lbnRzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHJlcGxhY2VtZW50cyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xyXG4gICAgICAgICAgICAgICAgYXBpID0gYXBpLnJlcGxhY2Uoa2V5LCByZXBsYWNlbWVudHNba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcGk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbyBow6BtIGfhu41pIGFqYXhcclxuICAgICAqIEBhdXRob3I6IETFqW5nXHJcbiAgICAgKiBAc2luY2U6IDAxLTA2LTIwMjBcclxuICAgICAqIEBpbnB1dFxyXG4gICAgICogbWV0aG9kIHBoxrDGoW5nIHRoxrDhu5tjIGPhu6dhIGFwaVxyXG4gICAgICogdXJsIMSRxrDhu51uZyBk4bqrbiBhcGlcclxuICAgICAqIGRhdGEgZOG7ryBsaeG7h3UgZ+G7rWkgbMOqbiBhcGlcclxuICAgICAqIGhlYWRlcnMgc2V0IHBhcmFtcyB0cm9uZyBoZWFkZXJzIGfhu61pIGzDqm4gQVBJXHJcbiAgICAgKiBvcHRpb25zIGPhuqV1IGjDrG5oIMSR4bq3YyBiaeG7h3QgbmfGsOG7nW5nIGTDuW5nIG114buRbiDEkcawYSB2w6AgaMOgbSBhamF4XHJcbiAgICAgKiBAZmxvdyBcclxuICAgICAqIEjDoG0gZ+G7jWkgbMOqbiBBUEkgYuG6sW5nIHBoxrDGoW5nIHRo4bupYyBhamF4XHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3QobWV0aG9kLCB1cmwsIGRhdGEgPSBudWxsLCBoZWFkZXJzID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG5cclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5oZWFkZXJzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUFQSTsiXSwic291cmNlUm9vdCI6IiJ9