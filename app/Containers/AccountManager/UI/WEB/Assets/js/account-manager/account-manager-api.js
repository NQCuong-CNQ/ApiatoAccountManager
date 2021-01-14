import BaseApi from '../includes/BaseApi';

(function ($, phpData) {
    
  phpData = phpData || {};

  class AccountManagerApi extends BaseApi{

    constructor(APIs) {
      super(APIs);
    }

    initDataTable() {
      var data= window.PHP_DATA;
        
      var table = $("#datatable-list-all").DataTable({
            "scrollX": true,
            "responsive": false,
            "Processing": true,
            "ServerSide": true, 
            "sAjaxSource": data['API_GET_ALL_ACCOUNT_MANAGERS'],
            "columns": [
                {data :'id'},
                {data :'company_name'},
                {data :'domain_name'},
                {data :'app_name'},
                {data :'start_date'},
            ],

            "paging": true,
        });

      $('#datatable-list-all tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
        } else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
        }

        var id = table.row(this).data()['id'];

        var api = getAPI("API_GET_ACCOUNT_MANAGERS_BY_ID", {
          __ACCOUNT_MANAGER_ID__ : id
        });
      });
    }
  }
  // document ready
  $(function () {
      // khởi tạo class
      var accountManagerApi = new AccountManagerApi(phpData);
      // khởi chạy hàm init
      accountManagerApi.initDataTable();
  });
}.bind(window))(jQuery, window.PHP_DATA);