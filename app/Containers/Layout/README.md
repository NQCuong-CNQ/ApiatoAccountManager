### Layout Apiato Container

# Chức năng
    - quản lý layout, template
    - sử dụng theme tại /docs/architectui-html-gulp-pro-theme

    - Xem ví dụ mẫu ở /docs/architectui-html-gulp-pro-theme/dist/example-html-pages
    - Copy code mẫu ở tương ứng ở /docs/architectui-html-gulp-pro-theme/src/DemoPages

# Concept:
    1. Dùng laravel mix để public template ra ngoài folder public
        >     npm run dev   # cho lập trình
        >     npm run pro # cho production

    2. Layout:
        + Master.blade.php là layout master
        + Index.blade.php là layout hay sử dụng (cho admin) bao gồm
            + header
            + navbar
                - menu left
                - menu right
            + footer
            + sidebar

        + Usage: 
            + trong Controller của web của bất kỳ Container nào
                - inject Layout\Content vào hàm trong controller

                    >     public function registerUser(Content $content) {...}

            - khai báo dòng và cột vào content, return về $content

                >   return $content->title("tiêu đề")
                        ->description("mô tả")
                        ->row(function($row) {

                        $row->column(12, view('user::register-user'));
                        })
                    ;

    3. Khởi tạo layout:

        >       
                // set logo
                Layout::logo('<div class="logo-src"></div>');

                // khởi tạo header
                Layout::header(function($header) {

                    $header->append("header");
                });

                // khởi tạo sidebar
                Layout::sidebar(function($sidebar) {

                    // khởi tạo danh sách menu
                    $sidebar->menu(function($menu) {

                        // tiêu đề 1 nhóm menu
                        $menu->item("Nhóm menu")->heading();
                        // các item con của menu
                        $menu->link("trang chủ", "/")->icon("pe-7s-rocket");
                        $menu->icon("pe-7s-rocket", "Thành viên")
                            // tạo ra 1 menu con của item thành viên
                            ->menu(function($menu) {

                                // active link
                                $menu->link("Đăng ký", "/register")->active();
                                $menu->link("Danh sách thành viên", "/users");
                            })
                        ;
                    });
                });

                // khởi tạo header
                Layout::header(function($header) {
                    
                    $header->left(function($headerLeft) {

                        // input search
                        $headerLeft->searchInput(function($searchInput) {

                            $searchInput->placeholder(trans("layout::headers.placeholders.search_input"))
                                ->value("")
                            ;
                        });
                        $headerLeft->append($searchInput);

                        // thanh navbar
                        $headerLeft->navbar(function($navbar) {

                            // menu dạng popover
                            $navbar->link("Test nav popover")
                                ->icon("pe-7s-gift")
                                ->type("popover")
                            ;
                            $navbar->link("Test nav")
                                ->icon("pe-7s-gift")
                                ->type("dropdown")
                            ;
                        });
                    });
                    $header->right(function($headerRight) {
                        
                    });
                });
    4. Sử dụng

        Sử dụng layout:

            use Layout\Content;
            
            /**
            * @todo màn hình Form Đăng lý mới 1 user
            * - sử dụng API /v1/register để đăng ký user
            * @author Croco
            * @since 10-05-2020
            * @return Content
            */
            public function registerUser(Content $content) {
                
                return $content
                    // tiêu đề trang (tag html title)
                    ->title(trans("user::register-user.headers.register"))
                    // add dòng (chia dòng cột của bootstrap css)
                    ->row(function($row) {
                        
                        // ứng với dòng 1 có 1 cột nên with của cột = 12 (đánh cột như trong bootstrap)
                        $row->column(view('user::register-user'), 12);
                    })
                ;
            }

        Trong view muốn add js, css thì bổ sung
            {{-- javascript xử lý submit form đăng ký user --}}
            @php
                Layout::js(mix('/js/users/register-user.js'))
            @endphp

            {{-- css form đăng ký user --}}
            @php
                Layout::css(mix('/css/users/register-user.css'))
            @endphp

