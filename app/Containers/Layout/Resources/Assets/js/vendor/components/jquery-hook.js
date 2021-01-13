/**
 * @todo: Plugin sử dụng hook get, set cho element
 *  để xử lý dữ liệu đầu vào, ra của 1 property trong element
 * @purpose: 
 * - mục đích:
 *      - VD: có input nhập số
 *          khi nhập vào thì format số
 *          nhưng khi lấy dữ liệu ra thì bỏ format số 
 *      - sử dụng:
 *          $("input").hook("value", {
 *              transform: (value) => {
 *                  
 *                  return giá trị sau chỉnh sửa
 *              },
 *              transport: (value) => {
 *                  
 *                  return giá trị sau chỉnh sửa
 *              },
 *          })
 * 
 *          $("input").hook("css", "borderRadius", {
 *              transform: (value) => {
 *                  
 *                  return giá trị sau chỉnh sửa
 *              },
 *              transport: (value) => {
 *                  
 *                  return giá trị sau chỉnh sửa
 *              },
 *          })
 * @author: Croco
 * @since: 10-09-2020
 * @param string loại
 *      - value | html | text | css | prop | any attribute name
 * @param string tên property đối với trường hợp loại là
 *      css | prop
 * @param options
 *  - transform: hàm format dữ liệu đầu ra
 *  - transport: hàm format dữ liệu đầu vào
 * @return Object
 *  - disable: huỷ kích hoạt hook
 *  - enable: kích hoạt hook
*/
$.fn.hook = function (attributeName, type, options = {}) {

    // hàm add hook vào jquery
    let patchHook;
    let enabled = true;
    
    switch (attributeName) {
        // xử lý đầu vào, ra của value
        case "value":
            patchHook = patchValhook;
            break;
        // xử lý đầu vào, ra của html
        case "html":
        case "innerHTML":
            patchHook = patchHtmlHook;
            break;
        // xử lý đầu vào, ra của text
        case "text":
        case "innerText":
        case "textContent":
            patchHook = patchTextHook;
            break;
        // xử lý đầu vào, ra của css
        case "css":
        case "style":
            patchHook = patchCssHook;
            break;
        // xử lý đầu vào, ra của prop
        case "prop":
            patchHook = patchPropHook;
            break;
        // xử lý đầu vào, ra của attribute
        default:
            patchHook = patchAttrHook;
            break;
    }

    // đối với các trường hợp không có 3 tham số như
    // value, html, text
    // thì tham số thứ 2 sẽ là option
    if (typeof type == "object") {

        options = type;
        type = attributeName;
    }

    options = options || {};

    let transform = options.transform;
    let transport = options.transport;

    // duyệt qua từng element để add hook
    this.each(function () {

        let element = this;
        let tagName = element.tagName || "";
        tagName = tagName.toLowerCase();

        let hook = type;
        switch (hook) {
            case "value":
                hook = tagName;
                break;
        }

        patchHook(
            hook,
            (el) => {

                return enabled && element === el;
            },
            {
                transform,
                transport
            }
        );
    });

    return {
        disable: () => {

            enabled = false;
        },
        enable: () => {

            enabled = true;
        }
    };
};

/**
 * @todo: Hàm đăng ký hook vào jQuery
 * @purpose: 
 * - mục đích:
 *      đăng ký các hook cho jQuery để hỗ trợ cho plugin $.fn.hook
 * @author: Croco
 * @since: 10-09-2020
 * @param string tên hook
 * @param string loại
 * @param function validate
 *  - nếu đúng element đó thì mới gọi hook
*/
const patchJqueryHook = (hookName, type, validate, options = {}) => {

    let {
        get,
        set,
        transform,
        transport
    } = options || {};
    validate = validate || (() => (true));

    $[hookName] = $[hookName] || {};

    // lấy hook hiện tại đã đăng ký vào jQuery
    let hookGet = ($[hookName][type] && $[hookName][type].get) ? $[hookName][type].get : get;
    let hookSet = ($[hookName][type] && $[hookName][type].set) ? $[hookName][type].set : set;

    // hàm format dữ liệu đầu ra
    transform = transform || ((value) => {

        return value;
    });

    // hàm format dữ liệu đầu vào
    transport = transport || ((value) => {

        return value;
    });

    // đăng ký hook
    $[hookName][type] = {
        get: function (element) {

            if (validate(element)) {

                return transform(get(element), element);
            }
            return hookGet.apply(this, arguments);
        },
        set: function (element, value) {

            if (validate(element)) {

                value = transport(value, element);
                return set.apply(this, [element, value]);
            }
            return hookSet.apply(this, arguments);
        },
    };
};

