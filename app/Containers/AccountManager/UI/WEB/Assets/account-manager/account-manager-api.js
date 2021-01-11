
$(document).ready(function () {
  $('#dtBasicExample').DataTable({
        "scrollX": true,
        "responsive": false,
        "bServerSide": true,
        "sAjaxSource": '{!! route('api_accountmanager_get_all_account_managers') !!}',
        "columns": [
            {data :'id'},
            {data :'company_name'},
            {data :'domain_name'},
            {data :'app_brand'},
            {data :'id'},
        ],
    });

});

function showUser() {
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      var a = JSON.parse(this.responseText);
      console.log(a);
      document.getElementById("txtHint").innerHTML=a['data']['0'].app_brand;
    }
  }
  xmlhttp.open("GET",'http://api.apiatoaccountmanager/v1/accountmanagers',true);
  xmlhttp.send();
}
