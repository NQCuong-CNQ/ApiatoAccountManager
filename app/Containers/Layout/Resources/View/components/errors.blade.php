@php
    // mặc định sử dụng toast để hiển thị lỗi
    // ngoài ra hiển thị bằng html thuần
    if($useToast === null) {

        $useToast = true;
    }
@endphp

@if( $errors && count($errors) > 0 )

    @if(!$useToast)
        <div class="alert alert-danger fade in alert-dismissible show">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" style="font-size:20px">×</span>
            </button>   
            <ul class="m-0 col-md-12">
                @foreach($errors->all() as $error)
                    <li>{!! $error !!}</li>
                @endforeach
            </ul>
        </div>
    @else
         @php
            ob_start();
        @endphp
        <script>
            toastr.options.closeDuration = 3000;
            @foreach($errors->all() as $error)
                toastr.error('{{$error}}');
            @endforeach
        </script>
        @php
            Layout::component('notification-alert-toast');
            $toastJs = ob_get_clean();
            $toastJs = str_replace(["<script>", "</script>"], "", $toastJs);

            Layout::script($toastJs);
        @endphp
    @endif
@endif