<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AccountManager</title>
  <!-- bootstrap -->
<!--   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"> -->
<!--   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script> -->
<!--   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script> -->

  <!-- add css -->
  <link rel="stylesheet" type="text/css" href="{{asset('resources/css/styles.css')}}">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.23/css/dataTables.bootstrap4.min.css">
    <script src="{{asset('resources/js/bootstrap/jquery-3.5.1.min.js')}}"></script>

  <!-- fontawesome -->
  <!-- <script src="https://kit.fontawesome.com/3b420fbe16.js" crossorigin="anonymous"></script> -->

</head>
<body>
  <!-- BEGIN Header -->
  <!-- @include('accountmanager::layouts.header') -->
  <!-- END Header -->

  <!-- BEGIN PAGES -->
  @yield('content')
  <!-- END PAGES -->

  <!-- BEGIN Header -->
  <!-- @include('accountmanager::layouts.footer') -->
  <!-- END Header -->

<!--   javascript -->
<!--   <script src="{{asset('public/js/increment.js')}}"></script>
  <script src="{{asset('public/js/alert.js')}}"></script>
  <script src="{{asset('public/js/userinfo.js')}}"></script>
  <script src="{{asset('public/js/slick.js')}}"></script> -->

  <script src="{{asset('resources/js/bootstrap/addons/datatables.min.js')}}"></script>
</body>
</html>
