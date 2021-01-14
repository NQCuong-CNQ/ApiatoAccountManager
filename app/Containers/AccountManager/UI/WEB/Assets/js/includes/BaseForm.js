const jQueryInit = function jQueryInit($element) {

    $.fn.init.apply(this, [$element]);
}

jQueryInit.prototype = Object.create($.fn.init.prototype);

/**
 * @todo: Class quản lý form
 * @purpose: 
 * - mục đích:
 *     - tạo 1 base class cho các form thêm, cập nhật
 *          để các hàm hay sử dụng để lên class chung
 * @author: Croco
 * @since: 01-08-2020
 * @param jQuery element
 * @param Object options
 * - selectors: Object danh sách các tên selector để tìm element
*/
class BaseForm extends jQueryInit {

    constructor($element, options = {}) {
        super($element);

        options = options || {};

        // danh sách các sự kiện trong form
        this.listeners = [];
        // danh sách các elements con trong form
        this.$elements = {};
        // danh sách các selector trong form
        this.selectors = options.selectors || [];

        // cấu hình
        this.options = options;
    }

    /**
     * @todo: Hàm khởi tạo dữ liệu class
     * @purpose: 
     * - mục đích:
     *      giảm tải cho hàm constructor
     *      tất cả các init khi khởi tạo instance sẽ đặt ở đây
     * @author: Croco
     * @since: 01-08-2020
    */
    init(options = {}) {

        this.options = {
            ...this.options,
            options
        };

        this.selectors = this.options.selectors || [];

        this.initElements();
        this.initEventListeners();

        // gọi tất cả phương thức bắt đầu bằng boot
        let bootMethods = getAllMethods(this) || [];
        bootMethods.forEach(name => {

            if (name.startsWith("boot")) {

                this[name]();
            }
        });

        return this;
    }

    /**
     * @todo: Hàm khởi tạo và đăng ký các elements trong form
     * @purpose: 
     * - mục đích: tập trung các element trong form lại 1 chỗ cho dễ quản
     * @author: Croco
     * @since: 01-08-2020
    */
    initElements() {

        let selectors = Object.keys(this.selectors || {});
        let $this = $(this);
        selectors.forEach((name) => {

            let selector = this.getSelector(name);
            if (selector) {

                let $element = $this.find(selector);
                if ($element.length <= 0) {

                    $element = $(selector);
                }
                this.$elements[name] = $element;
            }
        });
        return this;
    }

    /**
     * @todo: Hàm khởi tạo sự kiện trong form
     * @purpose: 
     * - mục đích:
     *      tập trung các sự kiện về 1 chỗ cho dễ quản lý
     * @author: Croco
     * @since: 01-08-2020
    */
    initEventListeners() {

    }

    /**
     * @todo: Hàm hỗ trợ lấy element đã đăng ký ở hàm initElements
     * @purpose: 
     * - mục đích: public phương thức lấy element ra ngoài để
     *      bên ngoài nghiệp vụ muốn lấy element nào thì truyền tên element đó vào
     * @author: Croco
     * @since: 01-08-2020
     * @param name
     * @return Object|jQuery
    */
    getElement(name) {

        let elements = this.$elements || {};
        if (name) {

            if (elements[name]) {

                return elements[name];
            }

            let selector = this.getSelector(name) || undefined;
            return $(selector);
        }

        return elements;
    }

    /**
     * @todo: Hàm hỗ trợ lấy tên selector để tìm ra element
     * @purpose: 
     * - mục đích:
     *      từ tên field hoặc tên cấu hình có thể đặt class name hoặc ID để tìm ra element
     *          trên form
     * @author: Croco
     * @since: 01-08-2020
     * @param string name
     * @return string selector
    */
    getSelector(name) {

        let selectors = this.selectors || {};
        if (name) {

            return selectors[name];
        }

        return selectors;
    }

    /**
     * @todo: Hàm hỗ trợ lấy thông tin cấu hình
     * @purpose: 
     * - mục đích: 
     *      lấy options đã truyền vào class lúc khởi tạo
     * @author: Croco
     * @since: 01-08-2020
     * @return Object 
    */
    getOptions() {

        return this.options || {};
    }

