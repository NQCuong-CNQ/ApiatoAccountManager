<?php

namespace App\Containers\Layout\Traits;

/**
 * @todo: Style hỗ trợ quản lý danh sách style (css inline) của element
 * -> sử dụng cho instance của Buildable để quản lý css inline
 * - addStyle: thêm 1 style
 * - removeStyle: xoá 1 style
 * - getStyles: lấy toàn bộ style
 * - setStyles: set lại toàn bộ style
 * @author: Croco
 * @since: 16-05-2020
*/
trait HasStyles
{
    // danh sách tất cả style
    protected $styles = [];

    /**
     * @todo: hàm hỗ trợ add style (style css) cho element
     * @purpose: 
     * - nếu gọi hàm có truyền tên style thì
     * add vào mảng
     * - nếu không truyền thì trả về mảng hiện tại
     * @author: Croco
     * @since: 15-05-2020
     * @param string tên style (css)
     * @return array|mixed
    */
    public function style(string $styleName = null, string $value = null) {

        if(!$styleName) {

            return $this->getStyles();
        }
        
        $this->addStyle($styleName, $value);
        return $this;
    }

    /**
     * @todo: hàm hỗ trợ thêm 1 style (css inline) cho element
     * @author: Croco
     * @since: 16-05-2020
     * @param string tên style
     * @param string giá trị
     * @return mixed
    */
    public function addStyle(string $name, string $value) {

        if($name !== null && $value !== null) {

            $this->styles[$name] = $value;
        }
        return $this;
    }

    /**
     * @todo: hàm hỗ trợ xoá 1 style (css inline) cho element
     * @author: Croco
     * @since: 16-05-2020
     * @param string tên style
     * @return mixed
    */
    public function removeStyle(string $name) {

        unset($this->styles[$name]);
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ lấy danh sách style (css inline) của element
     * - filter rỗng
     * @author: Croco
     * @since: 16-05-2020
     * @return array style 
    */
    public function getStyles() {

        return array_filter($this->styles);
    }

    /**
     * @todo: Hàm hỗ trợ set lại toàn bộ style của element
     * @author: Croco
     * @since: 16-05-2020
     * @return mixed
    */
    public function setStyles(array $styles = []) {

        $this->styles = $styles;

        return $this;
    }
}
