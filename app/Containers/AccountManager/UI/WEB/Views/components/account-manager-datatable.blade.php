<table id="datatable-list-all" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
    <tr class="table-header">
      <th class="th-sm">Id
      </th>
      <th class="th-sm">Tên CTy
      </th>
      <th class="th-sm">Tên Domain
      </th>
      <th class="th-sm">Tên Ứng Dụng
      </th>
      <th class="th-sm">Bắt đầu sử dụng
      </th>
    </tr>
  </thead>
  <tbody></tbody>
</table>

@php
  JavaScript::put([
    // link API lấy danh sách Account Managers
    "API_GET_ALL_ACCOUNT_MANAGERS"                   => route("api_accountmanager_get_all_account_managers"),

    // link API lấy Account Manager theo id
    "API_GET_ACCOUNT_MANAGERS_BY_ID"                   => route("api_accountmanager_find_account_manager_by_id", [
            "__ACCOUNT_MANAGER_ID__"
        ]),
  ]);

  Layout::js(mix('js/account-manager/includes/BaseApi.js'));
  Layout::js(mix('js/account-manager/account-manager/account-manager-api.js'));
  Layout::js(mix('js/account-manager/account-manager/route-account-manager.js'));
@endphp