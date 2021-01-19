<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
      <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{ config('app.name') }}</title>
  <!-- endinject -->
  <link rel="stylesheet" type="text/css" href="{{asset('css/account-manager/styles.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap/bootstrap.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('css/bootstrap/dataTables.bootstrap4.min.css')}}">
  <link rel="stylesheet" href="{{asset('css/sweetalert/sweetalert2.css')}}">

  <script src="{{asset('js/sweetalert2.js')}}"></script>
  <script src="{{asset('js/bootstrap/jquery-3.5.1.min.js')}}"></script>

</head>
<body>

  @yield('content')
  @include('layout::includes.phpData')
  {!!Layout::js()!!}
  
  <script src="{{asset('js/bootstrap/addons/datatables.min.js')}}"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>
</html>
