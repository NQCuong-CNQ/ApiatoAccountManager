{{-- view render ra thẻ div logo theo công ty thành viên lấy từ field logo_base64 database tài khoản --}}
{{-- <div class="logo-src" @if(config('company.info.logo_base64')) style="background:unset" @endif>
    @if(config('company.info.logo_base64'))
        <a href="/">
            <img src="{{config('company.info.logo_base64')}}" style="height:100%"><img>
        </a>
    @endif
</div> --}}
<div class="logo-src" style="background:unset; height: 40px; width: 100px;">
    <a href="/">
        <img src="{!! config("company.info.logo") !!}" style="height:100%"><img>
    </a>
</div>