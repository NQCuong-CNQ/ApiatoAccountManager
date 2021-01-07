@extends('layouts.master')

@section('content')
<button class="btn-add">Add New</button>

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
    <tr>
      <th class="th-sm">
      </th>
      <th class="th-sm">Tên CTy hhh
      </th>
      <th class="th-sm">Tên Domain
      </th>
      <th class="th-sm">Tên Ứng Dụng
      </th>
    </tr>
    <tr>
      <th class="th-sm">
      </th>
      <th class="th-sm">Tên CTy
      </th>
      <th class="th-sm">Tên Domain
      </th>
      <th class="th-sm">Tên Ứng Dụng
      </th>
    </tr>
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
