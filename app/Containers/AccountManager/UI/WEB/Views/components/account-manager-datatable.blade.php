<table id="datatable-list-all" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
    <tr class="table-header">
      <th class="th-sm">Id
      </th>
      <th class="th-sm">Tên CTy
      </th>
      <th class="th-sm">Tên Domain
      </th>
      <th class="th-sm">Tên Ứng Dụng
      </th>
      <th class="th-sm">Bắt đầu sử dụng
      </th>
    </tr>
  </thead>
  <tbody></tbody>
</table>


<script type="text/javascript">
$(document).ready(function () {
  var table = $('#datatable-list-all').DataTable({
        "scrollX": true,
        "responsive": false,
        "Processing": true,
        "ServerSide": true, 
        "sAjaxSource": '{!! route('api_accountmanager_get_all_account_managers') !!}',
        "columns": [
            {data :'id'},
            {data :'company_name'},
            {data :'domain_name'},
            {data :'app_brand'},
            {data :'start_date'},
        ],

        "paging": true,
    });

  $('#datatable-list-all tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
        
        $id = table.row( this ).data()['id'];
        let url = "{{route('web_accountmanager_show',':slug')}}";
        url = url.replace(':slug', $id);
        document.location.href = url;
    } );
});

</script>