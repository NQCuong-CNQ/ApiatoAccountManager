
@if( session()->has('info') )

    @php
    // mặc định sử dụng toast để hiển thị thông báo cảnh báo
    // ngoài ra hiển thị bằng html thuần
    if($useToast === null) {

        $useToast = true;
    }

    $info = @(array)session()->get('info') ?: [];
    @endphp

    @if($info)
        @if(!$useToast)
            <div class="alert alert-info fade in alert-dismissible show">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true" style="font-size:20px">×</span>
                </button>   
                <ul class="m-0 col-md-12">
                    @foreach($info as $message)
                        <li>{!! $message !!}</li>
                    @endforeach
                </ul>
            </div>
        @else
            @php
                ob_start();
            @endphp
            <script>
                @foreach($info as $message)
                    toastr.info('{!!$message!!}');
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
@endif