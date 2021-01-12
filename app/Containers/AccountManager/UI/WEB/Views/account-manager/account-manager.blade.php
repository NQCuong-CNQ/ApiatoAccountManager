@extends('layouts.master')

@section('content')
<h3 class="title-app">Quản lý tài khoản</h3>
<button id="btn-addnew" onclick="location.href='{{ route ('web_accountmanager_create')}}'" class="btn-add mb-4">Add New</button>

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
  <tbody>

  </tbody>
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
            {data :'id'},
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
 

// function showUser() {
//   var xmlhttp=new XMLHttpRequest();
//   xmlhttp.onreadystatechange=function() {
//     if (this.readyState==4 && this.status==200) {
//       var a = JSON.parse(this.responseText);
//       console.log(a);
//       document.getElementById("txtHint").innerHTML=a['data']['0'].app_brand;
//     }
//   }
//   xmlhttp.open("GET",'http://api.apiatoaccountmanager/v1/accountmanagers',true);
//   xmlhttp.send();
// }

</script>

@endsection
