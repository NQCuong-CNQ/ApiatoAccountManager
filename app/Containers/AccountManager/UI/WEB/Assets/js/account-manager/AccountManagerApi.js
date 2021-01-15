import BaseApi from '../includes/BaseApi';

  class AccountManagerApi extends BaseApi{

    constructor(APIs) {
        super(APIs);
    }

    createAccountManager(accountManager){
    	let api = this.getAPI("API_CREATE_ACCOUNT_MANAGERS");

    	return this.request(
            "POST",
            api,
            accountManager
        );
    }

    updateAccountManager(accountManager, account_manager_id){
        let api = this.getAPI("API_UPDATE_ACCOUNT_MANAGERS", {
          __ACCOUNT_MANAGER_ID__ : account_manager_id
        });

        return this.request(
            "PUT",
            api,
            accountManager
        );
    }

    deleteAccountManager(accountManagerId){
        let api = this.getAPI("API_DELETE_ACCOUNT_MANAGERS", {
          __ACCOUNT_MANAGER_ID__ : accountManagerId
        });

        return this.request(
            "DELETE",
            api,
            accountManagerId
        );
    }
    
  }
export default AccountManagerApi;
