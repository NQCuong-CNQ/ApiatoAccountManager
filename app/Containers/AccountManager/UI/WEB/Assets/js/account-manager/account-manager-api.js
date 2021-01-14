$(document).ready(function () {
  var table = $('#datatable-list-all').DataTable({
        "scrollX": true,
        "responsive": false,
        "Processing": true,
        "ServerSide": true, 
        "sAjaxSource": 'http://api.apiatoaccountmanager/v1/accountmanagers',
        "columns": [
            {data :'id'},
            {data :'company_name'},
            {data :'domain_name'},
            {data :'app_brand'},
            {data :'start_date'},
        ],

        "paging": true,
    });

    $('#datatable-list-all tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
        
        $id = table.row( this ).data()['id'];
        document.location.href = "http://apiatoaccountmanager/accountmanagers/"+$id;
    } );
});
