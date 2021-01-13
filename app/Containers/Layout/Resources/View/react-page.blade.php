@php
    $headers = $headers ?: [];
    $elements = $elements ?: [];

    Layout::baseJs([
        mix("/js/manifest.js"),
        mix("/js/vendor.js"),
        mix("/js/app.js"),
        mix("/vendor/architectui-pro/components/jquery-hook/jquery-hook.js"),
    ]);

    Layout::baseCss([
        mix("/css/app.css")
    ]);
@endphp
@extends('layout::master', [
    'headers' => $headers
])
@section('content')
    <div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar  @if(Layout::isSidebarCollapsed()) closed-sidebar @endif">
        {{-- Main content --}}
        {{-- Header START --}}
        {!! Layout::header() !!}
        {{-- Header END --}}
        {{-- THEME OPTIONS START --}}
        {{-- @include('layout::partials.theme-options') --}}
        {{-- THEME OPTIONS END --}}
        <div class="app-main">
            {{-- sidebar --}}
            @if(Layout::isEnableSidebar())
                {!!Layout::sidebar()!!}
            @endif
            {{-- /sidebar --}}
            
            <div class="app-main__outer w-100">
                <div class="app-main__inner">
                
                    @component('layout::components.errors')
                    @endcomponent
                    {{-- partial-block start --}}
                    @foreach($elements as $element)
                        {!! $element !!}
                    @endforeach
                    {{-- partial-block end --}}
                </div>
                {{-- @include('layout::partials.footer') --}}
            </div>
        </div>
        {{-- /.Main content --}}
    </div>
    {!! Layout::html() !!}
@endsection