<?php

namespace App\Containers\Layout\Traits;

/**
 * @todo: Class hỗ trợ build html tag
 * => sử dụng cho các instance render html, view
 * - startElement: mở tag html
 * - endElement: đóng tag html
 * - attributesToHtmlString: chuyển mảng attributes sang html
 * - attributeToHtmlString: chuyển attribute từ name, value sang html dạng key="value"
 * @author: Croco
 * @since: 15-05-2020
*/
trait Buildable
{
    use AttributesToHtml;
    
    /**
     * @todo: Hàm hỗ trợ start html
     * @author: Croco
     * @since: 15-05-2020
     * @param string tên tag html
     * @return string html
    */
    protected function startElement($name, $attributes = []) {

        $attributes = $this->attributesToHtmlString($attributes);
        return "<{$name} {$attributes}>";
    }

    /**
     * @todo: Hàm hỗ trợ end html
     * @author: Croco
     * @since: 15-05-2020
     * @param string tên tag html
     * @return string html
    */
    protected function endElement($name) {

        return "</{$name}>";
    }
}
