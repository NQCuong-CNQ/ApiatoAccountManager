@extends('layouts.master')

@section('content')
<div class="d-flex justify-content-between">
  <h3>Thông tin ứng dụng</h3>
  <div>
    <a href="{{route('web_accountmanager_index')}}" class="btn-back mr-3"><button class="btn-back">Quay về</button></a>
    <button id="btn-submit" class="btn-save">Thêm mới</button>
  </div>
</div>

@component('accountmanager::forms.form-account-manager',[
    //id form
    'id'       =>  'form-submit',
    // link form
    'url'       =>  route("api_accountmanager_create_account_manager"),
    // form method
    'method'    =>  "POST",
    // thành viên đưa vào form
    'accountManager'  =>  ['id'=>'', 'company_name'=>'', 'domain_name'=>'', 'base_url'=>'', 'app_code'=>'', 'app_name'=>'', 'app_brand'=>'', 'site_name'=>''],
    // thuộc tính
    'disabled'  =>  false,
    'isNew' => true,
])
@endcomponent

@php
  Layout::js(mix('js/account-manager/route-account-manager.js'));
@endphp

@endsection

