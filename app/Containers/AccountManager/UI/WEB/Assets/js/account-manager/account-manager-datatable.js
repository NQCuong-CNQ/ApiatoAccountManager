import AccountManagerApi from '../account-manager/AccountManagerApi';

(function ($, phpData) {
    
  phpData = phpData || {};

  class AccountManageDataTable{

    constructor() {
      this.API = new AccountManagerApi(phpData);
    }

    initDataTable() {
     
      var table = $("#datatable-list-all").DataTable({
            "scrollX": true,
            "responsive": false,
            "Processing": true,
            "ServerSide": true, 
            "sAjaxSource": phpData['API_GET_ALL_ACCOUNT_MANAGERS'],
            "columns": [
                {data :'id'},
                {data :'company_name'},
                {data :'domain_name'},
                {data :'app_name'},
                {data :'start_date'},
            ],

            "paging": true,
        });

      var thisAPI = this.API;

      $('#datatable-list-all tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
        } else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
        }

        var id = table.row(this).data()['id'];
        var api = thisAPI.getAPI("WEB_GET_ACCOUNT_MANAGERS_BY_ID", {
          __ACCOUNT_MANAGER_ID__ : id
        });

        location.href = api;
        
      });
    }
  }
  // document ready
  $(function () {
      // khởi tạo class
      var accountManageDataTable = new AccountManageDataTable();
      // khởi chạy hàm init
      accountManageDataTable.initDataTable();
  });
}.bind(window))(jQuery, window.PHP_DATA);