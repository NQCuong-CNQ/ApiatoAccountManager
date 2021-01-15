@extends('layouts.master')

@section('content')
<div class="d-flex justify-content-between">
  <h3>Thông tin ứng dụng</h3>
  <div class="d-flex">
    <a href="{{route('web_accountmanager_index')}}" class="btn-back mr-3"><button class="btn-back">Quay về</button></a>

    <a href="{{route('web_accountmanager_edit', [$accountManager->id])}}" class="mr-3"><button class="btn-save" type="submit">Chỉnh sửa</button></a>

    <button id="btn-delete" class="btn-delete">Xóa</button>        

  </div>
</div>

@component('accountmanager::forms.form-account-manager',[
    //id form
    'id'       =>  'form-submit',
    
    // thành viên đưa vào form
    'accountManager'  =>  $accountManager,

    // thuộc tính
    'disabled'  =>  true,
    'isNew' => false,
])
@endcomponent

@php
  JavaScript::put([
    // AccountMmanager ID
    "ACCOUNT_MANAGER_ID" => $accountManager->id,
      
    // link API xóa Account Manager
    "API_DELETE_ACCOUNT_MANAGERS" => route("api_accountmanager_delete_account_manager", ["__ACCOUNT_MANAGER_ID__"]),

    // link WEB trở về trang home
    "WEB_ACCOUNT_MANAGERS_INDEX" => route("web_accountmanager_index"),
  ]);

  Layout::js(mix('js/account-manager/account-manager/form-account-manager.js'));
@endphp