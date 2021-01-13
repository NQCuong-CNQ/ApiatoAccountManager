@extends('layouts.master')

@section('content')
<div class="d-flex justify-content-between">
  <h3>Thông tin ứng dụng</h3>
  <div>
    <a href="{{route('web_accountmanager_index')}}" class="btn-back mr-3"><button class="btn-back">Quay về</button></a>
    <a class="btn-save"><button class="btn-save">Thêm mới</button></a>
  </div>
</div>

@component('accountmanager::forms.form-account-manager',[
    // thành viên đưa vào form
    'accountManager'  =>  ['id'=>'', 'company_name'=>'', 'domain_name'=>'', 'base_url'=>'', 'app_code'=>'', 'app_name'=>'', 'app_brand'=>'', 'site_name'=>''],
    // thuộc tính
    'disabled'  =>  false,
    'isNew' => true,
])
@endcomponent

@endsection
