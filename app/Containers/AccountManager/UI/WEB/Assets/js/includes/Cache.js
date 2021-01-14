/**
 * @todo: Class hỗ trợ lưu cache vào ram
 * @purpose: 
 *  - mục đích: để giảm tải request có cùng dữ liệu
 *      VD: lấy danh sách đơn vị hành chính của quốc gia nào đó
 *          thì lấy được rồi thì lần sau chỉ lấy cache ra thôi không cần gọi api nữa
 * @author: Croco
 * @since: 28-07-2020
*/
class Cache {

    constructor() {

        this.data = new Map();
    }

    async async(cacheKey, generate) {

        if (this.data.has(cacheKey)) {

            return this.data.get(cacheKey);
        }

        let data = await generate();
        this.data.set(cacheKey, data);

        return data;
    }

    clear() {

        this.data.clear();
        return this;
    }

    get(cacheKey) {

        return this.data.get(cacheKey);
    }

    has(cacheKey) {

        return this.data.has(cacheKey);
    }

    delete(cacheKey) {

        this.data.delete(cacheKey);
        return this;
    }
}

export default new Cache;