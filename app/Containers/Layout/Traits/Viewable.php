<?php

namespace App\Containers\Layout\Traits;

/**
 * @todo: Class hỗ trợ render html từ view 
 * -> sử dụng trong tình huống cần render dữ liệu ra view
 * - name: hàm lấy tên view
 * - getData: hàm lấy dữ liệu truyền ra view
 * - with: hàm set dữ liệu để truyền ra view
 * - render: hàm trả về html lấy từ laravel view (biến $view)
 * @author: Croco
 * @since: 15-05-2020
*/
trait Viewable
{
    // quản lý render ra html
    use Renderable;

    /**
     * tên view để render
     * @var string
     */
    // protected $view;

    /**
     * dữ liệu truyền ra view
     * @var array
     */
    protected $data = [];

    /**
     * @todo hàm lấy tên view
     * -> hỗ trợ đủ function để implement Illuminate\Contracts\View\View
     * @author Croco
     * @since 16-05-2020
     * @return string
     */
    public function name()
    {
        return $this->getName();
    }

    /**
     * @todo hàm lấy tên view
     * -> hỗ trợ đủ function để implement Illuminate\Contracts\View\View
     * @author Croco
     * @since 16-05-2020
     * @return string
     */
    public function getName() {

        return $this->view;
    }

    /**
     * @todo: Hàm lấy tất cả dữ liệu truyền ra view
     * -> sử dụng khi render view, hàm lấy dữ liệu đã sử dụng hàm with để set vào
     * @author: Croco
     * @since: 16-05-2020
     * @return array
    */
    public function getData() {

        $data = $this->data ?: [];
        return $data;
    }

    /**
     * @todo: hàm share data ra view
     * - truyền vào tên và value lúc render sẽ đẩy dữ liệu này ra view
     * @author: Croco
     * @since: 16-05-2020
     * @param string name
     * @param any value
     * @return mixed
    */
    public function with($name, $value = null) {

        $this->data[ $name ] = $value;
        return $this;
    }

    /**
     * @todo: Hàm build html từ view
     * - gọi laravel truyền dữ liệu từ biến $data đã set bằng hàm with
     * @author: Croco
     * @since: 16-05-2020
     * @echo string html 
    */
    public function build() {

        $variables = $this->getData();
        $html = view($this->name(), $variables)->render();

        echo $html;
    }
}
