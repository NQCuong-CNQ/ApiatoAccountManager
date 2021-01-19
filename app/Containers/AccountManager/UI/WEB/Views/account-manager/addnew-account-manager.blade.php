<div class="d-flex justify-content-between">
  <h3>{{trans("accountmanager::account-manager.headers.add_new")}}</h3>
  <div>
    <a href="{{route('web_accountmanager_index')}}" class="btn-back mr-3"><button class="btn-back">{{trans("accountmanager::account-manager.buttons.back")}}</button></a>
    <button id="btn-addnew" class="btn-save">{{trans("accountmanager::account-manager.buttons.add_new")}}</button>
  </div>
</div>

@component('accountmanager::forms.form-account-manager',[
    //id form
    'id'       =>  'form-submit',

    // thành viên đưa vào form
    'accountManager'  =>  ['id'=>'', 'company_name'=>'', 'domain_name'=>'', 'base_url'=>'', 'app_code'=>'', 'app_name'=>'', 'app_brand'=>'', 'site_name'=>''],

    // thuộc tính
    'disabled'  =>  false,
    'isNew' => true,
])
@endcomponent

@php
  JavaScript::put([
    // link API tạo mới Account Manager
    "API_CREATE_ACCOUNT_MANAGERS"  => route("api_accountmanager_create_account_manager"),
  ]);

    Layout::js(mix('js/account-manager/account-manager/form-account-manager.js'));
@endphp


