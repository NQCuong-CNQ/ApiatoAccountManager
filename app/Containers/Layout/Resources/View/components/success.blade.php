
@if( session()->has('success') )

    @php
    // mặc định sử dụng toast để hiển thị thông báo cảnh báo
    // ngoài ra hiển thị bằng html thuần
    if($useToast === null) {

        $useToast = true;
    }

    $success = @(array)session()->get('success') ?: [];
    @endphp

    @if($success)
        @if(!$useToast)
            <div class="alert alert-success fade in alert-dismissible show">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true" style="font-size:20px">×</span>
                </button>   
                <ul class="m-0 col-md-12">
                    @foreach($success as $message)
                        <li>{!! $message !!}</li>
                    @endforeach
                </ul>
            </div>
        @else
            @php
                ob_start();
            @endphp
            <script>
                @foreach($success as $message)
                    toastr.success('{{$message}}');
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