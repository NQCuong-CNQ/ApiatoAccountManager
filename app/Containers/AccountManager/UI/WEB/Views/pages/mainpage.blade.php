@extends('layouts.master')

@section('content')
<button onclick="location.href='{{ route ('addNew')}}'" class="btn-add">Add New</button>

<table id="dtBasicExample" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
    <tr class="table-header">
      <th class="th-sm"> dsfdsf
      </th>
      <th class="th-sm">Tên CTy
      </th>
      <th class="th-sm">Tên Domain
      </th>
      <th class="th-sm">Tên Ứng Dụng
      </th>
    </tr>
  </thead>
  <tbody>
    @foreach($accountmanagers as $accountmanager)
    <tr>
      <td></td>
      <td>{{$accountmanager['company_name']}}</td>
      <td>{{$accountmanager['domain_name']}}</td>
      <td>{{$accountmanager['destination']}}</td>
    </tr>
    @endforeach
  </tbody>
</table>


<script type="text/javascript">
$(document).ready(function () {
  $('#dtBasicExample').DataTable({
        "scrollX": true,
        "responsive": false,
    });

});
</script>

@endsection
