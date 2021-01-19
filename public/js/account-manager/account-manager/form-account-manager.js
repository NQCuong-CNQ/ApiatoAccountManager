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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./UI/WEB/Assets/js/account-manager/form-account-manager.js":
/*!******************************************************************!*\
  !*** ./UI/WEB/Assets/js/account-manager/form-account-manager.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _account_manager_AccountManagerApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-manager/AccountManagerApi */ "./UI/WEB/Assets/js/account-manager/AccountManagerApi.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // scope

(function ($, phpData) {
  phpData = phpData || {};
  /**
   * @todo: Form thêm, cập nhật, xóa account manager
   * @purpose: 
   * - mục đích: tạo, cập nhật hoặc xóa các thông tin của account manager
   * @author: Cường
   * @since: 15-01-2021
   * @param jQuery form
  */

  var FormAccountManager = /*#__PURE__*/function () {
    function FormAccountManager() {
      _classCallCheck(this, FormAccountManager);

      this.API = new _account_manager_AccountManagerApi__WEBPACK_IMPORTED_MODULE_1__["default"](phpData);
    }
    /**
     * @todo: Sự kiện Create form
     * @purpose: 
     * - khi submit thì gọi lên API để tạo mới account manager
     * @author: Cường
     * @since: 15-01-2021
     * @param jQueryEvent
    */


    _createClass(FormAccountManager, [{
      key: "onCreate",
      value: function () {
        var _onCreate = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
          var formData;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.stopPropagation();
                  e.preventDefault();
                  formData = $('#form-submit').serialize() || {};
                  _context.next = 5;
                  return this.API.createAccountManager(formData);

                case 5:
                  Swal.fire({
                    icon: 'success',
                    title: "Đã thêm thành công!",
                    showConfirmButton: true,
                    timer: 1000
                  });

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function onCreate(_x) {
          return _onCreate.apply(this, arguments);
        }

        return onCreate;
      }()
    }, {
      key: "onUpdate",

      /**
       * @todo: Sự kiện Update form
       * @purpose: 
       * - khi submit thì gọi lên API để cập nhật account manager
       * @author: Cường
       * @since: 15-01-2021
       * @param jQueryEvent
      */
      value: function () {
        var _onUpdate = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
          var formData, account_manager_id;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  e.stopPropagation();
                  e.preventDefault();
                  formData = $('#form-submit').serialize() || {};
                  account_manager_id = phpData['ACCOUNT_MANAGER_ID'];
                  _context2.next = 6;
                  return this.API.updateAccountManager(formData, account_manager_id);

                case 6:
                  Swal.fire({
                    icon: 'success',
                    title: 'Đã cập nhật!',
                    showConfirmButton: true,
                    timer: 1000
                  });

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function onUpdate(_x2) {
          return _onUpdate.apply(this, arguments);
        }

        return onUpdate;
      }()
    }, {
      key: "onDelete",

      /**
       * @todo: Sự kiện Delete form
       * @purpose: 
       * - khi submit thì gọi lên API để xóa account manager
       * @author: Cường
       * @since: 15-01-2021
       * @param jQueryEvent
      */
      value: function onDelete(e) {
        var _this = this;

        e.stopPropagation();
        e.preventDefault();
        var account_manager_id = phpData['ACCOUNT_MANAGER_ID'];
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
          if (result.isConfirmed) {
            _this.API.deleteAccountManager(account_manager_id);

            Swal.fire({
              title: 'Deleted',
              text: "Đã xóa thành công.",
              icon: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            }).then(function (result) {
              if (result.isConfirmed) {
                location.href = phpData['WEB_ACCOUNT_MANAGERS_INDEX'];
              }
            });
          }
        });
      }
    }, {
      key: "initEventListeners",

      /**
       * @todo: Hàm khởi tạo các sự kiện trong form
       * @purpose: 
       * - mục đích:
       *      tập trung các sự kiện về 1 chỗ cho dễ quản lý
       * @author: Cường
       * @since: 15-01-2021
      */
      value: function initEventListeners() {
        //lưu ngữ cảnh của class để sử dụng lại trong func
        var self = this; // sự kiện bấm nút thêm mới

        $('#btn-addnew').click(function () {
          self.onCreate(event);
          self.validateInput();
        }); // sự kiện bấm nút xóa

        $('#btn-delete').click(function () {
          self.onDelete(event);
        }); // sự kiện bấm nút lưu

        $('#btn-update').click(function () {
          self.onUpdate(event);
          self.validateInput();
        });
        self.getRadioBtnValue();
      }
      /**
       * @todo: Hàm lấy giá trị của app_brand
       * @purpose: 
       * - mục đích:
       *      lấy giá trị của app_brand và set lên form trên giao diện
       *      do form::radio nên không thể tự lấy val được
       * @author: Cường
       * @since: 18-01-2021
      */

    }, {
      key: "getRadioBtnValue",
      value: function getRadioBtnValue() {
        var app_brand = phpData['APP_BRAND'];

        switch (app_brand) {
          case 'PMVE':
            $('#app_brand_pmv').prop('checked', true);
            break;

          case 'WEBSITE_PMVE':
            $('#app_brand_wpmv').prop('checked', true);
            break;

          case 'PMHANG':
            $('#app_brand_pmh').prop('checked', true);
            break;

          case 'TRACKING_PMHANG':
            $('#app_brand_tpmh').prop('checked', true);
            break;

          case 'NHAN_SU':
            $('#app_brand_ns').prop('checked', true);
            break;

          case 'MANUAL':
            $('#app_brand_m').prop('checked', true);
            break;
        }
      }
      /**
             * @todo: Hàm validate form
             * @purpose: 
             * - mục đích:
             *      kiểm tra field required nào chưa được nhập thì thực hiện thông báo
             *      thuộc tính required của input không dùng được do không dùng submit của form
             * @author: Cường
             * @since: 18-01-2021
            */

    }, {
      key: "validateInput",
      value: function validateInput() {
        if ($('#company_name').val() == '') {
          $('#company_name').tooltip('show');
          $('#company_name').addClass('required');
        }

        if ($('#domain_name').val() == '') {
          $('#domain_name').tooltip('show');
          $('#domain_name').addClass('required');
        }

        if ($('#base_url').val() == '') {
          $('#base_url').tooltip('show');
          $('#base_url').addClass('required');
        }
      }
    }]);

    return FormAccountManager;
  }();

  $(function () {
    // khởi tạo class
    var formAccountManager = new FormAccountManager(); // khởi chạy hàm init

    formAccountManager.initEventListeners();
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

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ 3:
/*!************************************************************************!*\
  !*** multi ./UI/WEB/Assets/js/account-manager/form-account-manager.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\ApiatoAccountManager\app\Containers\AccountManager\UI\WEB\Assets\js\account-manager\form-account-manager.js */"./UI/WEB/Assets/js/account-manager/form-account-manager.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9hY2NvdW50LW1hbmFnZXIvQWNjb3VudE1hbmFnZXJBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9hY2NvdW50LW1hbmFnZXIvZm9ybS1hY2NvdW50LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9pbmNsdWRlcy9CYXNlQXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIl0sIm5hbWVzIjpbIkFjY291bnRNYW5hZ2VyQXBpIiwiQVBJcyIsImFjY291bnRNYW5hZ2VyIiwiYXBpIiwiZ2V0QVBJIiwiRXJyb3IiLCJ0cmFucyIsInJlcXVlc3QiLCJhY2NvdW50X21hbmFnZXJfaWQiLCJfX0FDQ09VTlRfTUFOQUdFUl9JRF9fIiwiYWNjb3VudE1hbmFnZXJJZCIsIkJhc2VBcGkiLCIkIiwicGhwRGF0YSIsIkZvcm1BY2NvdW50TWFuYWdlciIsIkFQSSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwic2VyaWFsaXplIiwiY3JlYXRlQWNjb3VudE1hbmFnZXIiLCJTd2FsIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ1cGRhdGVBY2NvdW50TWFuYWdlciIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsImRlbGV0ZUFjY291bnRNYW5hZ2VyIiwibG9jYXRpb24iLCJocmVmIiwic2VsZiIsImNsaWNrIiwib25DcmVhdGUiLCJldmVudCIsInZhbGlkYXRlSW5wdXQiLCJvbkRlbGV0ZSIsIm9uVXBkYXRlIiwiZ2V0UmFkaW9CdG5WYWx1ZSIsImFwcF9icmFuZCIsInByb3AiLCJ2YWwiLCJ0b29sdGlwIiwiYWRkQ2xhc3MiLCJmb3JtQWNjb3VudE1hbmFnZXIiLCJpbml0RXZlbnRMaXN0ZW5lcnMiLCJiaW5kIiwid2luZG93IiwialF1ZXJ5IiwiUEhQX0RBVEEiLCJCYXNlQVBJIiwibmFtZSIsInJlcGxhY2VtZW50cyIsImFwaXMiLCJrZXlzIiwiT2JqZWN0IiwiaSIsImxlbmd0aCIsImtleSIsInJlcGxhY2UiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiaGVhZGVycyIsIm9wdGlvbnMiLCJhamF4IiwiZGF0YVR5cGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFF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QUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii9qcy9hY2NvdW50LW1hbmFnZXIvYWNjb3VudC1tYW5hZ2VyL2Zvcm0tYWNjb3VudC1tYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4uL2luY2x1ZGVzL0Jhc2VBcGknO1xyXG5cclxuLyoqXHJcbiAqIEB0b2RvOiBDbGFzcyBo4buXIHRy4bujIHF14bqjbiBsw70gY8OhYyBBUEkgduG7gSBhY2NvdW50IG1hbmFnZXJcclxuICogQGF1dGhvcjogQ8aw4budbmdcclxuICogQHNpbmNlOiAxNS0wMS0yMDIxXHJcbiAqIEBwYXJhbSBPYmplY3QgZGFuaCBzw6FjaCBjw6FjIGFwaVxyXG4qL1xyXG5jbGFzcyBBY2NvdW50TWFuYWdlckFwaSBleHRlbmRzIEJhc2VBcGl7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQVBJcykge1xyXG4gICAgICAgIHN1cGVyKEFQSXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHRvZG86IEjDoG0gaOG7lyB0cuG7oyBn4buNaSBBUEkgdGjDqm0gbeG7m2kgbeG7mXQgYWNjb3VudCBtYW5hZ2VyXHJcbiAgICAgKiBAcHVycG9zZTogXHJcbiAgICAgKiAtIG3hu6VjIMSRw61jaDpcclxuICAgICAqICAgICAgZ+G7jWkgbMOqbiBhcGkgxJHhu4MgdOG6oW8gbeG7m2kgMSBhZGRyZXNzIGNvbXBvbmVudCBcclxuICAgICAqIEBhdXRob3I6IEPGsOG7nW5nXHJcbiAgICAgKiBAc2luY2U6IDE1LTAxLTIwMjFcclxuICAgICAqIEBwYXJhbSBPYmplY3QgcGFyYW1ldGVyc1xyXG4gICAgICogQHJldHVybiBcclxuICAgICAqIEB0aHJvd3MgXHJcbiAgICAqL1xyXG4gICAgY3JlYXRlQWNjb3VudE1hbmFnZXIoYWNjb3VudE1hbmFnZXIpe1xyXG4gICAgXHRsZXQgYXBpID0gdGhpcy5nZXRBUEkoXCJBUElfQ1JFQVRFX0FDQ09VTlRfTUFOQUdFUlNcIik7XHJcblxyXG4gICAgICAgIGlmICghYXBpKSB7XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodHJhbnMoXCJhY2NvdW50bWFuYWdlcjo6YWNjb3VudC1tYW5hZ2VyLmVycm9ycy5hcGlfbm90X2ZvdW5kXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgXHRyZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICAgICAgICBcIlBPU1RcIixcclxuICAgICAgICAgICAgYXBpLFxyXG4gICAgICAgICAgICBhY2NvdW50TWFuYWdlclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbzogQXBpIGPhuq1wIG5o4bqtdCBhY2NvdW50IG1hbmFnZXJcclxuICAgICAqIEBwdXJwb3NlOiBcclxuICAgICAqIC0gbeG7pWMgxJHDrWNoOiBn4buNaSBsw6puIGFwaSDEkeG7gyBj4bqtcCBuaOG6rXQgMSBhY2NvdW50IG1hbmFnZXJcclxuICAgICAqICAoVMOqbiBjw7RuZyB0eSwgdMOqbiDhu6luZyBk4bulbmcsIC4uLilcclxuICAgICAqIEBhdXRob3I6IEPGsOG7nW5nXHJcbiAgICAgKiBAc2luY2U6IDE1LTAxLTIwMjFcclxuICAgICAqIEBwYXJhbSBPYmplY3QgdGjDtG5nIHRpbiDEkeG7i2EgY2jhu4lcclxuICAgICAqIEByZXR1cm4gUHJvbWlzZSBhamF4XHJcbiAgICAgKiBAdGhyb3dzIEVycm9yXHJcbiAgICAqL1xyXG4gICAgdXBkYXRlQWNjb3VudE1hbmFnZXIoYWNjb3VudE1hbmFnZXIsIGFjY291bnRfbWFuYWdlcl9pZCl7XHJcbiAgICAgICAgbGV0IGFwaSA9IHRoaXMuZ2V0QVBJKFwiQVBJX1VQREFURV9BQ0NPVU5UX01BTkFHRVJTXCIsIHtcclxuICAgICAgICAgIF9fQUNDT1VOVF9NQU5BR0VSX0lEX18gOiBhY2NvdW50X21hbmFnZXJfaWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhcGkpIHtcclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0cmFucyhcImFjY291bnRtYW5hZ2VyOjphY2NvdW50LW1hbmFnZXIuZXJyb3JzLmFwaV9ub3RfZm91bmRcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgICAgICAgXCJQVVRcIixcclxuICAgICAgICAgICAgYXBpLFxyXG4gICAgICAgICAgICBhY2NvdW50TWFuYWdlclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbzogQXBpIHjDs2EgYWNjb3VudCBtYW5hZ2VyXHJcbiAgICAgKiBAcHVycG9zZTogXHJcbiAgICAgKiAtIG3hu6VjIMSRw61jaDogZ+G7jWkgbMOqbiBhcGkgxJHhu4MgeMOzYSAxIGFjY291bnQgbWFuYWdlclxyXG4gICAgICogQGF1dGhvcjogQ8aw4budbmdcclxuICAgICAqIEBzaW5jZTogMTUtMDEtMjAyMVxyXG4gICAgICogQHBhcmFtIE9iamVjdCB0aMO0bmcgdGluIMSR4buLYSBjaOG7iVxyXG4gICAgICogQHJldHVybiBQcm9taXNlIGFqYXhcclxuICAgICAqIEB0aHJvd3MgRXJyb3JcclxuICAgICovXHJcbiAgICBkZWxldGVBY2NvdW50TWFuYWdlcihhY2NvdW50TWFuYWdlcklkKXtcclxuICAgICAgICBsZXQgYXBpID0gdGhpcy5nZXRBUEkoXCJBUElfREVMRVRFX0FDQ09VTlRfTUFOQUdFUlNcIiwge1xyXG4gICAgICAgICAgX19BQ0NPVU5UX01BTkFHRVJfSURfXyA6IGFjY291bnRNYW5hZ2VySWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhcGkpIHtcclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0cmFucyhcImFjY291bnRtYW5hZ2VyOjphY2NvdW50LW1hbmFnZXIuZXJyb3JzLmFwaV9ub3RfZm91bmRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICAgICAgICBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBhcGksXHJcbiAgICAgICAgICAgIGFjY291bnRNYW5hZ2VySWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudE1hbmFnZXJBcGk7XHJcbiIsImltcG9ydCBBY2NvdW50TWFuYWdlckFwaSBmcm9tICcuLi9hY2NvdW50LW1hbmFnZXIvQWNjb3VudE1hbmFnZXJBcGknO1xyXG5cclxuLy8gc2NvcGVcclxuKGZ1bmN0aW9uICgkLCBwaHBEYXRhKSB7XHJcblxyXG4gICAgcGhwRGF0YSA9IHBocERhdGEgfHwge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbzogRm9ybSB0aMOqbSwgY+G6rXAgbmjhuq10LCB4w7NhIGFjY291bnQgbWFuYWdlclxyXG4gICAgICogQHB1cnBvc2U6IFxyXG4gICAgICogLSBt4bulYyDEkcOtY2g6IHThuqFvLCBj4bqtcCBuaOG6rXQgaG/hurdjIHjDs2EgY8OhYyB0aMO0bmcgdGluIGPhu6dhIGFjY291bnQgbWFuYWdlclxyXG4gICAgICogQGF1dGhvcjogQ8aw4budbmdcclxuICAgICAqIEBzaW5jZTogMTUtMDEtMjAyMVxyXG4gICAgICogQHBhcmFtIGpRdWVyeSBmb3JtXHJcbiAgICAqL1xyXG5cdGNsYXNzIEZvcm1BY2NvdW50TWFuYWdlcntcclxuXHRcdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRcdHRoaXMuQVBJID0gbmV3IEFjY291bnRNYW5hZ2VyQXBpKHBocERhdGEpO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdG9kbzogU+G7sSBraeG7h24gQ3JlYXRlIGZvcm1cclxuICAgICAgICAgKiBAcHVycG9zZTogXHJcbiAgICAgICAgICogLSBraGkgc3VibWl0IHRow6wgZ+G7jWkgbMOqbiBBUEkgxJHhu4MgdOG6oW8gbeG7m2kgYWNjb3VudCBtYW5hZ2VyXHJcbiAgICAgICAgICogQGF1dGhvcjogQ8aw4budbmdcclxuICAgICAgICAgKiBAc2luY2U6IDE1LTAxLTIwMjFcclxuICAgICAgICAgKiBAcGFyYW0galF1ZXJ5RXZlbnRcclxuICAgICAgICAqL1xyXG5cdFx0YXN5bmMgb25DcmVhdGUoZSkge1xyXG5cclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdCAgXHRsZXQgZm9ybURhdGEgPSAkKCcjZm9ybS1zdWJtaXQnKS5zZXJpYWxpemUoKSB8fCB7fTtcclxuXHJcblx0XHQgIFx0YXdhaXQgdGhpcy5BUEkuY3JlYXRlQWNjb3VudE1hbmFnZXIoZm9ybURhdGEpO1xyXG5cclxuXHQgXHQgICAgU3dhbC5maXJlKHtcclxuXHRcdFx0ICBpY29uOiAnc3VjY2VzcycsXHJcblx0XHRcdCAgdGl0bGU6IFwixJDDoyB0aMOqbSB0aMOgbmggY8O0bmchXCIsXHJcblx0XHRcdCAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXHJcblx0XHRcdCAgdGltZXI6IDEwMDBcclxuXHRcdFx0fSlcclxuXHQgIFx0fTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHRvZG86IFPhu7Ega2nhu4duIFVwZGF0ZSBmb3JtXHJcbiAgICAgICAgICogQHB1cnBvc2U6IFxyXG4gICAgICAgICAqIC0ga2hpIHN1Ym1pdCB0aMOsIGfhu41pIGzDqm4gQVBJIMSR4buDIGPhuq1wIG5o4bqtdCBhY2NvdW50IG1hbmFnZXJcclxuICAgICAgICAgKiBAYXV0aG9yOiBDxrDhu51uZ1xyXG4gICAgICAgICAqIEBzaW5jZTogMTUtMDEtMjAyMVxyXG4gICAgICAgICAqIEBwYXJhbSBqUXVlcnlFdmVudFxyXG4gICAgICAgICovXHJcblx0ICBcdGFzeW5jIG9uVXBkYXRlKGUpIHtcclxuXHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQgIFx0bGV0IGZvcm1EYXRhID0gJCgnI2Zvcm0tc3VibWl0Jykuc2VyaWFsaXplKCkgfHwge307XHJcblx0XHQgIFx0bGV0IGFjY291bnRfbWFuYWdlcl9pZCA9IHBocERhdGFbJ0FDQ09VTlRfTUFOQUdFUl9JRCddO1xyXG5cclxuXHRcdCAgXHRhd2FpdCB0aGlzLkFQSS51cGRhdGVBY2NvdW50TWFuYWdlcihmb3JtRGF0YSwgYWNjb3VudF9tYW5hZ2VyX2lkKTtcclxuXHJcblx0IFx0ICAgIFN3YWwuZmlyZSh7XHJcblx0XHRcdCAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHQgIHRpdGxlOiAnxJDDoyBj4bqtcCBuaOG6rXQhJyxcclxuXHRcdFx0ICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcclxuXHRcdFx0ICB0aW1lcjogMTAwMFxyXG5cdFx0XHR9KVxyXG5cdCAgXHR9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdG9kbzogU+G7sSBraeG7h24gRGVsZXRlIGZvcm1cclxuICAgICAgICAgKiBAcHVycG9zZTogXHJcbiAgICAgICAgICogLSBraGkgc3VibWl0IHRow6wgZ+G7jWkgbMOqbiBBUEkgxJHhu4MgeMOzYSBhY2NvdW50IG1hbmFnZXJcclxuICAgICAgICAgKiBAYXV0aG9yOiBDxrDhu51uZ1xyXG4gICAgICAgICAqIEBzaW5jZTogMTUtMDEtMjAyMVxyXG4gICAgICAgICAqIEBwYXJhbSBqUXVlcnlFdmVudFxyXG4gICAgICAgICovXHJcblx0ICBcdG9uRGVsZXRlKGUpIHtcclxuXHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQgIFx0bGV0IGFjY291bnRfbWFuYWdlcl9pZCA9IHBocERhdGFbJ0FDQ09VTlRfTUFOQUdFUl9JRCddO1xyXG5cclxuXHQgXHQgICAgU3dhbC5maXJlKHtcclxuXHRcdFx0ICB0aXRsZTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG5cdFx0XHQgIHRleHQ6IFwiWW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhXCIsXHJcblx0XHRcdCAgaWNvbjogJ3dhcm5pbmcnLFxyXG5cdFx0XHQgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcblx0XHRcdCAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXHJcblx0XHRcdCAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcclxuXHRcdFx0ICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgZGVsZXRlIGl0ISdcclxuXHJcblx0XHRcdH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHQgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuXHJcblx0XHRcdFx0dGhpcy5BUEkuZGVsZXRlQWNjb3VudE1hbmFnZXIoYWNjb3VudF9tYW5hZ2VyX2lkKTtcclxuXHJcblx0XHRcdCAgICBTd2FsLmZpcmUoe1xyXG5cdFx0XHRcdCAgdGl0bGU6ICdEZWxldGVkJyxcclxuXHRcdFx0XHQgIHRleHQ6IFwixJDDoyB4w7NhIHRow6BuaCBjw7RuZy5cIixcclxuXHRcdFx0XHQgIGljb246ICdzdWNjZXNzJyxcclxuXHRcdFx0XHQgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxyXG5cdFx0XHRcdCAgY29uZmlybUJ1dHRvblRleHQ6ICdPSydcclxuXHJcblx0XHRcdFx0fSkudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0ICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcblxyXG5cdFx0XHRcdCAgICBsb2NhdGlvbi5ocmVmID0gcGhwRGF0YVsnV0VCX0FDQ09VTlRfTUFOQUdFUlNfSU5ERVgnXTtcclxuXHRcdFx0XHQgIH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQgIH1cclxuXHRcdFx0fSlcclxuXHQgIFx0fTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHRvZG86IEjDoG0ga2jhu59pIHThuqFvIGPDoWMgc+G7sSBraeG7h24gdHJvbmcgZm9ybVxyXG4gICAgICAgICAqIEBwdXJwb3NlOiBcclxuICAgICAgICAgKiAtIG3hu6VjIMSRw61jaDpcclxuICAgICAgICAgKiAgICAgIHThuq1wIHRydW5nIGPDoWMgc+G7sSBraeG7h24gduG7gSAxIGNo4buXIGNobyBk4buFIHF14bqjbiBsw71cclxuICAgICAgICAgKiBAYXV0aG9yOiBDxrDhu51uZ1xyXG4gICAgICAgICAqIEBzaW5jZTogMTUtMDEtMjAyMVxyXG4gICAgICAgICovXHJcblx0ICBcdGluaXRFdmVudExpc3RlbmVycygpe1xyXG5cdCAgXHRcdC8vbMawdSBuZ+G7ryBj4bqjbmggY+G7p2EgY2xhc3MgxJHhu4Mgc+G7rSBk4bulbmcgbOG6oWkgdHJvbmcgZnVuY1xyXG5cdCAgXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHQgIFx0XHQvLyBz4buxIGtp4buHbiBi4bqlbSBuw7p0IHRow6ptIG3hu5tpXHJcblx0XHRcdCQoJyNidG4tYWRkbmV3JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAgXHRzZWxmLm9uQ3JlYXRlKGV2ZW50KTtcclxuXHRcdFx0ICBcdHNlbGYudmFsaWRhdGVJbnB1dCgpO1xyXG5cdFx0XHR9KTtcclxuXHQgIFx0XHQvLyBz4buxIGtp4buHbiBi4bqlbSBuw7p0IHjDs2FcclxuXHRcdFx0JCgnI2J0bi1kZWxldGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0ICBcdHNlbGYub25EZWxldGUoZXZlbnQpO1xyXG5cdFx0XHR9KTtcclxuXHQgIFx0XHQvLyBz4buxIGtp4buHbiBi4bqlbSBuw7p0IGzGsHVcclxuXHRcdFx0JCgnI2J0bi11cGRhdGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0ICBcdHNlbGYub25VcGRhdGUoZXZlbnQpO1xyXG5cdFx0XHQgIFx0c2VsZi52YWxpZGF0ZUlucHV0KCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2VsZi5nZXRSYWRpb0J0blZhbHVlKCk7XHJcblx0XHR9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0b2RvOiBIw6BtIGzhuqV5IGdpw6EgdHLhu4sgY+G7p2EgYXBwX2JyYW5kXHJcbiAgICAgICAgICogQHB1cnBvc2U6IFxyXG4gICAgICAgICAqIC0gbeG7pWMgxJHDrWNoOlxyXG4gICAgICAgICAqICAgICAgbOG6pXkgZ2nDoSB0cuG7iyBj4bunYSBhcHBfYnJhbmQgdsOgIHNldCBsw6puIGZvcm0gdHLDqm4gZ2lhbyBkaeG7h25cclxuICAgICAgICAgKiAgICAgIGRvIGZvcm06OnJhZGlvIG7Dqm4ga2jDtG5nIHRo4buDIHThu7EgbOG6pXkgdmFsIMSRxrDhu6NjXHJcbiAgICAgICAgICogQGF1dGhvcjogQ8aw4budbmdcclxuICAgICAgICAgKiBAc2luY2U6IDE4LTAxLTIwMjFcclxuICAgICAgICAqL1xyXG5cdFx0Z2V0UmFkaW9CdG5WYWx1ZSgpe1xyXG5cdFx0XHR2YXIgYXBwX2JyYW5kID0gcGhwRGF0YVsnQVBQX0JSQU5EJ107XHJcblxyXG5cdCAgICAgICAgc3dpdGNoIChhcHBfYnJhbmQpe1xyXG5cdCAgICAgICAgICBjYXNlICdQTVZFJzogJCgnI2FwcF9icmFuZF9wbXYnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7IFxyXG5cdCAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgY2FzZSAnV0VCU0lURV9QTVZFJzogJCgnI2FwcF9icmFuZF93cG12JykucHJvcCgnY2hlY2tlZCcsIHRydWUpOyBcclxuXHQgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgIGNhc2UgJ1BNSEFORyc6ICQoJyNhcHBfYnJhbmRfcG1oJykucHJvcCgnY2hlY2tlZCcsIHRydWUpOyBcclxuXHQgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgIGNhc2UgJ1RSQUNLSU5HX1BNSEFORyc6ICQoJyNhcHBfYnJhbmRfdHBtaCcpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTsgXHJcblx0ICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICBjYXNlICdOSEFOX1NVJzogJCgnI2FwcF9icmFuZF9ucycpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTsgXHJcblx0ICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICBjYXNlICdNQU5VQUwnOiAkKCcjYXBwX2JyYW5kX20nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7IFxyXG5cdCAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgIH1cclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuICAgICAgICAgKiBAdG9kbzogSMOgbSB2YWxpZGF0ZSBmb3JtXHJcbiAgICAgICAgICogQHB1cnBvc2U6IFxyXG4gICAgICAgICAqIC0gbeG7pWMgxJHDrWNoOlxyXG4gICAgICAgICAqICAgICAga2nhu4NtIHRyYSBmaWVsZCByZXF1aXJlZCBuw6BvIGNoxrBhIMSRxrDhu6NjIG5o4bqtcCB0aMOsIHRo4buxYyBoaeG7h24gdGjDtG5nIGLDoW9cclxuICAgICAgICAgKiAgICAgIHRodeG7mWMgdMOtbmggcmVxdWlyZWQgY+G7p2EgaW5wdXQga2jDtG5nIGTDuW5nIMSRxrDhu6NjIGRvIGtow7RuZyBkw7luZyBzdWJtaXQgY+G7p2EgZm9ybVxyXG4gICAgICAgICAqIEBhdXRob3I6IEPGsOG7nW5nXHJcbiAgICAgICAgICogQHNpbmNlOiAxOC0wMS0yMDIxXHJcbiAgICAgICAgKi9cclxuXHRcdHZhbGlkYXRlSW5wdXQoKXtcclxuXHRcdFx0aWYoJCgnI2NvbXBhbnlfbmFtZScpLnZhbCgpPT0nJyl7XHJcblx0XHRcdFx0JCgnI2NvbXBhbnlfbmFtZScpLnRvb2x0aXAoJ3Nob3cnKTtcclxuXHRcdFx0XHQkKCcjY29tcGFueV9uYW1lJykuYWRkQ2xhc3MoJ3JlcXVpcmVkJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCQoJyNkb21haW5fbmFtZScpLnZhbCgpPT0nJyl7XHJcblx0XHRcdFx0JCgnI2RvbWFpbl9uYW1lJykudG9vbHRpcCgnc2hvdycpO1xyXG5cdFx0XHRcdCQoJyNkb21haW5fbmFtZScpLmFkZENsYXNzKCdyZXF1aXJlZCcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZigkKCcjYmFzZV91cmwnKS52YWwoKT09Jycpe1xyXG5cdFx0XHRcdCQoJyNiYXNlX3VybCcpLnRvb2x0aXAoJ3Nob3cnKTtcclxuXHRcdFx0XHQkKCcjYmFzZV91cmwnKS5hZGRDbGFzcygncmVxdWlyZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICBcdC8vIGto4bufaSB04bqhbyBjbGFzc1xyXG4gICAgICAgIGxldCBmb3JtQWNjb3VudE1hbmFnZXIgPSBuZXcgRm9ybUFjY291bnRNYW5hZ2VyKCk7XHJcbiAgICAgICAgLy8ga2jhu59pIGNo4bqheSBow6BtIGluaXRcclxuICAgICAgICBmb3JtQWNjb3VudE1hbmFnZXIuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG59LmJpbmQod2luZG93KSkoalF1ZXJ5LCB3aW5kb3cuUEhQX0RBVEEpO1xyXG5cclxuIiwiLyoqXHJcbiAqIEB0b2RvOiBDbGFzcyBxdeG6o24gbMO9IGPDoWMgYXBpIGPhu6dhIDEgZm9ybVxyXG4gKiBAcHVycG9zZTpcclxuICogLSBt4bulYyDEkcOtY2g6XHJcbiAqICAgICAtIHThuqFvIDEgYmFzZSBjbGFzcyBjaG8gY8OhYyBmb3JtIHRow6ptLCBj4bqtcCBuaOG6rXRcclxuICogICAgICAgICAgxJHhu4MgY8OhYyBow6BtIGhheSBz4butIGThu6VuZyDEkeG7gyBsw6puIGNsYXNzIGNodW5nXHJcbiAqIEBhdXRob3I6IENyb2NvXHJcbiAqIEBzaW5jZTogMDEtMDgtMjAyMFxyXG4gKiBAcGFyYW0galF1ZXJ5IGVsZW1lbnRcclxuICogQHBhcmFtIE9iamVjdCBhcGlzXHJcbiAqIC0gZGFuaCBzw6FjaCBjw6FjIGxpbmsgYXBpIHRoZW8gdMOqblxyXG4qL1xyXG5jbGFzcyBCYXNlQVBJIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihBUElzID0ge30pIHtcclxuICAgICAgICB0aGlzLkFQSXMgPSBBUElzIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHRvZG86IEjDoG0gaOG7lyB0cuG7oyBs4bqleSBsaW5rIEFQSSB04burIG9wdGlvbnMgY+G7p2EgdHJ1eeG7gW4gdsOgbyB04burIHBsdWdpblxyXG4gICAgICogQHB1cnBvc2U6IFxyXG4gICAgICogLSBt4bulYyDEkcOtY2g6IFZEIG114buRbiBn4buNaSBhamF4IGzhuqV5IGRhbmggc8OhY2ggYWRkcmVzcyBjb21wb25lbnRcclxuICAgICAqICAgICAgdGjDrCBj4bqnbiBjw7MgbGluayDEkeG7gyBn4buNaSBhamF4XHJcbiAgICAgKiAgICAgIHRow6wgaMOgbSBuw6B5IHPhur0gbOG6pXkgbGluayB04burIG9wdGlvbnMgcmFcclxuICAgICAqICAgICAgdsOgIHJlcGxhY2UgY2h14buXaSBu4bq/dSBjw7MgcmVwbGFjZW1lbnRzXHJcbiAgICAgKiAgICAgICAgICBWRDogdHJvbmcgdHLGsOG7nW5nIGjhu6NwIGzDoCBsaW5rIGFwaSBjaGkgdGnhur90IHRow6wgY+G6p24gY8OzIElEIHRyw6puIHVybFxyXG4gICAgICogQGF1dGhvcjogQ3JvY29cclxuICAgICAqIEBzaW5jZTogMjgtMDctMjAyMFxyXG4gICAgICogQHBhcmFtIHN0cmluZyB0w6puIGFwaSB0cm9uZyBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0gT2JqZWN0IGTDuW5nIMSR4buDIHJlcGxhY2UgY8OhYyBnacOhIHRy4buLIHbDoG8gdXJsXHJcbiAgICAgKiAgW2tleV0gPT4gdmFsdWVcclxuICAgICAqIEByZXR1cm4gc3RyaW5nfG51bGxcclxuICAgICovXHJcbiAgICBnZXRBUEkobmFtZSwgcmVwbGFjZW1lbnRzID0ge30pIHtcclxuXHJcbiAgICAgICAgbGV0IGFwaXMgPSB0aGlzLkFQSXMgfHwge307XHJcbiAgICAgICAgbGV0IGFwaSA9IGFwaXNbbmFtZV07XHJcblxyXG4gICAgICAgIGlmICghYXBpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXBsYWNlbWVudHMpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMocmVwbGFjZW1lbnRzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgICAgICAgICBhcGkgPSBhcGkucmVwbGFjZShrZXksIHJlcGxhY2VtZW50c1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFwaTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0b2RvIGjDoG0gZ+G7jWkgYWpheFxyXG4gICAgICogQGF1dGhvcjogRMWpbmdcclxuICAgICAqIEBzaW5jZTogMDEtMDYtMjAyMFxyXG4gICAgICogQGlucHV0XHJcbiAgICAgKiBtZXRob2QgcGjGsMahbmcgdGjGsOG7m2MgY+G7p2EgYXBpXHJcbiAgICAgKiB1cmwgxJHGsOG7nW5nIGThuqtuIGFwaVxyXG4gICAgICogZGF0YSBk4buvIGxp4buHdSBn4butaSBsw6puIGFwaVxyXG4gICAgICogaGVhZGVycyBzZXQgcGFyYW1zIHRyb25nIGhlYWRlcnMgZ+G7rWkgbMOqbiBBUElcclxuICAgICAqIG9wdGlvbnMgY+G6pXUgaMOsbmggxJHhurdjIGJp4buHdCBuZ8aw4budbmcgZMO5bmcgbXXhu5FuIMSRxrBhIHbDoCBow6BtIGFqYXhcclxuICAgICAqIEBmbG93IFxyXG4gICAgICogSMOgbSBn4buNaSBsw6puIEFQSSBi4bqxbmcgcGjGsMahbmcgdGjhu6ljIGFqYXhcclxuICAgICAqL1xyXG4gICAgcmVxdWVzdChtZXRob2QsIHVybCwgZGF0YSA9IG51bGwsIGhlYWRlcnMgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XHJcblxyXG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzIHx8IHt9O1xyXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLmhlYWRlcnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlQVBJOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XHJcbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICovXHJcblxyXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xyXG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcclxuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cclxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xyXG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XHJcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcclxuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xyXG5cclxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYmpba2V5XTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXHJcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcclxuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxyXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XHJcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xyXG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XHJcblxyXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxyXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxyXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBnZW5lcmF0b3I7XHJcbiAgfVxyXG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XHJcblxyXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxyXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxyXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxyXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcclxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXHJcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xyXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXHJcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXHJcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxyXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cclxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcclxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcclxuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xyXG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XHJcblxyXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcclxuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXHJcbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcclxuXHJcbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXHJcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXHJcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcclxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XHJcbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cclxuXHJcbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxyXG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXHJcbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XHJcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xyXG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcclxuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcclxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXHJcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcclxuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXHJcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXHJcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xyXG4gIH1cclxuXHJcbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cclxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcclxuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xyXG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XHJcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXHJcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcclxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxyXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXHJcbiAgKTtcclxuXHJcbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcclxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxyXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcclxuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xyXG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XHJcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XHJcbiAgICByZXR1cm4gY3RvclxyXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XHJcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxyXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cclxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcclxuICAgICAgOiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcclxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcclxuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xyXG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcclxuICAgIH1cclxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcclxuICAgIHJldHVybiBnZW5GdW47XHJcbiAgfTtcclxuXHJcbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXHJcbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcclxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXHJcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cclxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XHJcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcclxuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xyXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcclxuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcclxuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXHJcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcclxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxyXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xyXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxyXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XHJcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxyXG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcclxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcclxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXHJcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cclxuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcclxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xyXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcclxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xyXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcclxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxyXG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cclxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcclxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxyXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cclxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXHJcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcclxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxyXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcclxuICB9XHJcblxyXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XHJcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XHJcblxyXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcclxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcclxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cclxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XHJcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xyXG5cclxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXHJcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxyXG4gICAgICBQcm9taXNlSW1wbFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXHJcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXHJcbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xyXG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICB0aHJvdyBhcmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxyXG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcclxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XHJcblxyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XHJcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XHJcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcclxuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcclxuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xyXG5cclxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XHJcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XHJcbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXHJcbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxyXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXHJcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcclxuXHJcbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcclxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXHJcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXHJcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxyXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxyXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxyXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcclxuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XHJcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XHJcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXHJcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG5cclxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxyXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxyXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xyXG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxyXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cclxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XHJcblxyXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcclxuXHJcbiAgICBpZiAoISBpbmZvKSB7XHJcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xyXG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbmZvLmRvbmUpIHtcclxuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcclxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cclxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XHJcblxyXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXHJcbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XHJcblxyXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcclxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxyXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxyXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcclxuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcclxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxyXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcclxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxyXG4gICAgICByZXR1cm4gaW5mbztcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxyXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cclxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgfVxyXG5cclxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxyXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cclxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xyXG5cclxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcclxuXHJcbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcclxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxyXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXHJcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXHJcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXHJcbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcclxuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XHJcblxyXG4gICAgaWYgKDEgaW4gbG9jcykge1xyXG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKDIgaW4gbG9jcykge1xyXG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcclxuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcclxuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xyXG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xyXG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XHJcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xyXG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXHJcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXHJcbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXHJcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xyXG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xyXG4gICAgdGhpcy5yZXNldCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xyXG4gICAgdmFyIGtleXMgPSBbXTtcclxuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcclxuICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICBrZXlzLnJldmVyc2UoKTtcclxuXHJcbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxyXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cclxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcclxuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xyXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcclxuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcclxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcclxuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXHJcbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XHJcbiAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcclxuICAgIGlmIChpdGVyYWJsZSkge1xyXG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XHJcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xyXG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gaXRlcmFibGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xyXG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XHJcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xyXG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXHJcbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XHJcbiAgfVxyXG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xyXG5cclxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xyXG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XHJcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcclxuXHJcbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xyXG4gICAgICB0aGlzLnByZXYgPSAwO1xyXG4gICAgICB0aGlzLm5leHQgPSAwO1xyXG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xyXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxyXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XHJcblxyXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xyXG5cclxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxyXG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxyXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXHJcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xyXG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcclxuXHJcbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XHJcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XHJcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcclxuICAgICAgICB0aHJvdyBleGNlcHRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XHJcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XHJcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcclxuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XHJcblxyXG4gICAgICAgIGlmIChjYXVnaHQpIHtcclxuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXHJcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcclxuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXHJcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cclxuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXHJcbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcclxuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xyXG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xyXG5cclxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxyXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxyXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxyXG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcclxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXHJcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXHJcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxyXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xyXG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XHJcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XHJcblxyXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcclxuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcclxuICAgIH0sXHJcblxyXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcclxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxyXG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xyXG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcclxuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xyXG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcclxuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9LFxyXG5cclxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcclxuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xyXG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XHJcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcclxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xyXG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0aHJvd247XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cclxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XHJcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XHJcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXHJcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcclxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcclxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXHJcbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcclxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcclxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcclxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxyXG4gIHJldHVybiBleHBvcnRzO1xyXG5cclxufShcclxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xyXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XHJcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxyXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXHJcbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cclxuKSk7XHJcblxyXG50cnkge1xyXG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XHJcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XHJcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcclxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcclxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcclxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcclxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcclxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxyXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXHJcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXHJcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXHJcbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9