# Components
    ## lý do
        - mỗi màn hình cần css, js khác nhau nếu bundle lại hết thành 1 file sẽ rất nặng do có rất nhiều thư viện có thể lên đến vài chục mb
        => tách css, js ra thành 1 bộ gọi là component bao gồm các css, js
        màn hình nào cần thì gọi vào
    ## cách gọi
        > trong controller
        return $content
            ->title(trans("address::province.headers.create_province"))
            ->component("forms")
            ->component("dropdown-select-multiselect")
        ;

        > trong view hoặc provider
            Layout::component('sidebar');

    ## danh sách component
        - buttons: dùng khi màn hình có các nút nhấn
            bao gồm: bootstrap4 button
        - datetime-picker: dùng khi cần đến hiển thị thời gian
            bao gồm: @chenfengyuan/datepicker, daterangepicker, fullcalendar, moment
        - drawer: dùng hiển thị drawer bên phải màn hình
        - dropdown-select-multiselect: dùng khi có select box hoặc dropdown của bootstrap
            bao gồm: bootstrap4 dropdown, select2, @atomaras/bootstrap-multiselect
        - forms: dùng cho màn hình có các input
            bao gồm: jquery-validation, smartwizard, bootstrap4-toggle, textarea-autosize, inputmask
        - icons: dùng hiển thị các icon
            bao gồm: flagkit, ionicons, fontawesome, p7icons, linearicons, hamburgers
        - loaders-progress-spinners: dùng để hiển thị các loading
            bao gồm: bootstrap4 progress, bootstrap4 spinners, bootstrap4 modal, bootstrap4 progressbar, ladda, jquery-circle-progress
        - maps: dùng hiển thị bảng đồ
            bao gồm: mapbox-gl,gmaps gmaps
        - geocomplete: gởi ý google place
            bao gồm: geocomplete
        - modals: dùng hiển thị modal
            bao gồm: bootstrap4 modal
        - navbar: dùng hiển thị thanh menu trên header
            bao gồm: bootstrap4 nav, bootstrap4 navbar, popover
        - notification-alert-toast: dùng hiển thị thông báo
            bao gồm: bootstrap4 alert, bootstrap4 toasts, sweetalert2, toastr
        - pagination: dùng hiển thị phân trang
            bao gồm: bootstrap4 pagination 
        - popover-tooltip: dùng hiển thị popover, tooltip
            bao gồm: bootstrap4 popover, bootstrap4 tooltip
        - scrollable: dùng hiển thị thanh scroll
            bao gồm: perfect-scrollbar
        - sidebar: dùng hiển thị menu bên trái
            bao gồm: metisMenu
        - slider-carousel-rangeslider: dùng hiển thị các sideshow, rangeslider
            bao gồm: bootstrap4 carousel, bootstrap4 modal, nouislider, wnumb, slick-carousel
        - tables: dùng hiển thị table
            bao gồm: bootstrap-table, datatables.net
        - tree-view: dùng hiển thị select dạng cây
        - wysiwyg: dùng hiển thị trình soạn thảo
            bao gồm: ckeditor4
        - jsrender: dùng để render hlml từ js
            bao gồm: jsrender
        - jquery-ui: dùng để xử lý các ui : autocomplete ...
            bao gồm: jquery-ui
        - socket.io-client: real time dữ liệu
            bao gồm: socket.io-client
        - async: async dữ liệu
            bao gồm: async
        - numeral: numeral format số
            bao gồm: numeral
        - selection: selection select drag dùng chuột move qa
            bao gồm: selection


