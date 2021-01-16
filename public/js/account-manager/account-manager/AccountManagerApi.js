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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9hY2NvdW50LW1hbmFnZXIvQWNjb3VudE1hbmFnZXJBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vVUkvV0VCL0Fzc2V0cy9qcy9pbmNsdWRlcy9CYXNlQXBpLmpzIl0sIm5hbWVzIjpbIkFjY291bnRNYW5hZ2VyQXBpIiwiQVBJcyIsImFjY291bnRNYW5hZ2VyIiwiYXBpIiwiZ2V0QVBJIiwiRXJyb3IiLCJyZXF1ZXN0IiwiYWNjb3VudF9tYW5hZ2VyX2lkIiwiX19BQ0NPVU5UX01BTkFHRVJfSURfXyIsImFjY291bnRNYW5hZ2VySWQiLCJCYXNlQXBpIiwiQmFzZUFQSSIsIm5hbWUiLCJyZXBsYWNlbWVudHMiLCJhcGlzIiwia2V5cyIsIk9iamVjdCIsImkiLCJsZW5ndGgiLCJrZXkiLCJyZXBsYWNlIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImhlYWRlcnMiLCJvcHRpb25zIiwiJCIsImFqYXgiLCJkYXRhVHlwZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQs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LFlBQVksQ0FBQ00sR0FBRCxDQUE3QixDQUFOO0FBQ0g7QUFDSjs7QUFFRCxhQUFPaEIsR0FBUDtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7NEJBQ1lrQixNLEVBQVFDLEcsRUFBOEM7QUFBQSxVQUF6Q0MsSUFBeUMsdUVBQWxDLElBQWtDO0FBQUEsVUFBNUJDLE9BQTRCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUUxREQsYUFBTyxHQUFHQSxPQUFPLElBQUksRUFBckI7QUFDQUMsYUFBTyxHQUFHQSxPQUFPLElBQUksRUFBckI7QUFFQSxhQUFPQyxDQUFDLENBQUNDLElBQUY7QUFDSEMsZ0JBQVEsRUFBRTtBQURQLFNBRUFILE9BRkE7QUFHSEgsV0FBRyxFQUFFQSxHQUhGO0FBSUhELGNBQU0sRUFBRUEsTUFKTDtBQUtIRSxZQUFJLEVBQUVBLElBTEg7QUFNSEMsZUFBTyxvQkFDQUEsT0FEQTtBQU5KLFNBQVA7QUFVSDs7Ozs7O0FBR1ViLHNFQUFmLEUiLCJmaWxlIjoiL2pzL2FjY291bnQtbWFuYWdlci9hY2NvdW50LW1hbmFnZXIvQWNjb3VudE1hbmFnZXJBcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiaW1wb3J0IEJhc2VBcGkgZnJvbSAnLi4vaW5jbHVkZXMvQmFzZUFwaSc7XHJcblxyXG4vKipcclxuICogQHRvZG86IENsYXNzIGjhu5cgdHLhu6MgcXXhuqNuIGzDvSBjw6FjIEFQSSB24buBIGFjY291bnQgbWFuYWdlclxyXG4gKiBAYXV0aG9yOiBDxrDhu51uZ1xyXG4gKiBAc2luY2U6IDE1LTAxLTIwMjFcclxuICogQHBhcmFtIE9iamVjdCBkYW5oIHPDoWNoIGPDoWMgYXBpXHJcbiovXHJcbmNsYXNzIEFjY291bnRNYW5hZ2VyQXBpIGV4dGVuZHMgQmFzZUFwaXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihBUElzKSB7XHJcbiAgICAgICAgc3VwZXIoQVBJcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbzogSMOgbSBo4buXIHRy4bujIGfhu41pIEFQSSB0aMOqbSBt4bubaSBt4buZdCBhY2NvdW50IG1hbmFnZXJcclxuICAgICAqIEBwdXJwb3NlOiBcclxuICAgICAqIC0gbeG7pWMgxJHDrWNoOlxyXG4gICAgICogICAgICBn4buNaSBsw6puIGFwaSDEkeG7gyB04bqhbyBt4bubaSAxIGFkZHJlc3MgY29tcG9uZW50IFxyXG4gICAgICogQGF1dGhvcjogQ8aw4budbmdcclxuICAgICAqIEBzaW5jZTogMTUtMDEtMjAyMVxyXG4gICAgICogQHBhcmFtIE9iamVjdCBwYXJhbWV0ZXJzXHJcbiAgICAgKiBAcmV0dXJuIFxyXG4gICAgICogQHRocm93cyBcclxuICAgICovXHJcbiAgICBjcmVhdGVBY2NvdW50TWFuYWdlcihhY2NvdW50TWFuYWdlcil7XHJcbiAgICBcdGxldCBhcGkgPSB0aGlzLmdldEFQSShcIkFQSV9DUkVBVEVfQUNDT1VOVF9NQU5BR0VSU1wiKTtcclxuXHJcbiAgICAgICAgaWYgKCFhcGkpIHtcclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIktow7RuZyB0w6xtIHRo4bqleSBBcGkgbsOgeSFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFx0cmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgICAgICAgXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGFwaSxcclxuICAgICAgICAgICAgYWNjb3VudE1hbmFnZXJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHRvZG86IEFwaSBj4bqtcCBuaOG6rXQgYWNjb3VudCBtYW5hZ2VyXHJcbiAgICAgKiBAcHVycG9zZTogXHJcbiAgICAgKiAtIG3hu6VjIMSRw61jaDogZ+G7jWkgbMOqbiBhcGkgxJHhu4MgY+G6rXAgbmjhuq10IDEgYWNjb3VudCBtYW5hZ2VyXHJcbiAgICAgKiAgKFTDqm4gY8O0bmcgdHksIHTDqm4g4bupbmcgZOG7pW5nLCAuLi4pXHJcbiAgICAgKiBAYXV0aG9yOiBDxrDhu51uZ1xyXG4gICAgICogQHNpbmNlOiAxNS0wMS0yMDIxXHJcbiAgICAgKiBAcGFyYW0gT2JqZWN0IHRow7RuZyB0aW4gxJHhu4thIGNo4buJXHJcbiAgICAgKiBAcmV0dXJuIFByb21pc2UgYWpheFxyXG4gICAgICogQHRocm93cyBFcnJvclxyXG4gICAgKi9cclxuICAgIHVwZGF0ZUFjY291bnRNYW5hZ2VyKGFjY291bnRNYW5hZ2VyLCBhY2NvdW50X21hbmFnZXJfaWQpe1xyXG4gICAgICAgIGxldCBhcGkgPSB0aGlzLmdldEFQSShcIkFQSV9VUERBVEVfQUNDT1VOVF9NQU5BR0VSU1wiLCB7XHJcbiAgICAgICAgICBfX0FDQ09VTlRfTUFOQUdFUl9JRF9fIDogYWNjb3VudF9tYW5hZ2VyX2lkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghYXBpKSB7XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJLaMO0bmcgdMOsbSB0aOG6pXkgQXBpIG7DoHkhXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgICAgICAgXCJQVVRcIixcclxuICAgICAgICAgICAgYXBpLFxyXG4gICAgICAgICAgICBhY2NvdW50TWFuYWdlclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdG9kbzogQXBpIHjDs2EgYWNjb3VudCBtYW5hZ2VyXHJcbiAgICAgKiBAcHVycG9zZTogXHJcbiAgICAgKiAtIG3hu6VjIMSRw61jaDogZ+G7jWkgbMOqbiBhcGkgxJHhu4MgeMOzYSAxIGFjY291bnQgbWFuYWdlclxyXG4gICAgICogQGF1dGhvcjogQ8aw4budbmdcclxuICAgICAqIEBzaW5jZTogMTUtMDEtMjAyMVxyXG4gICAgICogQHBhcmFtIE9iamVjdCB0aMO0bmcgdGluIMSR4buLYSBjaOG7iVxyXG4gICAgICogQHJldHVybiBQcm9taXNlIGFqYXhcclxuICAgICAqIEB0aHJvd3MgRXJyb3JcclxuICAgICovXHJcbiAgICBkZWxldGVBY2NvdW50TWFuYWdlcihhY2NvdW50TWFuYWdlcklkKXtcclxuICAgICAgICBsZXQgYXBpID0gdGhpcy5nZXRBUEkoXCJBUElfREVMRVRFX0FDQ09VTlRfTUFOQUdFUlNcIiwge1xyXG4gICAgICAgICAgX19BQ0NPVU5UX01BTkFHRVJfSURfXyA6IGFjY291bnRNYW5hZ2VySWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhcGkpIHtcclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIktow7RuZyB0w6xtIHRo4bqleSBBcGkgbsOgeSFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXHJcbiAgICAgICAgICAgIFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGFwaSxcclxuICAgICAgICAgICAgYWNjb3VudE1hbmFnZXJJZFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50TWFuYWdlckFwaTtcclxuIiwiLyoqXHJcbiAqIEB0b2RvOiBDbGFzcyBxdeG6o24gbMO9IGPDoWMgYXBpIGPhu6dhIDEgZm9ybVxyXG4gKiBAcHVycG9zZTpcclxuICogLSBt4bulYyDEkcOtY2g6XHJcbiAqICAgICAtIHThuqFvIDEgYmFzZSBjbGFzcyBjaG8gY8OhYyBmb3JtIHRow6ptLCBj4bqtcCBuaOG6rXRcclxuICogICAgICAgICAgxJHhu4MgY8OhYyBow6BtIGhheSBz4butIGThu6VuZyDEkeG7gyBsw6puIGNsYXNzIGNodW5nXHJcbiAqIEBhdXRob3I6IENyb2NvXHJcbiAqIEBzaW5jZTogMDEtMDgtMjAyMFxyXG4gKiBAcGFyYW0galF1ZXJ5IGVsZW1lbnRcclxuICogQHBhcmFtIE9iamVjdCBhcGlzXHJcbiAqIC0gZGFuaCBzw6FjaCBjw6FjIGxpbmsgYXBpIHRoZW8gdMOqblxyXG4qL1xyXG5jbGFzcyBCYXNlQVBJIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihBUElzID0ge30pIHtcclxuICAgICAgICB0aGlzLkFQSXMgPSBBUElzIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHRvZG86IEjDoG0gaOG7lyB0cuG7oyBs4bqleSBsaW5rIEFQSSB04burIG9wdGlvbnMgY+G7p2EgdHJ1eeG7gW4gdsOgbyB04burIHBsdWdpblxyXG4gICAgICogQHB1cnBvc2U6IFxyXG4gICAgICogLSBt4bulYyDEkcOtY2g6IFZEIG114buRbiBn4buNaSBhamF4IGzhuqV5IGRhbmggc8OhY2ggYWRkcmVzcyBjb21wb25lbnRcclxuICAgICAqICAgICAgdGjDrCBj4bqnbiBjw7MgbGluayDEkeG7gyBn4buNaSBhamF4XHJcbiAgICAgKiAgICAgIHRow6wgaMOgbSBuw6B5IHPhur0gbOG6pXkgbGluayB04burIG9wdGlvbnMgcmFcclxuICAgICAqICAgICAgdsOgIHJlcGxhY2UgY2h14buXaSBu4bq/dSBjw7MgcmVwbGFjZW1lbnRzXHJcbiAgICAgKiAgICAgICAgICBWRDogdHJvbmcgdHLGsOG7nW5nIGjhu6NwIGzDoCBsaW5rIGFwaSBjaGkgdGnhur90IHRow6wgY+G6p24gY8OzIElEIHRyw6puIHVybFxyXG4gICAgICogQGF1dGhvcjogQ3JvY29cclxuICAgICAqIEBzaW5jZTogMjgtMDctMjAyMFxyXG4gICAgICogQHBhcmFtIHN0cmluZyB0w6puIGFwaSB0cm9uZyBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0gT2JqZWN0IGTDuW5nIMSR4buDIHJlcGxhY2UgY8OhYyBnacOhIHRy4buLIHbDoG8gdXJsXHJcbiAgICAgKiAgW2tleV0gPT4gdmFsdWVcclxuICAgICAqIEByZXR1cm4gc3RyaW5nfG51bGxcclxuICAgICovXHJcbiAgICBnZXRBUEkobmFtZSwgcmVwbGFjZW1lbnRzID0ge30pIHtcclxuXHJcbiAgICAgICAgbGV0IGFwaXMgPSB0aGlzLkFQSXMgfHwge307XHJcbiAgICAgICAgbGV0IGFwaSA9IGFwaXNbbmFtZV07XHJcblxyXG4gICAgICAgIGlmICghYXBpKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXBsYWNlbWVudHMpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMocmVwbGFjZW1lbnRzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgICAgICAgICBhcGkgPSBhcGkucmVwbGFjZShrZXksIHJlcGxhY2VtZW50c1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFwaTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0b2RvIGjDoG0gZ+G7jWkgYWpheFxyXG4gICAgICogQGF1dGhvcjogRMWpbmdcclxuICAgICAqIEBzaW5jZTogMDEtMDYtMjAyMFxyXG4gICAgICogQGlucHV0XHJcbiAgICAgKiBtZXRob2QgcGjGsMahbmcgdGjGsOG7m2MgY+G7p2EgYXBpXHJcbiAgICAgKiB1cmwgxJHGsOG7nW5nIGThuqtuIGFwaVxyXG4gICAgICogZGF0YSBk4buvIGxp4buHdSBn4butaSBsw6puIGFwaVxyXG4gICAgICogaGVhZGVycyBzZXQgcGFyYW1zIHRyb25nIGhlYWRlcnMgZ+G7rWkgbMOqbiBBUElcclxuICAgICAqIG9wdGlvbnMgY+G6pXUgaMOsbmggxJHhurdjIGJp4buHdCBuZ8aw4budbmcgZMO5bmcgbXXhu5FuIMSRxrBhIHbDoCBow6BtIGFqYXhcclxuICAgICAqIEBmbG93IFxyXG4gICAgICogSMOgbSBn4buNaSBsw6puIEFQSSBi4bqxbmcgcGjGsMahbmcgdGjhu6ljIGFqYXhcclxuICAgICAqL1xyXG4gICAgcmVxdWVzdChtZXRob2QsIHVybCwgZGF0YSA9IG51bGwsIGhlYWRlcnMgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XHJcblxyXG4gICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzIHx8IHt9O1xyXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIC4uLmhlYWRlcnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlQVBJOyJdLCJzb3VyY2VSb290IjoiIn0=