import 'bootstrap-table';

require('datatables.net-bs4');
require('datatables.net-responsive');
require('datatables.net-responsive-bs4');
require('datatables.net-fixedheader');
require('datatables.net-fixedheader-bs4');
require('datatables.net-fixedcolumns');
require('datatables.net-fixedcolumns-bs4');

require('datatables.net-autofill-bs4');
// require('datatables.net-editor-bs4');
require('datatables.net-buttons-bs4');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.print.js');
require('datatables.net-keytable-bs4');
require('datatables.net-colreorder-bs4');
require('datatables.net-responsive-bs4');
require('datatables.net-rowgroup-bs4');
require('datatables.net-rowreorder-bs4');
require('datatables.net-searchpanes-bs4');
require('datatables.net-select-bs4');

/**
 * @todo hàm hỗ trợ fix các class theo ý muốn
 * @author Nguyễn Chiến
 * @since 07-07-2020
 * 
 * https://legacy.datatables.net/styling/custom_classes
 * 
 * sFilter: "dataTables_filter"
 * sFilterInput: "form-control form-control-sm"
 * sFooterTH: ""
 * sHeaderTH: ""
 * sInfo: "dataTables_info"
 * sJUIFooter: ""
 * sJUIHeader: ""
 * sLength: "dataTables_length"
 * sLengthSelect: "form-control form-control-sm"
 * sNoFooter: "no-footer"
 * sPageButton: "paginate_button page-item"
 * sPageButtonActive: "current"
 * sPageButtonDisabled: "disabled"
 * sPaging: "dataTables_paginate paging_"
 * sProcessing: "dataTables_processing panel panel-default"
 * sRowEmpty: "dataTables_empty"
 * sScrollBody: "dataTables_scrollBody"
 * sScrollFoot: "dataTables_scrollFoot"
 * sScrollFootInner: "dataTables_scrollFootInner"
 * sScrollHead: "dataTables_scrollHead"
 * sScrollHeadInner: "dataTables_scrollHeadInner"
 * sScrollWrapper: "dataTables_scroll"
 * sSortAsc: "sorting_asc"
 * sSortColumn: "sorting_"
 * sSortDesc: "sorting_desc"
 * sSortIcon: ""
 * sSortJUI: ""
 * sSortJUIAsc: ""
 * sSortJUIAscAllowed: ""
 * sSortJUIDesc: ""
 * sSortJUIDescAllowed: ""
 * sSortJUIWrapper: ""
 * sSortable: "sorting"
 * sSortableAsc: "sorting_asc_disabled"
 * sSortableDesc: "sorting_desc_disabled"
 * sSortableNone: "sorting_disabled"
 * sStripeEven: "even"
 * sStripeOdd: "odd"
 * sTable: "dataTable"
 * sWrapper: "dataTables_wrapper dt-bootstrap4"
 */
$.extend($.fn.dataTableExt.oStdClasses, {
    "sWrapper": "dataTables_wrapper dt-bootstrap4",
    "sFilterInput": "form-control form-control-sm shadow-none",
    "sLengthSelect": "form-control form-control-sm shadow-none",
    'sInfo': "dataTables_info pt-0 font-weight-500",
    "sProcessing": ""
});