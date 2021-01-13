@php
    $user             = Auth::user();
    if($user){

        $accountIsType    = $user->getAccountIsType();
        $account_username = $user->account_username;
        $account_mobile   = $user->account_mobile;
        $account_email    = $user->account_email;
        $account_code     = $user->account_code;
        $route = 'javascript:void(0);';
    
        $object = $user->getObject();
    
        if($accountIsType == $user::ACCOUNT_IS_TYPE_STAFF && $object){
    
            $account_fullname = $object->staff_fullname;
            $route            = route('web_staff_get_edit_staff', [$object->staff_uuid]);
        }elseif($object){
    
            $account_fullname = $object->partner_fullname;
            $route            = route('web_partner_get_edit_partner', [$object->supplier_uuid]);
        }
    }

@endphp
<div class="header-btn-lg pr-0">
    <div class="widget-content p-0">
        <div class="widget-content-wrapper">
            <div class="widget-content-left">
                <div class="btn-group">
                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">
                        <img width="42" class="rounded-circle" src="{{asset('images/avatar-user.png')}}" alt="">
                        <i class="fa fa-angle-down ml-2 opacity-8"></i>
                    </a>
                    <div tabindex="-1" role="menu" aria-hidden="true" class="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(60px, 44px, 0px);">
                        <div class="dropdown-menu-header">
                            <div class="dropdown-menu-header-inner bg-light text-dark p-2">
                                <div class="menu-header-image opacity-2" style="background-image: url('assets/images/dropdown-header/city3.jpg');"></div>
                                <div class="menu-header-content text-left">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left">
                                                <div class="widget-heading">
                                                    {{trans("layout::headers.titles.hello")}} {{$account_fullname}} !
                                                </div>
                                                <div class="widget-subheading opacity-8">
                                                    <b>{{trans("layout::headers.titles.email")}} : {{$account_email}}</b>
                                                </div>
                                                <div class="widget-subheading opacity-8">
                                                    <b>{{trans("layout::headers.titles.user_name")}} : {{$account_username}}</b>
                                                </div>
                                            </div>
                                            <div class="widget-content-right mr-2">
                                                <a href="{{route("web_get_authentication_logout")}}" class="btn-pill btn-shadow btn-shine btn btn-focus">
                                                    {{trans("layout::headers.titles.logout")}}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="scroll-area-xs" style="height: 75px;">
                            <div class="scrollbar-container ps">
                                <ul class="nav flex-column">
                                    <li class="nav-item-header nav-item">
                                        {{trans("layout::headers.titles.info")}}
                                    </li>
                                    <li class="nav-item">
                                        <a href="{{$route}}" class="nav-link font-weight-500">
                                            {{trans("layout::headers.titles.change_profile")}}
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="{{route('web_authorization_change_password_current_auth')}}" class="nav-link font-weight-500">
                                            {{trans("layout::headers.titles.change_password")}}
                                        </a>
                                    </li>
                                </ul>
                            <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="widget-content-left  ml-3 header-user-info">
                <div class="widget-heading">
                    {{$account_fullname}}
                </div>
                <div class="widget-subheading">
                    {{$account_email}}
                </div>
            </div>
            
        </div>
    </div>
</div>