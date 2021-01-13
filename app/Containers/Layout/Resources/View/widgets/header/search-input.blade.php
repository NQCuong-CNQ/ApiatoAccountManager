@php
    // danh sách content trong form search
    $elements = $elements ?: [];
    // placeholder cho input search
    $placeholder = $placeholder ?: "";
    // giá trị đang search
    $value = $value ?: "";
@endphp
<div class="search-wrapper">
    <div class="input-holder">
        <input type="text" class="search-input" placeholder="{{$placeholder}}" value="{{$value}}">
        <button class="search-icon"><span></span></button>
    </div>
    <button class="close"></button>
    @foreach($elements as $element)
        {!! $element !!}
    @endforeach
</div>