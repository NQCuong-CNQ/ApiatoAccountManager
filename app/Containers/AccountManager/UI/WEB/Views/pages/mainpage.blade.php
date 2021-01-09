@extends('layouts.master')

@section('content')
<button onclick="location.href='{{ route ('addNew')}}'" class="btn-add mb-4">Add New</button>

<button onclick="showUser();">show</button>
<div id="txtHint"><b>Person info will be listed here.</b></div>

<table id="dtBasicExample" class="table table-striped table-bordered" cellspacing="0" width="100%">
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
  $('#dtBasicExample').DataTable({
        "scrollX": true,
        "responsive": false,
        "bServerSide": true,
        "sAjaxSource": '{!! route('api_accountmanager_get_all_account_managers') !!}',
        "columns": [
            {data :'id'},
            {data :'company_name'},
            {data :'domain_name'},
            {data :'app_brand'},
            {data :'id'},
        ],
    });

});

function showUser() {
  // if (str=="") {
  //   document.getElementById("txtHint").innerHTML="";
  //   return;
  // }
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      var a = JSON.parse(this.responseText);
      console.log(a);
      document.getElementById("txtHint").innerHTML=a['data']['0'].app_brand;
    }
  }
  xmlhttp.open("GET",'http://api.apiatoaccountmanager/v1/accountmanagers',true);
  xmlhttp.send();
}

</script>

@endsection
