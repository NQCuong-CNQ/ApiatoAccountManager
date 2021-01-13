<?php

namespace App\Containers\Layout\Traits;

/**
 * @todo: Class hỗ trợ quản lý danh sách attribute của element
 * -> sử dụng cho các instance Buildable để quản lý attribute của html
 * - attribute: thêm 1 attribute
 * - getAttributes: lấy toàn bộ attribute
 * - setAttributes: set lại toàn bộ attribute
 * - removeAttribute: hàm remove 1 attribute
 * - addAttribute: hàm thêm 1 attribute
 * @author: Croco
 * @since: 16-05-2020
*/
trait HasAttributes
{
    // quản lý attribute class
    use HasClasses;
    // quản lý attribute style (css inline)
    use HasStyles;

    // danh sách tất cả attributes
    // format theo [tên] => [value]
    protected $attributes = [];

    /**
     * @todo: hàm hỗ trợ add attribute (html) cho element
     * @purpose: 
     * - nếu gọi hàm có truyền tên attribute thì
     * add vào mảng attributes
     * - nếu không truyền thì trả về atrrbute hiện tại
     * @author: Croco
     * @since: 15-05-2020
     * @param string tên attribute
     * @param string giá trị
     * @return string|mixed
    */
    public function attribute(string $name = null, string $value = null) {

        if($name === null && $value === null) {

            return $this->getAttributes();
        }

        $this->addAttribute($name, $value);
        return $this;
    }

    /**
     * @todo: hàm hỗ trợ thêm 1 attribute (html) cho element
     * - nếu tên attribute là class thì gọi lên hàm add class của trait HasClasses
     * - nếu tên attribute là style thì gọi lên hàm add style của trait HasStyles
     * @author: Croco
     * @since: 16-05-2020
     * @param string tên attribute
     * @param string giá trị
     * @return mixed
    */
    public function addAttribute(string $name, string $value = null) {

        // trường hợp checked=check
        // nên nếu value === null thì set value = name
        $value = $value ?? $name;

        if(is_numeric($name)) {

            $name = $value;
        }

        if($name === null || $value === null) {

            return $this;
        }

        if(strtolower($name) === "class") {

            $this->addClass($value);
        } else if(strtolower($name) === "style") {

            $this->addStyle($value);
        } else {

            $this->attributes[ $name ] = $value;
        }

        return $this;
    }

    /**
     * @todo: hàm hỗ trợ xoá 1 attribute (html) cho element
     * - nếu tên attribute là class thì gọi lên hàm set class của trait HasClasses để xoá hết class
     * - nếu tên attribute là style thì gọi lên hàm set style của trait HasStyles để xoá hết css inline
     * @author: Croco
     * @since: 16-05-2020
     * @param string tên attribute
     * @return mixed
    */
    public function removeAttribute(string $name) {

        if(strtolower($name) === "class") {

            $this->setClasses([]);
        } else if(strtolower($name) === "style") {

            $this->setStyles([]);
        } else {

            unset($this->attributes[ $name ]);
        }

        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ set nhanh lại toàn bộ attributes
     * @author: Croco
     * @since: 15-05-2020
     * @param array style
     * [name] => value
     * @return mixed
    */
    public function setAttributes(array $attributes = []) {

        $attributes = $this->__parseClassAttribute($attributes);
        $attributes = $this->__parseStyleAttribute($attributes);
        $this->attributes = $attributes;
        return $this;
    }


    /**
     * @todo: hàm hỗ trợ lấy toàn bộ danh sách attribute
     * - tổng hợp attribute từ trait HasStyles, HasClasses
     * @author: Croco
     * @since: 15-05-2020
     * @return array
    */
    public function getAttributes() {

        $attributes = $this->attributes ?: [];
        $classes = $this->getClasses() ?: [];
        $classes = implode(" ", $classes);

        $styles = $this->getStyles() ?: [];
        $styles = implode(";", $styles);

        if($classes) {

            $attributes["class"] = $classes;
        }

        if($styles) {

            $attributes["style"] = $styles;
        }

        return $attributes;
    }

    /**
     * @todo: Hàm hỗ trợ parse attribute class từ danh sách attribute
     * và gọi lên setClasses của trait HasClasses để quản lý
     * @author: Croco
     * @since: 15-05-2020
     * @param string tên attribute cần lấy
     * @param array danh sách attribute
     * @return any value
    */
    private function __parseClassAttribute($attributes = []) {

        $class = $this->__resetAllCamelCaseAtrribute($attributes, "class");
        if($class === null || $class === "") {

            $this->setClasses([]);
        } else if(is_array($class)) {

            $this->setClasses($class);
        } else if(is_string($class)) {

            $class = explode(" ", $class);
            $this->setClasses($class);
        }
        return $attributes;
    }

    /**
     * @todo: Hàm hỗ trợ parse attribute style từ danh sách attribute
     * và gọi lên setStyles của trait HasStyles để quản lý
     * @author: Croco
     * @since: 15-05-2020
     * @param string tên attribute cần lấy
     * @param array danh sách attribute
     * @return any value
    */
    private function __parseStyleAttribute($attributes = []) {

        $styles = $this->__resetAllCamelCaseAtrribute($attributes, "style");
        if($styles === null || $styles === "") {

            $this->setStyles([]);
        } else if(is_array($styles)) {

            $this->setStyles($styles);
        } else if(is_string($class)) {

            $styles = explode(";", $styles);
            // format lại inlineCss thành array
            if($styles && count($styles) > 0) {

                $allStyles = [];
                foreach ($styles as $inlineCss) {

                    if($inlineCss && is_string($inlineCss)) {

                        $inlineCss = explode(":", $inlineCss);
                        $allStyles[ trim($inlineCss[0]) ] = trim($inlineCss[1]);
                    }
                }
                $this->setStyles($styles);
            } else {

                $this->setStyles([]);
            }
        }
        return $attributes;
    }

    /**
     * @todo: hàm hỗ trợ kiểm tra và loại bỏ 1 attribute name cùng tên nhưng uppercase trong danh sách attribute
     * -> dùng trong trường hợp lấy attribute class và cần loại bỏ các attribute Class CLASS,...
     * @author: Croco
     * @since: 15-05-2020
     * @param string tên attribute cần lấy
     * @param array danh sách attribute
     * @return any value
    */
    private function __resetAllCamelCaseAtrribute(array &$attributes, string $attr) {

        $attr = strtolower($attr);
        $result = null;
        foreach($attributes as $name => $value) {

            if(strtolower($name) === $attr) {

                $result = $value;
                unset($attributes[$name]);
            }
        }
        return $result;
    }
}
