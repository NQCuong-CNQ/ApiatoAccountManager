@if($script && count($script) > 0)
<script data-exec-on-popstate>

    $(function () {
        @foreach($script as $s)
            {!! $s !!}
        @endforeach
    });
</script>
@endif