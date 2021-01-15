import AccountManagerApi from '../account-manager/AccountManagerApi';

(function ($, phpData) {

    phpData = phpData || {};

	class FormAccountManager{
		constructor(){
			this.API = new AccountManagerApi(phpData);
		}

		async onCreate(e) {

			e.stopPropagation();
            e.preventDefault();

		  	let formData = $('#form-submit').serialize() || {};

		  	await this.API.createAccountManager(formData);

	 	    Swal.fire({
			  icon: 'success',
			  title: 'Đã thêm!',
			  showConfirmButton: true,
			  timer: 1000
			})
	  	};

	  	async onUpdate(e) {

			e.stopPropagation();
            e.preventDefault();

		  	let formData = $('#form-submit').serialize() || {};
		  	let account_manager_id = phpData['ACCOUNT_MANAGER_ID'];

		  	await this.API.updateAccountManager(formData, account_manager_id);

	 	    Swal.fire({
			  icon: 'success',
			  title: 'Đã cập nhật!',
			  showConfirmButton: true,
			  timer: 1000
			})
	  	};

	  	onDelete(e) {

			e.stopPropagation();
            e.preventDefault();

		  	let account_manager_id = phpData['ACCOUNT_MANAGER_ID'];

	 	    Swal.fire({
			  title: 'Are you sure?',
			  text: "You won't be able to revert this!",
			  icon: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Yes, delete it!'

			}).then((result) => {
			  if (result.isConfirmed) {

				this.API.deleteAccountManager(account_manager_id);

			    Swal.fire({
				  title: 'Deleted',
				  text: "Đã xóa thành công.",
				  icon: 'success',
				  confirmButtonColor: '#3085d6',
				  confirmButtonText: 'OK'

				}).then((result) => {
				  if (result.isConfirmed) {

				    location.href = phpData['WEB_ACCOUNT_MANAGERS_INDEX'];
				  }
				})
			  }
			})
	  	};

	  	initEventListeners(){
	  		var self = this;

			$('#btn-addnew').click(function() {
			  	self.onCreate(event);
			});

			$('#btn-delete').click(function() {
			  	self.onDelete(event);
			});

			$('#btn-update').click(function() {
			  	self.onUpdate(event);
			});
		}
	}

    $(function() {

        let formAccountManager = new FormAccountManager();
        formAccountManager.initEventListeners();
    });
    
}.bind(window))(jQuery, window.PHP_DATA);