# Plugin helper:
1. DateRangePicker (https://www.daterangepicker.com/)

    - cách sự dụng: (app\Containers\Layout\Resources\Assets\js\vendor\components\datetime-picker.js);
        + nếu muốn sự dụng `daterangepicker` thì chỉ cần add class `date-range-picker` vào input
        và sự dụng thuộc tính thì có thể truyền `options` hoặc `data-{thuộc tính}`

            ```
                class : 'date-range-picker',
                các thuộc tính sự dụng :

                    - data-single-date-picker           loại daterankpicker single hay từ đến (bolean: true = single, false = từ đến)
                    - data-show-dropdowns               show select chọn tháng năm
                    - data-show-week-numbers            sau số tuần
                    - data-show-iso-week-numbers        sau số tuần
                    - data-time-picker                  chức năng chọn giờ phút
                    - data-time-picker24-hour           loại giờ
                    - data-time-picker-increment        max số phút
                    - data-time-picker-seconds          bật thêm chọn giây
                    - data-auto-apply                   tụ động apply
                    - data-auto-update-input            auto tự động lấy ngày (không nên bật chỉ nên bật khi có value trước đó)
                    - data-always-show-calendars        luôn luôn show bảng lịch ghi sự dụng range
                    - data-start-date                   bắt đầu
                    - data-end-date                     kết thúc
                    - data-min-date                     ngày nhỏ nhất
                    - data-max-date                     ngày lớn nhất
                    - data-min-year                     năm nhỏ nhất
                    - data-max-year                     năm lớn nhất
                    - data-opens                        show panel trái phải
                    - data-drops                        show panel trên dưới
                    - data-show-custom-range-label      label range
                    - data-format                       kiểu format
            ```
             + VD:
            ```php

                <div class="col-md-4 mb-2">
                    <div class="input-group input-group-sm">
                        <div class="input-group-prepend">
                            <label for="so_sale_time" class="input-group-text">
                                {{trans("sale::sale.label.label_so_sale_time")}}
                            </label>
                        </div>
                        {!!  Form::text(
                                'so_sale_time',  
                                old('so_sale_time', $sale['so_sale_time'] ? Helper\Time::formatTime($sale['so_sale_time'], $date_format) : date($date_format)), 
                                [
                                    'class'                      => 'rounded-0 form-control form-control-sm shadow-none date-range-picker',
                                    'id'                         => 'so_sale_time',
                                    'data-single-date-picker'    => 'true'
                                    'data-show-dropdowns'        => 'true'
                                ]
                            ) 
                        !!}
                        <em id="so_sale_time-error" class="error invalid-feedback text-right"></em>
                    </div>
                </div>
            ```

        + cách format time trên php (app\Containers\Helpers\Support\Time.php)
            ```php
                
                - createDateFromFormat: hàm tạo mới Date từ chuỗi ngày tháng và định dạng
                    vd: createDateFromFormat('10.09.2020 00:00:00','d.m.Y H:i:s') -->  instance Date của php
                - formatTime: hàm format thời gian theo định dạng được cấu hình, từ instance Date của php --> in ra chuối cho người dùng thấy
                - getCurrentTime: hàm lấy thời gian hiện tại, theo timezone đã cấu hình
                - getCurrentDate: hàm lấy ngày hiện tại
                - toTimestamp: hàm chuyển thời gian sang timestamp
                
                Helper\Time::formatTime(time)
            ```
        + cách format time trên js (app\Containers\Helpers\Resources\Assets\js\helpers\DateTimeHelper.js)
            ```js
                
                - getCurrentTime: hàm lấy thời gian hiện tại
                - getCurrentDate: hàm lấy ngày hiện tại
                - toTimestamp: hàm chuyển thời gian sang timestamp
                - createDateFromFormat: hàm tạo Date từ chuỗi ngày tháng và format
                - formatTime: hàm format ngày tháng
                - formatToISO: hàm format thời gian theo chuẩn ISO để gửi lên server, do client múi giờ là +7, lên server +0 -> cần format để hiểu đồng bộ
                
                var createdAt = helper.datetime.formatTime(item.created_at) || '';
            ```
1. Sự dụng format số (numeric)

    - cách sự dụng: (app\Containers\Helpers\Resources\Assets\js\helpers\NumberHelper.js);
        + nếu muốn sự dụng `format number` thì chỉ cần add class `numeric` vào input hoặc vào các thẻ html khác như `div, span, h1 ...` thì dưới js sẽ tự động dùng helper format số

        + sự dụng số dương không âm thì dùng class `positive` để không cho nhậ số âm
        `lưu ýL các con số đều phải được đưa về bên phải => class : text-right`

            ```
                class : 'numeric positive text-right',
            ```
             + VD:
            ```php
                <div class="form-group input-group input-group-sm">
                    <div class="input-group-prepend">
                        <label for="contract_credit_used" class="input-group-text w-100">
                            {{trans("document::contract.label.label_contract_credit_used")}}
                        </label>
                    </div>
                    <div>
                        {!!  Form::text(
                            'contract_credit_used',  
                            Helper\Number::formatNumber($contract['contract_credit_used']), 
                            [
                                'class'       => 'form-control form-control-sm shadow-none numeric positive text-right',
                                'id'          => 'contract_credit_used',
                                'placeholder' => trans("document::contract.placeholders.input_contract_credit_used")
                            ]
                        ) !!}
                    </div>
                </div>
            ```

        + cách format số trên php (app\Containers\Helpers\Support\Number.php)
            ```php
                
                - roundUp: hàm làm tròn lên
                - roundDown: hàm làm tròn xuống
                - round: hàm làm tròn dựa vào cột mốc để nhận biết là lên hay xuống
                - truncate: hàm cắt bớt số thập phân mà không làm tròn
                - formatNumber: hàm format số, số thông dụng là gọi hàm này., còn nếu là số lượng --> formatQuantity()
                - formatNumberCurrency: hàm format tiền tệ và không làm tròn (off đi)
                - roundWeight: hàm làm tròn khối lượng
                - roundQuantity: hàm làm tròn số lượng
                - roundCurrency: hàm làm tròn tiền tệ
                - formatWeight: hàm làm tròn và format số khối lượng
                - formatQuantity: hàm làm tròn và format số số lượng
                - formatCurrency: hàm làm tròn và format số tiền
                - escapseFormat: hàm loại bỏ format số (có nghĩa chuổi --> trả về float)
                - getSettingsNumberFormat: làm lấy cấu hình format số
                - getSettingsCurrencyFormat: hàm lấy cấu hình format tiền
                - repaireNumberFormatPattern: hàm fix chuỗi định dạng format số theo cấu hình tương ứng
                
                Helper\Number::formatNumber(numeric)
            ```

        + cách format số trên js (app\Containers\Helpers\Resources\Assets\js\helpers\NumberHelper.js)
            ```js
                
                - formatNumber: hàm format số, param:
                    - value: number số cần format
                    - format: chuỗi format
                    - locale: ngôn ngữ cần format
                    - textInput: format cho textInput
                - formatCurrency: hàm format tiền tệ, param
                    - value: number số cần format
                    - format: chuỗi format
                    - locale: ngôn ngữ cần format
                    - textInput: format cho textInput
                - roundUp: hàm làm tròn lên
                - roundDown: hàm làm tròn xuống
                - round: hàm làm tròn lên hoặc xuống dựa vào cột mốc
                
                helper.number.formatNumber(numeric);
            ```
