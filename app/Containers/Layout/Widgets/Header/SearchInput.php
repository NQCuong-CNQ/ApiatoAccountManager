<?php

namespace App\Containers\Layout\Widgets\Header;

use Closure;
use App\Containers\Layout\Widgets\Widget;

/**
 * @todo: Input search trên thanh header
 * - placeholder: hàm set, get placeholder của input search
 * - value: hàm set, get giá trị của input search, mặc định nếu chưa set (value === null)
 *      thì tự lấy trên request param keyword
 * - render: hàm render ra html
 * @author: Croco
 * @since: 18-05-2020
*/
class SearchInput extends Widget {

    // placeholder của input
    protected $placeholder = "";
    // giá trị trong input search
    protected $value = null;

    /**
     * tên view
     * @var string
     */
    protected $view = 'layout::widgets.header.search-input';

    /**
     * Seach Input constructor.
     * @param Closure|MenuItem|Renderable|Buildable|Htmlable|View|string nội dung trong form search
     */
    public function __construct($content = "") {

        if ($content instanceof Closure) {

            call_user_func($content, $this);
        } else if(!empty($content)) {

            $this->append($content);
        }
    }

    /**
     * @todo: Hàm set lại placeholder cho input search
     * @author: Croco
     * @since: 18-05-2020
     * @param string placeholder
     * @return string|mixed
    */
    public function placeholder(string $placeholder = null) {

        if($placeholder === null) {

            return $this->placeholder;
        }

        $this->placeholder = $placeholder;

        return $this;
    }

    /**
     * @todo: Hàm set lại giá trị (value) cho input search
     * -> mặc định nếu không set (value === null) thì lấy trên request param keyword
     * @author: Croco
     * @since: 18-05-2020
     * @param string value
     * @return string|mixed
    */
    public function value(string $value = null) {

        if($value === null) {

            $value = $this->value;
            $request = app("request");
            $value = $request->keyword;
            return $value;
        }

        $this->value = $value;

        return $this;
    }

    /**
     * @todo: Hàm set lại giá trị (value) cho input search
     * @author: Croco
     * @since: 18-05-2020
     * @param string value
     * @return string|mixed
    */
    public function val(string $value = null) {

        return $this->value($value);
    }

    /**
     * @todo hàm lấy toàn bộ giá trị để push ra view
     * hỗ trợ cho hàm render của trait Viewable đẩy dữ liệu ra view
     * @author: Croco
     * @since: 16-05-2020
     * @return array
     */
    public function getData() {

        $value = $this->value();

        $data = [
            'elements'    => $this->getElements(),
            'placeholder' => $this->placeholder,
            'value'       => $value,
        ] + ($this->data ?: []);

        return $data;
    }
}
