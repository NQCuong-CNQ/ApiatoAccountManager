{{-- architectui-pro-1.3.0 --}}
@php
    $headers = $headers ?: []; 

    Layout::boot();
@endphp
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
        <!-- Disable tap highlight on IE -->
        <meta name="msapplication-tap-highlight" content="no">

        <title>{{$headers["title"]}}</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        {{-- mã công ty --}}
        <meta name="company-app-code" content="{{ config("company.app_code") }}">
        {{-- truyền mã công ty trên header --}}
        <meta name="app-code-header-name" content="{{ config("configs-container.app_code_header_name") }}">
        {{-- <link rel="stylesheet" href="{{mix("/vendor/reset/reset.css")}}"> --}}
        <link rel="shortcut icon" href="{!! asset('images/favicon.png')!!}">
        
        {!! Layout::baseCss() !!}
        {!! Layout::css() !!}
        @yield('css')
        @stack('css')

        {!! Layout::headerJs() !!}
    </head>

    <body>
        @yield("content")

        {{-- DRAWER START --}}
        {{-- @include('layout::partials.drawer') --}}
        {{-- DRAWER END --}}
        @include('layout::includes.phpData')
        {{-- JS --}}
        {!! Layout::baseJs() !!}

        {{-- /inline js --}}
        {!! Layout::js() !!}

        {{-- /JS --}}
        {!! Layout::script() !!}
        {{-- inline js --}}
        @yield('script')
        @stack('scripts')
    </body>
</html>