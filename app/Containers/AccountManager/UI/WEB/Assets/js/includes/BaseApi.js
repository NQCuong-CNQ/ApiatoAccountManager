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
class BaseAPI {

    constructor(APIs = {}) {
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
    getAPI(name, replacements = {}) {

        let apis = this.APIs || {};
        let api = apis[name];

        if (!api) {

            return null;
        }

        if (replacements) {

            let keys = Object.keys(replacements);
            for (let i = 0; i < keys.length; i++) {

                let key = keys[i];
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
    request(method, url, data = null, headers = {}, options = {}) {

        headers = headers || {};
        options = options || {};

        return $.ajax({
            dataType: "json",
            ...options,
            url: url,
            method: method,
            data: data,
            headers: {
                ...headers
            }
        });
    }
}

export default BaseAPI;