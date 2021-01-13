@php
    // danh sách các elements trong item
    $elements = $elements ?: [];
    // danh sách attributes của item
    $attributes = $attributes ?: [];
    // cờ xác định item của phải là heading hay không
    $isHeading = $isHeading ?: false;
    // cờ xác định item có đang active hay không
    $actived = $actived ?: false;
    // cờ xác định trong item có menu con đang expand
    $hasMenuExpanded = $hasMenuExpanded ?: $hasMenuExpanded;

    // lấy attribute class để bổ sung thêm class vào
    $classes = $attributes["class"] ?: "";
    unset($attributes["class"]);

    $classes = explode(" ", $classes);
    if($isHeading) {

        $classes[] = "app-sidebar__heading";
    }
    if($actived || $hasMenuExpanded) {

        $classes[] = "mm-active";
    }
    $classes = implode(" ", $classes);

    $attributeHtml = Layout::attributesToHtmlString($attributes);
    if($classes) {

        $attributeHtml = $attributeHtml . " " . Layout::attributeToHtmlString("class", $classes);
    }
@endphp
<li {!! $attributeHtml !!}>
    @foreach($elements as $element)
        {!! $element !!}
    @endforeach
</li>