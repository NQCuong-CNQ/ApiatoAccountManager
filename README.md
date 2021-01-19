### Flow chính để chạy ứng dụng
  - cài đặt apiato cơ bản
    -- publish js ... (npm install, npm run dev)
  - cài đặt Container User
    -- vào từng container để chạy (npm install, npm run dev)

# Cài đặt ban đầu
    ## cấu hình php 7.4
    ## bật extention intl của php
    ## chạy lệnh để cài đặt apiato
        # cài gói php
          > composer install
        # Migrate database (tạo db)
          > php artisan migrate
        # cài đặt gói js  
          > npm install
        # build / publish js ra public
          > npm run dev

# setup link localhost
    ## Local: tất cả điều trỏ vào 1 source này
        <VirtualHost *:80>
            DocumentRoot "D:/xampp/htdocs/apiatoaccountmanager/public"
            Header set Access-Control-Allow-Origin "*"
            Header always set Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT"
            Header always set Access-Control-Allow-Headers "My-First-Header,My-Second-Header,Authorization, content-type, csrf-token"
            ServerName apiatoaccountmanager
            ServerAlias api.apiatoaccountmanager
        </VirtualHost>


    ## DB
        > DB_HOST=localhost
        > DB_PORT=3306
        > DB_DATABASE=db_taikhoan_local_offline
        > DB_USERNAME=root
        > DB_PASSWORD=

# Ghi chú Structure
    - tham khảo: https://github.com/Mahmoudz/Porto

    ## Giới thiệu các khái niệm và cách sử dụng cơ bản
        - trong Apiato gồm các thành phần đặt biệt:

            - Ship:
                Là nơi chứa toàn bộ cấu trúc, abstract, interface, để đồng nhất giữa các Container

            - Container:
                - Apiato chia các package thành các container riêng, 
                ứng với mỗi container có file composer riêng để tự đăng ký các gói
                - Container về ý nghĩa sẽ giống với Module bên Laravel Module
                - Giữa các Container với nhau có thể giao tiếp thông qua facade của apiato
                để gọi qua Task lẫn nhau


            - Action: 
                Mô hình là: từ Controller sẽ dùng facade của apiato để gọi qua action
                    > Apiato::call('Test@FindTestByIdAction', [$request]);
                Action sẽ nhận dữ liệu đã format qua DataTransporter
                    > public function run(DataTransporter $data)
                Sau đó action sẽ gọi qua các Task để xử lý dữ liệu thông qua facade của apiato
                    > $user = Apiato::call('User@FindUserByIdTask', [$data->user_id]);
                Từ dữ liệu các Task trả về Action tổng hợp và trả về cho Controller
                Controller nhận dữ liệu từ Action sau đó chuyển qua Transformer 
                    > return $this->transform($tests, TestTransformer::class);

            - DataTransporter:
                là 1 lớp để format dữ liệu từ request và validate

            - Task:
                là 1 lớp để xử lý nhiệm vụ nào đó từ Action yêu cầu, như lấy dữ liệu, format, ...
                từ Container này có thể gọi qua Task của Container khác thông qua facade của apiato
            
            - Transformer:
                là 1 lớp để format dữ liệu response

            - SubAction:
                cái này giống với action và chưa có tài liệu cụ thể

            - Repository:
                là lớp để CRUD dữ liệu từ DB
                lớp này sử dụng Eloquent và build sẳn các hàm get dữ liệu cơ bản
                    > xem thêm: https://github.com/andersao/l5-repository
                để query điều kiện thay vì query trong repo thì apiato sẽ dùng Criteria
                    > $repository->pushCriteria(new AdminsCriteria());

            - Criteria:
                là lớp apply các điều kiện query vào query builder
                    VD:
                        > public function apply($model, PrettusRepositoryInterface $repository)
                        > {
                        >    return $model->where('is_client', false);
                        > }
            
            - Router:
                - trong Apiato chia 2 folder API và Web riêng biệt nằm trong folder UI
                và hỗ trợ đánh version cho API thông qua prefix tên file route

            - Cache dữ liệu từ Repo:
                - gói repo đã có cấu hình cache
                - tự động cache nếu có cấu hình
                    > https://github.com/andersao/l5-repository#cache-config
                - cache key tự động tạo từ:
                    - full url của request
                    - full argument khi gọi repo
                    - tất cả Criteria
                    - đánh namespace theo class đã gọi tới
                - tự động bỏ qua cache nếu request có param skipCache
            
            - Provider:
                - các provider trong Container phải kế thừa từ Ship
                    > App\Ship\Parents\Providers
                        - MainProvider (thường sử dụng)
                            service provider bình thường
                        - EventsProvider
                            service provider để đăng ký sự kiện
                        - MiddlewareProvider
                            service provider để đăng ký middleware
                        - RoutesProvider
                            service provider để đăng ký route
                        - BroadcastsProvider
                            service provider để đăng ký các event ở Console
                        - AuthProvider
                            service provider để đăng ký auth

            - Mail:
                - các email cũng phải kế thừa từ Ship
                    > App\Ship\Parents\Mails\Mail
            
            - Job:
                - với Job cũng tương tự phải kế thừa từ Ship
                    > App\Ship\Parents\Jobs\Job
