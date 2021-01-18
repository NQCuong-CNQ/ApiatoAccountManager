<table id="datatable-list-all" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
    <tr class="table-header">
      <th class="th-sm">{{trans("accountmanager::account-manager.labels.id")}}
      </th>
      <th class="th-sm">{{trans("accountmanager::account-manager.labels.company_name")}}
      </th>
      <th class="th-sm">{{trans("accountmanager::account-manager.labels.domain_name")}}
      </th>
      <th class="th-sm">{{trans("accountmanager::account-manager.labels.app_name")}}
      </th>
      <th class="th-sm">{{trans("accountmanager::account-manager.labels.start_date")}}
      </th>
    </tr>
  </thead>
  <tbody></tbody>
</table>

@php
  JavaScript::put([
    // link API lấy danh sách Account Managers
    "API_GET_ALL_ACCOUNT_MANAGERS" => route("api_accountmanager_get_all_account_managers"),

    // link API lấy Account Manager theo id
    "WEB_GET_ACCOUNT_MANAGERS_BY_ID" => route("web_accountmanager_show", ["__ACCOUNT_MANAGER_ID__"]),
  ]);
  
  Layout::js(mix('js/account-manager/account-manager/AccountManagerApi.js'));
  Layout::js(mix('js/account-manager/account-manager/account-manager-datatable.js'));
@endphp