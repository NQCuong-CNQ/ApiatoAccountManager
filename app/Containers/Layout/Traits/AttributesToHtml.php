<?php

namespace App\Containers\Layout\Traits;

/**
 * @todo: Class hỗ trợ build attribute sang html để hiển thị
 * => sử dụng cho các instance Buildable để render html
 * - attributesToHtmlString: chuyển mảng attributes sang html
 * - attributeToHtmlString: chuyển attribute từ name, value sang html dạng key="value"
 * @author: Croco
 * @since: 15-05-2020
*/
trait AttributesToHtml
{
    /**
     * @todo Hàm format mảng attributes sang html
     * - có 1 mảng danh sách các attribute của tag (html)
     * hàm này sẽ chuyển mảng đó sang html
     * [key] => [value] chuyển sang key="value"
     * @author Croco
     * @param array attribute
     * [key] => [value]
     * @since 16-05-2020
     * @return string
     * key1="value1" key2="value1"
     */
    public function attributesToHtmlString(array $attributes = []) {

        $html = [];
        foreach ($attributes as $key => $value) {

            $element = $this->attributeToHtmlString($key, $value);
            if (!is_null($element)) {

                $html[] = $element;
            }
        }

        if($html && count($html) > 0) {

            return implode(' ', $html);
        }

        return '';
    }

    /**
     * @todo Hàm hỗ trợ build attribute sang html
     * - có name, value
     * hàm này sẽ chuyển sang chuỗi html dạng key="value"
     * @param string $name
     * @param string $value
     * @return string
     *  key="value"
     */
    public function attributeToHtmlString(string $name, string $value = null) {

        if($name === null && $value === null) {

            return null;
        }
        
        if($name === "" || is_numeric($name)) {

            $name = $value;
        }

        // trường hợp checked = checked
        if($name && $value === null) {
            
            $value = $name;
        }

        if(is_null($value)) {

            return null;
        }
        
        $value = (string) $value;
        return $name . '="' . htmlentities($value, ENT_QUOTES, 'UTF-8') . '"';
    }
}