/**
 * @todo: Hàm đăng ký hook get, set value vào jQuery
 * @purpose:
 * - mục đích:
 *      đăng ký các hook value jQuery để hỗ trợ cho plugin $.fn.hook
 * @author: Croco
 * @since: 10-09-2020
 * @param string tên tag element
 * @param function validate
 *  - nếu đúng element đó thì mới gọi hook
*/
const patchValhook = (type, validate, options = {}) => {

    validate = validate || ((element) => {

        let tagName = element.tagName || "";
        return tagName.toLowerCase() == type;
    });
    return patchJqueryHook("valHooks", type, validate, {
        ...options,
        get: (element) => {

            return element.value;
        },
        set: (element, value) => {

            element.value = value;
            return true;
        }
    });
};

/**
 * @todo: Hàm đăng ký hook get, set attr vào jQuery
 * @purpose:
 * - mục đích:
 *      đăng ký các hook attribute jQuery để hỗ trợ cho plugin $.fn.hook
 * @author: Croco
 * @since: 10-09-2020
 * @param string tên tag element
 * @param function validate
 *  - nếu đúng element đó thì mới gọi hook
*/
const patchAttrHook = (type, validate, options = {}) => {

    return patchJqueryHook("attrHooks", type, validate, {
        ...options,
        get: (element) => {

            return element.getAttribute(type);
        },
        set: (element, value) => {

            element.setAttribute(type, value);
            return true;
        }
    });
};

/**
 * @todo: Hàm đăng ký hook get, set style vào jQuery
 * @purpose:
 * - mục đích:
 *      đăng ký các hook style jQuery để hỗ trợ cho plugin $.fn.hook
 * @author: Croco
 * @since: 10-09-2020
 * @param string tên tag element
 * @param function validate
 *  - nếu đúng element đó thì mới gọi hook
*/
const patchCssHook = (type, validate, options = {}) => {

    return patchJqueryHook("cssHooks", type, validate, {
        ...options,
        get: (element) => {

            return $.css(element, type);
        },
        set: (element, value) => {

            element.style[type] = value;
            return true;
        }
    });
};

/**
 * @todo: Hàm đăng ký hook get, set prop vào jQuery
 * @purpose:
 * - mục đích:
 *      đăng ký các hook prop jQuery để hỗ trợ cho plugin $.fn.hook
 * @author: Croco
 * @since: 10-09-2020
 * @param string tên tag element
 * @param function validate
 *  - nếu đúng element đó thì mới gọi hook
*/
const patchPropHook = (type, validate, options = {}) => {

    return patchAttrHook(type, validate, options);
};

const originalHtml = $.fn.html;
$.htmlHooks = {};
$.fn.html = function(value) {

    let transform = $.htmlHooks.get;
    let transport = $.htmlHooks.set;

    if (value === undefined) {

        if (transform) {

            return transform(this);
        }
        return originalHtml.apply(this, arguments);
    }

    if (transport) {

        if(transport(this, value)) {

            return originalHtml.apply(this, []);
        }
    }
    return originalHtml.apply(this, arguments);
};

const originalText = $.fn.text;
$.textHooks = {};
$.fn.text = function (value) {

    let transform = $.textHooks.get;
    let transport = $.textHooks.set;

    if (value === undefined) {

        if (transform) {

            return transform(this);
        }
        return originalText.apply(this, arguments);
    }

    if (transport) {

        if (transport) {

            if (transport(this, value)) {

                return originalHtml.apply(this, []);
            }
        }
    }
    return originalText.apply(this, arguments);
};

/**
 * @todo: Hàm đăng ký hook get, set html vào jQuery
 * @purpose:
 * - mục đích:
 *      đăng ký các hook html jQuery để hỗ trợ cho plugin $.fn.hook
 * @author: Croco
 * @since: 10-09-2020
 * @param string tên tag element
 * @param function validate
 *  - nếu đúng element đó thì mới gọi hook
*/
const patchHtmlHook = (type, validate, options = {}) => {

    return patchJqueryHook("htmlHooks", type, validate, {
        ...options,
        get: (element) => {

            return element.innerHTML;
        },
        set: (element, value) => {

            element.innerHTML = value;
            return true;
        }
    });
};

/**
 * @todo: Hàm đăng ký hook get, set text vào jQuery
 * @purpose:
 * - mục đích:
 *      đăng ký các hook text jQuery để hỗ trợ cho plugin $.fn.hook
 * @author: Croco
 * @since: 10-09-2020
 * @param string tên tag element
 * @param function validate
 *  - nếu đúng element đó thì mới gọi hook
*/
const patchTextHook = (type, validate, options = {}) => {

    return patchJqueryHook("textHooks", type, validate, {
        ...options,
        get: (element) => {

            return element.innerText;
        },
        set: (element, value) => {

            element.innerText = value;
            return true;
        }
    });
};