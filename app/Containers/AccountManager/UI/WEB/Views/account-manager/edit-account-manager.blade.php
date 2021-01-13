@extends('layouts.master')

@section('content')
<div class="d-flex justify-content-between">
  <h3>Thông tin ứng dụng</h3>
  <div class="d-flex">
    <button onclick="location.href='{{ route ('web_accountmanager_show', [$accountManager->id])}}'" class="btn-back mr-3">Quay về</button>

    <button onclick="location.href='{{ route ('web_accountmanager_show', [$accountManager->id])}}'" class="btn-save mr-3">Lưu</button>
  </div>
</div>

@component('accountmanager::forms.form-account-manager',[
    // thành viên đưa vào form
    'accountManager'  =>  $accountManager,
    // thuộc tính
    'disabled'  =>  false,
    'isNew' => false,
])
@endcomponent
