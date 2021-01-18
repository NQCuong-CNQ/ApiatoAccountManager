import BaseApi from '../includes/BaseApi';

/**
 * @todo: Class hỗ trợ quản lý các API về account manager
 * @author: Cường
 * @since: 15-01-2021
 * @param Object danh sách các api
*/
class AccountManagerApi extends BaseApi{

    constructor(APIs) {
        super(APIs);
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
    createAccountManager(accountManager){
    	let api = this.getAPI("API_CREATE_ACCOUNT_MANAGERS");

        if (!api) {

            throw new Error(trans("accountmanager::account-manager.errors.api_not_found"));
        }

    	return this.request(
            "POST",
            api,
            accountManager
        );
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
    updateAccountManager(accountManager, account_manager_id){
        let api = this.getAPI("API_UPDATE_ACCOUNT_MANAGERS", {
          __ACCOUNT_MANAGER_ID__ : account_manager_id
        });

        if (!api) {

            throw new Error(trans("accountmanager::account-manager.errors.api_not_found"));
        }

        return this.request(
            "PUT",
            api,
            accountManager
        );
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
    deleteAccountManager(accountManagerId){
        let api = this.getAPI("API_DELETE_ACCOUNT_MANAGERS", {
          __ACCOUNT_MANAGER_ID__ : accountManagerId
        });

        if (!api) {

            throw new Error(trans("accountmanager::account-manager.errors.api_not_found"));
        }
        
        return this.request(
            "DELETE",
            api,
            accountManagerId
        );
    }
    
}
export default AccountManagerApi;
