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



var AccountManagerApi = /*#__PURE__*/function (_BaseApi) {
  _inherits(AccountManagerApi, _BaseApi);

  var _super = _createSuper(AccountManagerApi);

  function AccountManagerApi(APIs) {
    _classCallCheck(this, AccountManagerApi);

    return _super.call(this, APIs);
  }

  _createClass(AccountManagerApi, [{
    key: "createAccountManager",
    value: function createAccountManager(accountManager) {
      var api = this.getAPI("API_CREATE_ACCOUNT_MANAGERS");
      return this.request("POST", api, accountManager);
    }
  }, {
    key: "updateAccountManager",
    value: function updateAccountManager(accountManager, account_manager_id) {
      var api = this.getAPI("API_UPDATE_ACCOUNT_MANAGERS", {
        __ACCOUNT_MANAGER_ID__: account_manager_id
      });
      return this.request("PUT", api, accountManager);
    }
  }, {
    key: "deleteAccountManager",
    value: function deleteAccountManager(accountManagerId) {
      var api = this.getAPI("API_DELETE_ACCOUNT_MANAGERS", {
        __ACCOUNT_MANAGER_ID__: accountManagerId
      });
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


(function ($, phpData) {
  phpData = phpData || {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9hY2NvdW50LW1hbmFnZXIvQWNjb3VudE1hbmFnZXJBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9hY2NvdW50LW1hbmFnZXIvYWNjb3VudC1tYW5hZ2VyLWRhdGF0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9VSS9XRUIvQXNzZXRzL2pzL2luY2x1ZGVzL0Jhc2VBcGkuanMiXSwibmFtZXMiOlsiQWNjb3VudE1hbmFnZXJBcGkiLCJBUElzIiwiYWNjb3VudE1hbmFnZXIiLCJhcGkiLCJnZXRBUEkiLCJyZXF1ZXN0IiwiYWNjb3VudF9tYW5hZ2VyX2lkIiwiX19BQ0NPVU5UX01BTkFHRVJfSURfXyIsImFjY291bnRNYW5hZ2VySWQiLCJCYXNlQXBpIiwiJCIsInBocERhdGEiLCJBY2NvdW50TWFuYWdlRGF0YVRhYmxlIiwiQVBJIiwidGFibGUiLCJEYXRhVGFibGUiLCJkYXRhIiwidGhpc0FQSSIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaWQiLCJyb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJhY2NvdW50TWFuYWdlRGF0YVRhYmxlIiwiaW5pdERhdGFUYWJsZSIsImJpbmQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJQSFBfREFUQSIsIkJhc2VBUEkiLCJuYW1lIiwicmVwbGFjZW1lbnRzIiwiYXBpcyIsImtleXMiLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwia2V5IiwicmVwbGFjZSIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJvcHRpb25zIiwiYWpheCIsImRhdGFUeXBlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztR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bWFuYWdlci9hY2NvdW50LW1hbmFnZXIvYWNjb3VudC1tYW5hZ2VyLWRhdGF0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuLi9pbmNsdWRlcy9CYXNlQXBpJztcclxuXHJcbiAgY2xhc3MgQWNjb3VudE1hbmFnZXJBcGkgZXh0ZW5kcyBCYXNlQXBpe1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEFQSXMpIHtcclxuICAgICAgICBzdXBlcihBUElzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBY2NvdW50TWFuYWdlcihhY2NvdW50TWFuYWdlcil7XHJcbiAgICBcdGxldCBhcGkgPSB0aGlzLmdldEFQSShcIkFQSV9DUkVBVEVfQUNDT1VOVF9NQU5BR0VSU1wiKTtcclxuXHJcbiAgICBcdHJldHVybiB0aGlzLnJlcXVlc3QoXHJcbiAgICAgICAgICAgIFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBhcGksXHJcbiAgICAgICAgICAgIGFjY291bnRNYW5hZ2VyXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBY2NvdW50TWFuYWdlcihhY2NvdW50TWFuYWdlciwgYWNjb3VudF9tYW5hZ2VyX2lkKXtcclxuICAgICAgICBsZXQgYXBpID0gdGhpcy5nZXRBUEkoXCJBUElfVVBEQVRFX0FDQ09VTlRfTUFOQUdFUlNcIiwge1xyXG4gICAgICAgICAgX19BQ0NPVU5UX01BTkFHRVJfSURfXyA6IGFjY291bnRfbWFuYWdlcl9pZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICAgICAgICBcIlBVVFwiLFxyXG4gICAgICAgICAgICBhcGksXHJcbiAgICAgICAgICAgIGFjY291bnRNYW5hZ2VyXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVBY2NvdW50TWFuYWdlcihhY2NvdW50TWFuYWdlcklkKXtcclxuICAgICAgICBsZXQgYXBpID0gdGhpcy5nZXRBUEkoXCJBUElfREVMRVRFX0FDQ09VTlRfTUFOQUdFUlNcIiwge1xyXG4gICAgICAgICAgX19BQ0NPVU5UX01BTkFHRVJfSURfXyA6IGFjY291bnRNYW5hZ2VySWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgICAgICAgXCJERUxFVEVcIixcclxuICAgICAgICAgICAgYXBpLFxyXG4gICAgICAgICAgICBhY2NvdW50TWFuYWdlcklkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudE1hbmFnZXJBcGk7XHJcbiIsImltcG9ydCBBY2NvdW50TWFuYWdlckFwaSBmcm9tICcuLi9hY2NvdW50LW1hbmFnZXIvQWNjb3VudE1hbmFnZXJBcGknO1xyXG5cclxuKGZ1bmN0aW9uICgkLCBwaHBEYXRhKSB7XHJcbiAgICBcclxuICBwaHBEYXRhID0gcGhwRGF0YSB8fCB7fTtcclxuXHJcbiAgY2xhc3MgQWNjb3VudE1hbmFnZURhdGFUYWJsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5BUEkgPSBuZXcgQWNjb3VudE1hbmFnZXJBcGkocGhwRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdERhdGFUYWJsZSgpIHtcclxuICAgICBcclxuICAgICAgdmFyIHRhYmxlID0gJChcIiNkYXRhdGFibGUtbGlzdC1hbGxcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgXCJzY3JvbGxYXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwicmVzcG9uc2l2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJQcm9jZXNzaW5nXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiU2VydmVyU2lkZVwiOiB0cnVlLCBcclxuICAgICAgICAgICAgXCJzQWpheFNvdXJjZVwiOiBwaHBEYXRhWydBUElfR0VUX0FMTF9BQ0NPVU5UX01BTkFHRVJTJ10sXHJcbiAgICAgICAgICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA6J2lkJ30sXHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA6J2NvbXBhbnlfbmFtZSd9LFxyXG4gICAgICAgICAgICAgICAge2RhdGEgOidkb21haW5fbmFtZSd9LFxyXG4gICAgICAgICAgICAgICAge2RhdGEgOidhcHBfbmFtZSd9LFxyXG4gICAgICAgICAgICAgICAge2RhdGEgOidzdGFydF9kYXRlJ30sXHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICBcInBhZ2luZ1wiOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHRoaXNBUEkgPSB0aGlzLkFQSTtcclxuXHJcbiAgICAgICQoJyNkYXRhdGFibGUtbGlzdC1hbGwgdGJvZHknKS5vbignY2xpY2snLCAndHInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcclxuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhYmxlLiQoJ3RyLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGlkID0gdGFibGUucm93KHRoaXMpLmRhdGEoKVsnaWQnXTtcclxuICAgICAgICB2YXIgYXBpID0gdGhpc0FQSS5nZXRBUEkoXCJXRUJfR0VUX0FDQ09VTlRfTUFOQUdFUlNfQllfSURcIiwge1xyXG4gICAgICAgICAgX19BQ0NPVU5UX01BTkFHRVJfSURfXyA6IGlkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSBhcGk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBkb2N1bWVudCByZWFkeVxyXG4gICQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBraOG7n2kgdOG6oW8gY2xhc3NcclxuICAgICAgdmFyIGFjY291bnRNYW5hZ2VEYXRhVGFibGUgPSBuZXcgQWNjb3VudE1hbmFnZURhdGFUYWJsZSgpO1xyXG4gICAgICAvLyBraOG7n2kgY2jhuqF5IGjDoG0gaW5pdFxyXG4gICAgICBhY2NvdW50TWFuYWdlRGF0YVRhYmxlLmluaXREYXRhVGFibGUoKTtcclxuICB9KTtcclxufS5iaW5kKHdpbmRvdykpKGpRdWVyeSwgd2luZG93LlBIUF9EQVRBKTsiLCIvKipcclxuICogQHRvZG86IENsYXNzIHF14bqjbiBsw70gY8OhYyBhcGkgY+G7p2EgMSBmb3JtXHJcbiAqIEBwdXJwb3NlOlxyXG4gKiAtIG3hu6VjIMSRw61jaDpcclxuICogICAgIC0gdOG6oW8gMSBiYXNlIGNsYXNzIGNobyBjw6FjIGZvcm0gdGjDqm0sIGPhuq1wIG5o4bqtdFxyXG4gKiAgICAgICAgICDEkeG7gyBjw6FjIGjDoG0gaGF5IHPhu60gZOG7pW5nIMSR4buDIGzDqm4gY2xhc3MgY2h1bmdcclxuICogQGF1dGhvcjogQ3JvY29cclxuICogQHNpbmNlOiAwMS0wOC0yMDIwXHJcbiAqIEBwYXJhbSBqUXVlcnkgZWxlbWVudFxyXG4gKiBAcGFyYW0gT2JqZWN0IGFwaXNcclxuICogLSBkYW5oIHPDoWNoIGPDoWMgbGluayBhcGkgdGhlbyB0w6puXHJcbiovXHJcbmNsYXNzIEJhc2VBUEkge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEFQSXMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuQVBJcyA9IEFQSXMgfHwge307XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbzogSMOgbSBo4buXIHRy4bujIGzhuqV5IGxpbmsgQVBJIHThu6sgb3B0aW9ucyBj4bunYSB0cnV54buBbiB2w6BvIHThu6sgcGx1Z2luXHJcbiAgICAgKiBAcHVycG9zZTogXHJcbiAgICAgKiAtIG3hu6VjIMSRw61jaDogVkQgbXXhu5FuIGfhu41pIGFqYXggbOG6pXkgZGFuaCBzw6FjaCBhZGRyZXNzIGNvbXBvbmVudFxyXG4gICAgICogICAgICB0aMOsIGPhuqduIGPDsyBsaW5rIMSR4buDIGfhu41pIGFqYXhcclxuICAgICAqICAgICAgdGjDrCBow6BtIG7DoHkgc+G6vSBs4bqleSBsaW5rIHThu6sgb3B0aW9ucyByYVxyXG4gICAgICogICAgICB2w6AgcmVwbGFjZSBjaHXhu5dpIG7hur91IGPDsyByZXBsYWNlbWVudHNcclxuICAgICAqICAgICAgICAgIFZEOiB0cm9uZyB0csaw4budbmcgaOG7o3AgbMOgIGxpbmsgYXBpIGNoaSB0aeG6v3QgdGjDrCBj4bqnbiBjw7MgSUQgdHLDqm4gdXJsXHJcbiAgICAgKiBAYXV0aG9yOiBDcm9jb1xyXG4gICAgICogQHNpbmNlOiAyOC0wNy0yMDIwXHJcbiAgICAgKiBAcGFyYW0gc3RyaW5nIHTDqm4gYXBpIHRyb25nIG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSBPYmplY3QgZMO5bmcgxJHhu4MgcmVwbGFjZSBjw6FjIGdpw6EgdHLhu4sgdsOgbyB1cmxcclxuICAgICAqICBba2V5XSA9PiB2YWx1ZVxyXG4gICAgICogQHJldHVybiBzdHJpbmd8bnVsbFxyXG4gICAgKi9cclxuICAgIGdldEFQSShuYW1lLCByZXBsYWNlbWVudHMgPSB7fSkge1xyXG5cclxuICAgICAgICBsZXQgYXBpcyA9IHRoaXMuQVBJcyB8fCB7fTtcclxuICAgICAgICBsZXQgYXBpID0gYXBpc1tuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCFhcGkpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcGxhY2VtZW50cykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhyZXBsYWNlbWVudHMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcclxuICAgICAgICAgICAgICAgIGFwaSA9IGFwaS5yZXBsYWNlKGtleSwgcmVwbGFjZW1lbnRzW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXBpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHRvZG8gaMOgbSBn4buNaSBhamF4XHJcbiAgICAgKiBAYXV0aG9yOiBExaluZ1xyXG4gICAgICogQHNpbmNlOiAwMS0wNi0yMDIwXHJcbiAgICAgKiBAaW5wdXRcclxuICAgICAqIG1ldGhvZCBwaMawxqFuZyB0aMaw4bubYyBj4bunYSBhcGlcclxuICAgICAqIHVybCDEkcaw4budbmcgZOG6q24gYXBpXHJcbiAgICAgKiBkYXRhIGThu68gbGnhu4d1IGfhu61pIGzDqm4gYXBpXHJcbiAgICAgKiBoZWFkZXJzIHNldCBwYXJhbXMgdHJvbmcgaGVhZGVycyBn4butaSBsw6puIEFQSVxyXG4gICAgICogb3B0aW9ucyBj4bqldSBow6xuaCDEkeG6t2MgYmnhu4d0IG5nxrDhu51uZyBkw7luZyBtdeG7kW4gxJHGsGEgdsOgIGjDoG0gYWpheFxyXG4gICAgICogQGZsb3cgXHJcbiAgICAgKiBIw6BtIGfhu41pIGzDqm4gQVBJIGLhurFuZyBwaMawxqFuZyB0aOG7qWMgYWpheFxyXG4gICAgICovXHJcbiAgICByZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhID0gbnVsbCwgaGVhZGVycyA9IHt9LCBvcHRpb25zID0ge30pIHtcclxuXHJcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMgfHwge307XHJcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4uaGVhZGVyc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VBUEk7Il0sInNvdXJjZVJvb3QiOiIifQ==