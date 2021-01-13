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
    $classes[] = "nav-item";
    $classes = implode(" ", $classes);

    // chuyển từ danh sách attribute sang html
    $attributeHtml = Layout::attributesToHtmlString($attributes);
    if($classes) {

        $attributeHtml = $attributeHtml . " " . Layout::attributeToHtmlString("class", $classes);
    }
@endphp
<li {!! $attributeHtml !!}>
    @php
        $popoverContent = [];
    @endphp
    @foreach($elements as $element)
        {{-- nếu là item của nav thì hiển thị, còn các element còn lại đẩy vào popover --}}
        @if(
            $element instanceof App\Containers\Layout\Widgets\Navbar\NavbarItem
            || $element instanceof App\Containers\Layout\Widgets\Navbar\NavbarLink
            || $element instanceof App\Containers\Layout\Widgets\Navbar\NavbarIcon
        )
            {!! $element !!}
        @else
            @php
                $popoverContent[] = $element;
            @endphp
        @endif
    @endforeach
    <div class="rm-max-width">
        <div class="d-none popover-custom-content">
            <div class="dropdown-mega-menu">
                @foreach($popoverContent as $element)
                    {!! $element !!}
                @endforeach
            </div>
        </div>
    </div>
</li>