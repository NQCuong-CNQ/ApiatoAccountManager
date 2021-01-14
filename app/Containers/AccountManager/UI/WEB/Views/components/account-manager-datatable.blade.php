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

{!!
  Layout::js(mix('js/account-manager/account-manager-api.js'));
  Layout::js(mix('js/account-manager/route-account-manager.js'));
!!}