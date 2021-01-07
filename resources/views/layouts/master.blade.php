<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- endinject -->
    <link rel="shortcut icon" href="{!! asset('images/favicon.png')!!}">
    @yield('css')
    @stack('css')
</head>

<body>
    <h1>xyz</h1>
    @yield('content')
<!--     <script src="{{ mix('/js/users/app.js') }}"></script> -->
    @yield('script')
    <!-- @stack('scripts') -->
</body>

</html>
