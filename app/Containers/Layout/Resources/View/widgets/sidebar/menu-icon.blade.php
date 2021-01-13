@php
    // danh sách các elements trong item
    $elements = $elements ?: [];
    // danh sách attributes của item
    $attributes = $attributes ?: [];

    // lấy attribute class để bổ sung thêm class vào
    $classes = $attributes["class"] ?: "";
    unset($attributes["class"]);

    $classes = explode(" ", $classes);
    $classes[] = "metismenu-icon";
    $classes = implode(" ", $classes);

    $attributeHtml = Layout::attributesToHtmlString($attributes);
    if($classes) {

        $attributeHtml = $attributeHtml . " " . Layout::attributeToHtmlString("class", $classes);
    }
@endphp
<i {!! $attributeHtml !!}>
    @foreach($elements as $element)
        {!! $element !!}
    @endforeach
</i>