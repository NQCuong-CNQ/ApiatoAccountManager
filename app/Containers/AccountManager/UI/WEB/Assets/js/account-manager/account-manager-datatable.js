import AccountManagerApi from '../account-manager/AccountManagerApi';

// scope
(function ($, phpData) {

  phpData = phpData || {};

  /**
   * @todo: Class hiển thị bảng AccountManager
   * @purpose: 
   * - mục đích: hiển thị danh sách các AccountManager và xử lý sự kiện onclick
   * @author: Cường
   * @since: 15-01-2021
   * @param 
   */
   class AccountManageDataTable{

    constructor() {
      this.API = new AccountManagerApi(phpData);
    }

    /**
     * @todo: hàm khởi tạo và load dữ liệu vào datatable
     * @purpose:
     * - mục đích khởi tạo và load dữ liệu vào datatable, khởi tạo sự kiện click vào table
     * @author: Cường
     * @since: 16-01-2021
     * @param table
    */
    initDataTable() {
      let $this = this;
      //khởi tạo và load dữ liệu
      let table = $("#datatable-list-all").DataTable({
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

      // sự kiện click vào row của table
      $('#datatable-list-all tbody').on('click', 'tr', function () {
        $this.onClickTable(table, this);
      });
    }

    /**
     * @todo: Sự kiện click vào row trong table
     * @purpose:
     * - mục đích khi click vào row thì load chuyển hướng đến trang detail của id đó
     * @author: Cường
     * @since: 16-01-2021
     * @param table
    */
    onClickTable(table, $this){
      
      if ($($this).hasClass('selected')) {
        $($this).removeClass('selected');
      } else {
        table.$('tr.selected').removeClass('selected');
        $($this).addClass('selected');
      }

      //lấy id của row để chuyển hướng đến detail
      let id = table.row($this).data()['id'];
      let api = this.API.getAPI("WEB_GET_ACCOUNT_MANAGERS_BY_ID", {
        __ACCOUNT_MANAGER_ID__ : id
      });

      location.href = api;
    }
  }

  // document ready
  $(function () {
      // khởi tạo class
      let accountManageDataTable = new AccountManageDataTable();
      // khởi chạy hàm init
      accountManageDataTable.initDataTable();
    });

}.bind(window))(jQuery, window.PHP_DATA);