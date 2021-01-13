@php
    // danh sách content trong header bên phải
    $elements = $elements ?: [];
@endphp
<div class="app-header-right">
    {{-- header-right start --}}
    @foreach($elements as $element)
        {!! $element !!}
    @endforeach
    {{-- header-right right --}}
</div>