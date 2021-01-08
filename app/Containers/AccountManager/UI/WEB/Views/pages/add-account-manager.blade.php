@extends('layouts.master')

@section('content')
<div class="d-flex justify-content-between">
  <h3>Thông tin ứng dụng</h3>
  <div>
    <button onclick="location.href='{{ route ('home_page')}}'" class="btn-add">Quay về</button>
    <button class="btn-add">Lưu</button>
  </div>

</div>

<div class="row">
  <div>
    <div class="col-3">
      <p>Tên domain</p>
    </div>
    <div class="col-6">
      <input type="" name="">
      <p>Chỉ nhâp tên domain (vd: nếu là 'buslines.phanmemve.vn' thì sẽ nhập 'buslines')</p>
    </div>
  </div>

</div>

@endsection