    /**
     * @todo: Hàm hỗ trợ add sự kiện
     * @purpose: 
     * - mục đích: lưu lại danh sách sự kiện
     *      để khi destroy thì xoá sự kiện đi chống dublicate sự kiện
     * @author: Croco
     * @since: 29-07-2020
     * @return object supscriber
    */
    addEventListener(name, handler, selector = undefined) {

        if (typeof handler == "string" && selector) {

            let swapSelector = selector;
            selector = handler;
            handler = swapSelector;
        }

        let supscription = {
            name,
            handler,
            selector
        };

        if (selector) {

            this.on(name, selector, handler);
        } else {

            this.on(name, handler);
        }

        this.listeners.push(supscription);

        supscription.remove = () => {

            let index = this.listeners.indexOf(supscription);
            if (index !== -1) {

                this.listeners.splice(index, 1);
            }

            if (selector) {

                this.off(name, selector, handler);
            } else {

                this.off(name, handler);
            }
        };

        return supscription;
    }

    /**
     * @todo: Hàm hỗ trợ khởi tạo select2
     * @author: Croco
     * @since: 29-07-2020
     * @param jQuery select
     * @param Object
    */
    initSelect2($element, options = {}) {

        if (!($element instanceof $.fn.init)) {

            $element = $($element);
        }

        let disabled = $element.attr('disabled') || false;
        disabled = $element.attr('readonly') || false;
        options = options || {};
        options.minimumInputLength = options.minimumInputLength || 0;

        let {
            ajax,
            language = {},
        } = options;

        $element.select2({
            disabled: disabled,
            minimumInputLength: 0,
            placeholder: trans('Tìm kiếm dữ liệu'),
            dropdownAutoWidth: false,
            width: 'style',
            templateSelection: (state, container) => {

                if (!state.id) {

                    return state.text;
                }

                let option = state.element;
                if (option) {

                    $(option).data("item", state);
                }

                return state.text;
            },
            templateResult: (state) => {

                return state.text;
            },
            ...options,
            language: {
                inputTooShort: () => {

                    return trans('Vui lòng nhập ít nhất') + ' ' + options.minimumInputLength + " " + trans('ký tự để lọc dữ liệu');
                },
                ...language
            },
            ajax: ajax ? {
                delay: 300,
                data: (term) => {

                    let params = {};
                    params.search = term.term;
                    params.page = term.page || 1;
                    params.limit = term.limit || 5;

                    return params;
                },
                processResults: (response) => {

                    response = response || {};
                    let pagination = response.pagination || {};

                    return {
                        results: response.data || [],
                        pagination: {
                            more: (pagination.current_page * pagination.per_page) < pagination.total
                        }
                    };
                },
                ...ajax
            } : undefined,
        });

        return this;
    }

    /**
     * @todo: Hàm hỗ trợ lấy tất cả dữ liệu của form để submit
     * @purpose: 
     * - mục đích:
     *      khi nhấn submit thì lấy toàn bộ giá trị của input, select để gọi lên api
     * @author: Croco
     * @since: 03-08-2020
     * @return Object 
    */
    serialize() {

        let formData = $(this).find("input, select, textarea").serializeObject() || {};
        formData._jsvalidation = undefined;
        formData._jsvalidation_validate_all = undefined;

        delete formData._jsvalidation;
        delete formData._jsvalidation_validate_all;
        return formData;
    }

    /**
     * @todo: Hàm huỷ class
     * @purpose: 
     * - mục đích: khi huỷ class thì huỷ toàn bộ sự kiện, element đã khởi tạo
     *      để khi add element vào không bị dublicate sự kiện
     * @author: Croco
     * @since: 29-07-2020
    */
    destroy() {

        let listeners = (this.listeners || []).slice();
        listeners.forEach(subscription => {

            subscription.remove();
        });
        this.listeners = [];

        return this;
    }
}

/**
 * @todo: Hàm hỗ trợ lấy tất cả method của class
 * https://stackoverflow.com/questions/31054910/get-functions-methods-of-a-class
 * @purpose: 
 * - mục đích:
 *      ở class abstract có thể biết được class có bao nhiêu class
 *      VD: có chức năng
 *          tìm tất cả hàm bắt đầu bằng boot, và gọi hàm
 * @author: Croco
 * @since: 01-08-2020
 * @param Object instance cần lấy danh sách methods
 * @return array danh sách tên hàm
*/
const getAllMethods = (obj) => {

    let properties = [];
    let currentObj = obj;

    do {

        let currentProperties = Object.getOwnPropertyNames(currentObj) || [];
        properties = properties.concat(currentProperties);
    } while (
        (
            currentObj = Object.getPrototypeOf(currentObj)
        )
        // bỏ qua các function của jquery
        && (
            currentObj !== jQueryInit.prototype
        )
    )

    return properties.filter(item => typeof obj[item] === 'function');
};

export default BaseForm;