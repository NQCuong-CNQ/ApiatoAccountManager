<div class="d-flex justify-content-between">
  <h3>{{trans("accountmanager::account-manager.headers.edit")}}</h3>
  <div class="d-flex">
    <button onclick="location.href='{{ route ('web_accountmanager_show', [$accountManager->id])}}'" class="btn-back mr-3">{{trans("accountmanager::account-manager.buttons.back")}}</button>

    <button id="btn-update" class="btn-save">{{trans("accountmanager::account-manager.buttons.save")}}</button>
  </div>
</div>

@component('accountmanager::forms.form-account-manager',[
    //id form
    'id'       =>  'form-submit',

    // thành viên đưa vào form
    'accountManager'  =>  $accountManager,
    
    // thuộc tính
    'disabled'  =>  false,
    'isNew' => false,
])
@endcomponent

@php
    JavaScript::put([
      // AccountMmanager ID
      "ACCOUNT_MANAGER_ID" => $accountManager->id,

      // link API update Account Manager
      "API_UPDATE_ACCOUNT_MANAGERS" => route("api_accountmanager_update_account_manager", ["__ACCOUNT_MANAGER_ID__"]),
    ]);

    Layout::js(mix('js/account-manager/account-manager/form-account-manager.js'));
@endphp

