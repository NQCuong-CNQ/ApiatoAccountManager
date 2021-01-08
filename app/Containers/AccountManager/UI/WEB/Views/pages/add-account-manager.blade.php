@extends('layouts.master')

@section('content')
<div class="d-flex justify-content-between">
  <h3>Thông tin ứng dụng</h3>
  <div>
    <button onclick="location.href='{{ route ('home_page')}}'" class="btn-back mr-3">Quay về</button>
    <button class="btn-save">Lưu</button>
  </div>

</div>

<div class="d-flex mt-3">
  <div class="label-addnew-container">
    <p>Tên domain</p>
  </div>
  <div class="input-addnew-container">
    <input placeholder="Tên domain" type="" name="">
    <p>Chỉ nhâp tên domain (vd: nếu là 'buslines.phanmemve.vn' thì sẽ nhập 'buslines')</p>
  </div>
</div>
<div class="d-flex mt-3">
  <div class="label-addnew-container">
    <p>Base URL (Đường dẫn module sử dụng vd: /admin , /fronend...)</p>
  </div>
  <div class="input-addnew-container">
    <input placeholder="/" type="" name="">
    <p>Mặc định ("/"), nếu nhập '/dongphuoc' thì domain đầy đủ sẽ là 'express.phanmemve.vn/dongphuoc'</p>
  </div>
</div>
<div class="d-flex mt-3">
  <div class="label-addnew-container">
    <p>Mã ứng dụng</p>
  </div>
  <div class="input-addnew-container">
    <input placeholder="Mã ứng dụng" type="" name="">
    <p>Mã ứng dụng là tên công ty viết liền không dấu</p>
  </div>
</div>

<div class="d-flex mt-3">
  <div class="label-addnew-container">
    <p>Site name</p>
  </div>
  <div class="input-addnew-container">
    <input placeholder="" type="" name="">
    <p>Chọn tên file config phần mềm vé</p>
  </div>
</div>



@endsection
