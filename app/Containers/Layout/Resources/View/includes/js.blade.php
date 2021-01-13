@php
    $js = $js ?: [];
@endphp
@foreach($js as $src)
<script type="text/javascript" src="{{ $src }}"></script>
@endforeach