<?php

namespace App\Containers\Layout\Widgets;

use Closure;

/**
 * @todo: Class Widget logo (hiển thị logo ở góc trái màn hình)
 * - append: hàm add 1 html vào tag html của logo, thêm vào cuối danh sách
 * - prepend: hàm add 1 html vào tag html của logo, thêm vào đầu danh sách
 * - render: hàm render ra html
 * @author: Croco
 * @since: 16-05-2020
*/
class Logo extends Widget {

    /**
     * @var string
     */
    protected $view = 'layout::widgets.logo';

    /**
     * Logo constructor.
     * @param Closure|MenuItem|Renderable|Buildable|Htmlable|View|string nội dung logo
     */
    public function __construct($content = "") {

        if ($content instanceof Closure) {

            call_user_func($content, $this);
        } else if(!empty($content)) {

            $this->append($content);
        }
    }

    /**
     * @todo hàm lấy toàn bộ giá trị để push ra view
     * @author: Croco
     * @since: 16-05-2020
     * @return array
     */
    public function getData() {

        $data = [
            'content' => $this->renderElements(),
        ] + ($this->data ?: []);

        return $data;
    }
}
