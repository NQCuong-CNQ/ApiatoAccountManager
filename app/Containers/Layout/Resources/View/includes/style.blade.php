@if($style && count($style) > 0)
<style type="text/css">
    @foreach($style as $s)
        {!! $s !!}
    @endforeach
</style>
@endif