@extends('layouts.master')

@section('content')
<div class="d-flex justify-content-between">
  <h3>Thông tin ứng dụng</h3>
  <div>
    <button onclick="location.href='{{ route ('home_page')}}'" class="btn-back mr-3">Quay về</button>
      <button onclick="onSubmitFormAddNew();" class="btn-save">Thêm mới</button>
  </div>
</div>

<form id="form_add_new" method="POST" action="{!! route('api_accountmanager_create_account_manager') !!}">
<div class="d-flex mt-3">
  <div class="label-addnew-container">
    <p>Tên công ty</p>
  </div>
  <div class="input-addnew-container">
  <input type="text" placeholder="Tên công ty" name="company_name">
  </div>
</div>
<div class="d-flex mt-3">
  <div class="label-addnew-container">
    <p>Tên domain</p>
  </div>
  <div class="input-addnew-container">
    <input type="text" placeholder="Tên domain" name="domain_name">
    <p>Chỉ nhâp tên domain (vd: nếu là 'buslines.phanmemve.vn' thì sẽ nhập 'buslines')</p>
  </div>
</div>
<div class="d-flex mt-3">
  <div class="label-addnew-container">
    <p>Base URL (Đường dẫn module sử dụng vd: /admin , /fronend...)</p>
  </div>
  <div class="input-addnew-container">
    <input type="text" placeholder="Base URL" name="base_url">   
    <p>Mặc định ("/"), nếu nhập '/dongphuoc' thì domain đầy đủ sẽ là 'express.phanmemve.vn/dongphuoc'</p>
  </div>
</div>
<div class="d-flex mt-3">
  <div class="label-addnew-container">
    <p>Mã ứng dụng</p>
  </div>
  <div class="input-addnew-container">
    <input type="text" placeholder="Mã ứng dụng" name="app_code">
    <p>Mã ứng dụng là tên công ty viết liền không dấu</p>
  </div>
</div>
<div class="d-flex mt-3">
  <div class="label-addnew-container">
    <p>Tên ứng dụng</p>
  </div>
  <div class="input-addnew-container">
    <input type="text" placeholder="Tên ứng dụng" name="app_name">
    <p></p>
  </div>
</div>
<div class="d-flex mt-3">
  <div class="label-addnew-container">
    <p>Chọn loại ứng dụng</p>
  </div>
  <div class="input-radio-addnew-container">
<div>
    {{ Form::radio('app_brand', '1', false, array('id'=>'app_brand_pmv')) }}
  {{ Form::label('app_brand_pmv', 'Phần mềm vé') }}
</div>
<div>
    {{ Form::radio('app_brand', '2', false, array('id'=>'app_brand_wpmv')) }}
  {{ Form::label('app_brand_wpmv', 'Website phần mềm vé') }}
</div>
<div>
      {{ Form::radio('app_brand', '3', false, array('id'=>'app_brand_pmh')) }}
  {{ Form::label('app_brand_pmh', 'Phần mềm hàng') }}
</div>
<div>
      {{ Form::radio('app_brand', '4', false, array('id'=>'app_brand_tpmh')) }}
  {{ Form::label('app_brand_tpmh', 'Tracking phần mềm hàng') }}
</div>
<div>
      {{ Form::radio('app_brand', '5', false, array('id'=>'app_brand_ns')) }}
  {{ Form::label('app_brand_ns', 'Nhân sự') }}
</div>
<div>
    {{ Form::radio('app_brand', '6', false, array('id'=>'app_brand_m')) }}
  {{ Form::label('app_brand_m', 'Manual (tự cấu hình)') }}
</div>

  </div>
</div>
<div class="d-flex mt-3">
  <div class="label-addnew-container">
    <p>Site name</p>
  </div>
  <div class="input-addnew-container">
    <input type="text" placeholder="Site name" name="site_name">
    <p>Chọn tên file config phần mềm vé</p>
  </div>
</div>
</form>
@endsection

<script type="text/javascript">
  function onSubmitFormAddNew() {
    document.getElementById("form_add_new").submit();
  }
</script>