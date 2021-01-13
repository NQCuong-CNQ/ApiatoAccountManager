@php
    $css = $css ?: [];
@endphp
@foreach($css as $href)
    <link rel="stylesheet" href="{{ $href }}">
@endforeach