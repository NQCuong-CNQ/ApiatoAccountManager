<div class="app-header__logo">
    {{-- Logo START --}}
    {!! Layout::logo() !!}
    {{-- Logo END --}}
    <div class="header__pane ml-auto">
        <div>
            {{-- nếu có sidebar thì mới hiển thị nút menu --}}
            @if(Layout::isEnableSidebar())
            <button type="button" class="hamburger close-sidebar-btn hamburger--elastic @if(!Layout::isSidebarCollapsed()) is-active @endif" data-class="closed-sidebar">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            @endif
        </div>
    </div>
</div>
<div class="app-header__mobile-menu">
    <div>
        {{-- nếu có sidebar thì mới hiển thị nút menu --}}
        @if(Layout::isEnableSidebar())
        <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav @if(!Layout::isSidebarCollapsed()) is-active @endif">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
        @endif
    </div>
</div>
<div class="app-header__menu">
    <span>
        <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span class="btn-icon-wrapper">
                <i class="fa fa-ellipsis-v fa-w-6"></i>
            </span>
        </button>
    </span>
</div>