@php
    // danh sách các elements trong item
    $elements = $elements ?: [];
    // danh sách attributes của item
    $attributes = $attributes ?: [];
    // cờ xác định có hiển thị icon up/down hay không
    $caret = $caret ?: false;
    // icon menu
    $icon = $icon ?: "";
    // cờ xác định trong item có 1 menu và 1 menu con đang mở
    // thì cho đổi icon caret up|dowm
    $hasMenuExpanded = $hasMenuExpanded ?: false;

    // lấy attribute class để bổ sung thêm class vào
    $classes = $attributes["class"] ?: "";
    unset($attributes["class"]);

    $classes = explode(" ", $classes);
    $classes = implode(" ", $classes);

    $attributeHtml = Layout::attributesToHtmlString($attributes);
    if($classes) {

        $attributeHtml = $attributeHtml . " " . Layout::attributeToHtmlString("class", $classes);
    }
@endphp
<a {!! $attributeHtml !!}>
    {!! $icon !!}
    @foreach($elements as $element)
        {!! $element !!}
    @endforeach
    
    @if($caret)
    <i class="metismenu-state-icon @if($hasMenuExpanded) pe-7s-angle-up @else pe-7s-angle-down @endif caret-left"></i>
    @endif
</a>