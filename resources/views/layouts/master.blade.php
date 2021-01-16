<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
      <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AccountManager</title>
  <!-- endinject -->
  <link rel="stylesheet" type="text/css" href="{{asset('css/styles.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('css/dataTables.bootstrap4.min.css')}}">
  <link rel="stylesheet" href="{{asset('css/sweetalert2.css')}}">

  <script src="{{asset('js/sweetalert2.js')}}"></script>
  <script src="{{asset('js/bootstrap/jquery-3.5.1.min.js')}}"></script>

</head>
<body>

  @yield('content')
  @include('layout::includes.phpData')
  {!!Layout::js()!!}
  
  <script src="{{asset('js/bootstrap/addons/datatables.min.js')}}"></script>

</body>
</html>
