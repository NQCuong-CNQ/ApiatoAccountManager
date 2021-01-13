<?php

namespace App\Containers\Layout\Traits;

/**
 * @todo: Class hỗ trợ render html từ hàm build
 * -> sử dụng trong tình huống cần render ra html
 * yêu cầu class phải có hàm build echo ra html
 * - render: trả về html lấy từ hàm build
 * - toHtml: giống với hàm render sử dụng cho class implement từ Illuminate\Contracts\Support\Htmlable có thể sử dụng
 * @author: Croco
 * @since: 15-05-2020
*/
trait Renderable
{
    /**
     * @todo Hàm render ra html
     * -> sử dụng cho Buildable render ra laravel view
     * @author: Croco
     * @since: 16-05-2020
     * @return string html
     */
    public function render() {
        
        ob_start();

        $this->build();

        $contents = ob_get_contents();

        ob_end_clean();

        return $contents;
    }

    /**
     * @todo Hàm trả về html nội dung web
     * dùng trong trường hợp instance implement Illuminate\Contracts\Support\Htmlable
     * @author: Croco
     * @since: 16-05-2020
     * @return string html
     */
    public function toHtml() {

        return $this->render();
    }

    /**
     * @todo Hàm trả về html nội dung web
     * khi dùng ép kiểu (string) $instance
     * @author: Croco
     * @since: 16-05-2020
     * @return string html
     */
    public function __toString()  {

        return $this->render();
    }
}
