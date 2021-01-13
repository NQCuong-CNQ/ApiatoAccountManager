@php
    // danh sách content trong header bên trái
    $elements = $elements ?: [];
@endphp
<div class="app-header-left">
    {{-- header-left start --}}
    @foreach($elements as $element)
        {!! $element !!}
    @endforeach
    {{-- header-left end --}}
</div>