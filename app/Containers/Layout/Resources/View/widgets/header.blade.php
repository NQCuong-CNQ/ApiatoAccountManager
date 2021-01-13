@php
    // danh sách content trong header
    $elements = $elements ?: [];
@endphp
<div class="app-header header-shadow">
    {{-- logo start --}}
    @include('layout::partials.logo')
    {{-- logo end --}}
    <div class="app-header__content">
        {{-- Header left START --}}
        {!! Layout::header()->left() !!}
        {{-- Header left END --}}
        @foreach($elements as $element)
            {!! $element !!}
        @endforeach
        {{-- Header right START --}}
        {!! Layout::header()->right() !!}
        {{-- Header right END --}}
    </div>
</div>