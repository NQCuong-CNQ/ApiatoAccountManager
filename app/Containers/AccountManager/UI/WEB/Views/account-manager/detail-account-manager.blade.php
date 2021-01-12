@extends('layouts.master')

@section('content')
<div class="d-flex justify-content-between">
  <h3>Thông tin ứng dụng</h3>
  <div class="d-flex">
    <a href="{{route('web_accountmanager_index')}}" class="btn-back mr-3"><button class="btn-back">Quay về</button></a>

    <a href="{{route('web_accountmanager_edit', [$accountManager->id])}}" class="mr-3"><button class="btn-save" type="submit">Chỉnh sửa</button></a>

    <form action="{!! route('api_accountmanager_delete_account_manager', [$accountManager->id]) !!}" method="POST">
      @method('DELETE')
      @csrf
      <button class="btn-delete" type="submit">Xóa</button>               
    </form>
  </div>
</div>

@component('accountmanager::forms.form-account-manager',[
    // thành viên đưa vào form
    'accountManager'  =>  $accountManager,
    // thuộc tính
    'disabled'  =>  true,
])
@endcomponent