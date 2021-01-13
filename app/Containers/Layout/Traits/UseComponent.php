<?php

namespace App\Containers\Layout\Traits;
use App\Containers\Layout\Facades\Layout;

trait UseComponent
{
    /**
     * @todo: Hàm khai báo sử dụng 1 component trong danh sách Components
     * @purpose: 
     * - VD: khi cần dùng tables, thì sử dụng Layout::component("tables")
     * @author: Croco
     * @since: 29-05-2020
     * @param string tên component
     * @return mixed
    */
    public function component(string $name) {

        Layout::component($name);
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ huỷ sử dụng 1 component trong danh sách đang sử dụng
     * @purpose: 
     * - khi component nào đó được mặc định sử dụng
     * nhưng trang hiện tại không cần thì có thể dùng hàm này để loại bỏ
     * @author: Croco
     * @since: 11-06-2020
     * @param string tên component
    */
    public function disableComponent(string $name) {

        Layout::disableComponent($name);
        return $this;
    }
}
