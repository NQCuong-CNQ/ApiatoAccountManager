@php
    // danh sách item (menu) của navbar
    $elements = $elements ?: [];
@endphp

<ul class="header-megamenu nav">
    @foreach($elements as $element)
        {!! $element !!}
    @endforeach
</ul>