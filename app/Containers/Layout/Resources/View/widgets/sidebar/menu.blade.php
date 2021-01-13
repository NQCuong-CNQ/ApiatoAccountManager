@php
    // danh sách tất cả item con (li)
    $elements = $elements ?: [];
    // danh sách attributes của ul
    $attributes = $attributes ?: [];

    // lấy attribute class để bổ sung thêm class vào
    $classes = $attributes["class"] ?: "";
    unset($attributes["class"]);

    $classes = explode(" ", $classes);
    // nếu menu đang mở thì bổ sung class show tất cả item
    if(!$collapsed) {

        $classes[] = "mm-show";
    }
    $classes = implode(" ", $classes);

    $attributeHtml = Layout::attributesToHtmlString($attributes);
    if($classes) {

        $attributeHtml = $attributeHtml . " " . Layout::attributeToHtmlString("class", $classes);
    }
@endphp

<ul {!! $attributeHtml !!}>
    @foreach($elements as $element)
        {!! $element !!}
    @endforeach
</ul>