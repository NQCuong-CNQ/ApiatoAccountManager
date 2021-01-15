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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ 2:
/*!*********************************************************************!*\
  !*** multi ./UI/WEB/Assets/js/account-manager/AccountManagerApi.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\ApiatoAccountManager\app\Containers\AccountManager\UI\WEB\Assets\js\account-manager\AccountManagerApi.js */"./UI/WEB/Assets/js/account-manager/AccountManagerApi.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9hY2NvdW50LW1hbmFnZXIvQWNjb3VudE1hbmFnZXJBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9pbmNsdWRlcy9CYXNlQXBpLmpzIl0sIm5hbWVzIjpbIkFjY291bnRNYW5hZ2VyQXBpIiwiQVBJcyIsImFjY291bnRNYW5hZ2VyIiwiYXBpIiwiZ2V0QVBJIiwicmVxdWVzdCIsImFjY291bnRfbWFuYWdlcl9pZCIsIl9fQUNDT1VOVF9NQU5BR0VSX0lEX18iLCJhY2NvdW50TWFuYWdlcklkIiwiQmFzZUFwaSIsIkJhc2VBUEkiLCJuYW1lIiwicmVwbGFjZW1lbnRzIiwiYXBpcyIsImtleXMiLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwia2V5IiwicmVwbGFjZSIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJoZWFkZXJzIiwib3B0aW9ucyIsIiQiLCJhamF4IiwiZGF0YVR5cGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxl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O0FBS0hFLFlBQUksRUFBRUEsSUFMSDtBQU1IQyxlQUFPLG9CQUNBQSxPQURBO0FBTkosU0FBUDtBQVVIOzs7Ozs7QUFHVWIsc0VBQWYsRSIsImZpbGUiOiIvanMvYWNjb3VudC1tYW5hZ2VyL2FjY291bnQtbWFuYWdlci9BY2NvdW50TWFuYWdlckFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuLi9pbmNsdWRlcy9CYXNlQXBpJztcclxuXHJcbiAgY2xhc3MgQWNjb3VudE1hbmFnZXJBcGkgZXh0ZW5kcyBCYXNlQXBpe1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEFQSXMpIHtcclxuICAgICAgICBzdXBlcihBUElzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBY2NvdW50TWFuYWdlcihhY2NvdW50TWFuYWdlcil7XHJcbiAgICBcdGxldCBhcGkgPSB0aGlzLmdldEFQSShcIkFQSV9DUkVBVEVfQUNDT1VOVF9NQU5BR0VSU1wiKTtcclxuXHJcbiAgICBcdHJldHVybiB0aGlzLnJlcXVlc3QoXHJcbiAgICAgICAgICAgIFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBhcGksXHJcbiAgICAgICAgICAgIGFjY291bnRNYW5hZ2VyXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBY2NvdW50TWFuYWdlcihhY2NvdW50TWFuYWdlciwgYWNjb3VudF9tYW5hZ2VyX2lkKXtcclxuICAgICAgICBsZXQgYXBpID0gdGhpcy5nZXRBUEkoXCJBUElfVVBEQVRFX0FDQ09VTlRfTUFOQUdFUlNcIiwge1xyXG4gICAgICAgICAgX19BQ0NPVU5UX01BTkFHRVJfSURfXyA6IGFjY291bnRfbWFuYWdlcl9pZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICAgICAgICBcIlBVVFwiLFxyXG4gICAgICAgICAgICBhcGksXHJcbiAgICAgICAgICAgIGFjY291bnRNYW5hZ2VyXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVBY2NvdW50TWFuYWdlcihhY2NvdW50TWFuYWdlcklkKXtcclxuICAgICAgICBsZXQgYXBpID0gdGhpcy5nZXRBUEkoXCJBUElfREVMRVRFX0FDQ09VTlRfTUFOQUdFUlNcIiwge1xyXG4gICAgICAgICAgX19BQ0NPVU5UX01BTkFHRVJfSURfXyA6IGFjY291bnRNYW5hZ2VySWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgICAgICAgXCJERUxFVEVcIixcclxuICAgICAgICAgICAgYXBpLFxyXG4gICAgICAgICAgICBhY2NvdW50TWFuYWdlcklkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudE1hbmFnZXJBcGk7XHJcbiIsIi8qKlxyXG4gKiBAdG9kbzogQ2xhc3MgcXXhuqNuIGzDvSBjw6FjIGFwaSBj4bunYSAxIGZvcm1cclxuICogQHB1cnBvc2U6XHJcbiAqIC0gbeG7pWMgxJHDrWNoOlxyXG4gKiAgICAgLSB04bqhbyAxIGJhc2UgY2xhc3MgY2hvIGPDoWMgZm9ybSB0aMOqbSwgY+G6rXAgbmjhuq10XHJcbiAqICAgICAgICAgIMSR4buDIGPDoWMgaMOgbSBoYXkgc+G7rSBk4bulbmcgxJHhu4MgbMOqbiBjbGFzcyBjaHVuZ1xyXG4gKiBAYXV0aG9yOiBDcm9jb1xyXG4gKiBAc2luY2U6IDAxLTA4LTIwMjBcclxuICogQHBhcmFtIGpRdWVyeSBlbGVtZW50XHJcbiAqIEBwYXJhbSBPYmplY3QgYXBpc1xyXG4gKiAtIGRhbmggc8OhY2ggY8OhYyBsaW5rIGFwaSB0aGVvIHTDqm5cclxuKi9cclxuY2xhc3MgQmFzZUFQSSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQVBJcyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5BUElzID0gQVBJcyB8fCB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0b2RvOiBIw6BtIGjhu5cgdHLhu6MgbOG6pXkgbGluayBBUEkgdOG7qyBvcHRpb25zIGPhu6dhIHRydXnhu4FuIHbDoG8gdOG7qyBwbHVnaW5cclxuICAgICAqIEBwdXJwb3NlOiBcclxuICAgICAqIC0gbeG7pWMgxJHDrWNoOiBWRCBtdeG7kW4gZ+G7jWkgYWpheCBs4bqleSBkYW5oIHPDoWNoIGFkZHJlc3MgY29tcG9uZW50XHJcbiAgICAgKiAgICAgIHRow6wgY+G6p24gY8OzIGxpbmsgxJHhu4MgZ+G7jWkgYWpheFxyXG4gICAgICogICAgICB0aMOsIGjDoG0gbsOgeSBz4bq9IGzhuqV5IGxpbmsgdOG7qyBvcHRpb25zIHJhXHJcbiAgICAgKiAgICAgIHbDoCByZXBsYWNlIGNodeG7l2kgbuG6v3UgY8OzIHJlcGxhY2VtZW50c1xyXG4gICAgICogICAgICAgICAgVkQ6IHRyb25nIHRyxrDhu51uZyBo4bujcCBsw6AgbGluayBhcGkgY2hpIHRp4bq/dCB0aMOsIGPhuqduIGPDsyBJRCB0csOqbiB1cmxcclxuICAgICAqIEBhdXRob3I6IENyb2NvXHJcbiAgICAgKiBAc2luY2U6IDI4LTA3LTIwMjBcclxuICAgICAqIEBwYXJhbSBzdHJpbmcgdMOqbiBhcGkgdHJvbmcgb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIE9iamVjdCBkw7luZyDEkeG7gyByZXBsYWNlIGPDoWMgZ2nDoSB0cuG7iyB2w6BvIHVybFxyXG4gICAgICogIFtrZXldID0+IHZhbHVlXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ3xudWxsXHJcbiAgICAqL1xyXG4gICAgZ2V0QVBJKG5hbWUsIHJlcGxhY2VtZW50cyA9IHt9KSB7XHJcblxyXG4gICAgICAgIGxldCBhcGlzID0gdGhpcy5BUElzIHx8IHt9O1xyXG4gICAgICAgIGxldCBhcGkgPSBhcGlzW25hbWVdO1xyXG5cclxuICAgICAgICBpZiAoIWFwaSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVwbGFjZW1lbnRzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHJlcGxhY2VtZW50cyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xyXG4gICAgICAgICAgICAgICAgYXBpID0gYXBpLnJlcGxhY2Uoa2V5LCByZXBsYWNlbWVudHNba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcGk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbyBow6BtIGfhu41pIGFqYXhcclxuICAgICAqIEBhdXRob3I6IETFqW5nXHJcbiAgICAgKiBAc2luY2U6IDAxLTA2LTIwMjBcclxuICAgICAqIEBpbnB1dFxyXG4gICAgICogbWV0aG9kIHBoxrDGoW5nIHRoxrDhu5tjIGPhu6dhIGFwaVxyXG4gICAgICogdXJsIMSRxrDhu51uZyBk4bqrbiBhcGlcclxuICAgICAqIGRhdGEgZOG7ryBsaeG7h3UgZ+G7rWkgbMOqbiBhcGlcclxuICAgICAqIGhlYWRlcnMgc2V0IHBhcmFtcyB0cm9uZyBoZWFkZXJzIGfhu61pIGzDqm4gQVBJXHJcbiAgICAgKiBvcHRpb25zIGPhuqV1IGjDrG5oIMSR4bq3YyBiaeG7h3QgbmfGsOG7nW5nIGTDuW5nIG114buRbiDEkcawYSB2w6AgaMOgbSBhamF4XHJcbiAgICAgKiBAZmxvdyBcclxuICAgICAqIEjDoG0gZ+G7jWkgbMOqbiBBUEkgYuG6sW5nIHBoxrDGoW5nIHRo4bupYyBhamF4XHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3QobWV0aG9kLCB1cmwsIGRhdGEgPSBudWxsLCBoZWFkZXJzID0ge30sIG9wdGlvbnMgPSB7fSkge1xyXG5cclxuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyB8fCB7fTtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5oZWFkZXJzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUFQSTsiXSwic291cmNlUm9vdCI6IiJ9