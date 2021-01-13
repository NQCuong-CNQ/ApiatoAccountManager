@php
 
    $sidebar = Layout::sidebar();
    // danh sách tất cả attribute của sidebar
    $sidebarAttributes = $sidebar->getAttributes() ?: [];
    // danh sách các class của sidebar
    $sidebarClasses = $sidebarAttributes["class"];
    unset($sidebarAttributes["class"]);

    $elements = $elements ?: [];
@endphp
<div class="app-sidebar sidebar-shadow {{$sidebarClasses}}" {!! $sidebar->attributesToHtmlString($sidebarAttributes) !!}>
    <div class="scrollbar-sidebar">
        <div class="app-sidebar__inner">
            @foreach($elements as $element)
                @php
                    if($element instanceof App\Containers\Layout\Widgets\Sidebar\Menu) {
                        $element->class("vertical-nav-menu");
                    }
                @endphp

                {!! $element !!}
            @endforeach
        </div>
    </div>
</div>
