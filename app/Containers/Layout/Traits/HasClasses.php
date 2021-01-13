<?php

namespace App\Containers\Layout\Traits;

/**
 * @todo: Class hỗ trợ quản lý danh sách class (css) của element
 * -> sử dụng cho instance của Buildable để quản lý class của html
 * - addClass: thêm 1 class
 * - removeClass: xoá 1 class
 * - getClasses: lấy toàn bộ class
 * - setClasses: set lại toàn bộ class
 * @author: Croco
 * @since: 16-05-2020
*/
trait HasClasses
{
    // danh sách tất cả class
    protected $classes = [];

    /**
     * @todo: hàm hỗ trợ add class (class css) cho element
     * @purpose: 
     * - nếu gọi hàm có truyền tên class thì
     * add vào mảng
     * - nếu không truyền thì trả về mảng hiện tại
     * @author: Croco
     * @since: 15-05-2020
     * @param string tên class (css)
     * @return array|mixed
    */
    public function class(string $className = null) {

        if(!$className) {

            return $this->getClasses();
        }
        
        $this->addClass($className);
        return $this;
    }

    /**
     * @todo: hàm hỗ trợ thêm 1 class (html) cho element
     * @author: Croco
     * @since: 16-05-2020
     * @param string tên class
     * @return mixed
    */
    public function addClass(string $name) {

        if($name !== null) {

            $this->classes[] = $name;
        }
        return $this;
    }

    /**
     * @todo: hàm hỗ trợ xoá 1 class (html) cho element
     * @author: Croco
     * @since: 16-05-2020
     * @param string tên class
     * @return mixed
    */
    public function removeClass(string $name) {

        $key = array_search($name, $this->classes);
        if($key !== false) {

            unset($this->classes[$key]);
        }
        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ lấy danh sách class của element
     * - filter trùng
     * @author: Croco
     * @since: 16-05-2020
     * @return array class 
    */
    public function getClasses() {

        return array_unique(array_filter($this->classes));
    }

    /**
     * @todo: Hàm hỗ trợ set lại toàn bộ class của element
     * @author: Croco
     * @since: 16-05-2020
     * @return mixed
    */
    public function setClasses(array $classes = []) {

        $this->classes = $classes;

        return $this;
    }
}
