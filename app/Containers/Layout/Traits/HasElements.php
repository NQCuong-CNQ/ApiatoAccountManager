<?php

namespace App\Containers\Layout\Traits;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;
use App\Containers\Layout\Contracts\Buildable;

/**
 * @todo: Class hỗ trợ quản lý danh sách elements cần render ra html
 * hỗ trợ các elements dạng Renderable, Htmlable, View, Buildable
 * -> sử dụng trong tình huống có class muốn append tag html hoặc view vào content
 * - appendElement: thêm 1 element vào cuối danh sách
 * - prependElement: thêm 1 element vào đầu danh sách
 * - renderElements: hàm render toàn bộ element
 * - renderElement: hàm render element cụ thể
 * - getElements: hàm lấy danh sách elements
 * - hasElements: hàm kiểm tra có element nào trong danh sách hay không
 * @author: Croco
 * @since: 16-05-2020
*/
trait HasElements
{

    /**
     * danh sách elements
     * @var array Buildable|Renderable|Htmlable|View|string
     */
    protected $elements = [];

    /**
     * @todo hàm add thêm element vào danh sách
     * thêm vào cuối danh sách
     * @author: Croco
     * @since: 16-05-2020
     * @param Row
     * @return mixed
     */
    public function appendElement($element) {
        
        $this->elements[] = $element;
        return $this;
    }

    /**
     * @todo hàm add thêm element vào danh sách
     * thêm vào đầu danh sách
     * @author: Croco
     * @since: 16-05-2020
     * @param $content
     * @return $this
     */
    public function prependElement($element) {
        
        array_unshift($this->elements, $element);

        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ render toàn bộ element ra html
     * - duyệt qua toàn bộ element
     * lấy html từng element để render
     * @author: Croco
     * @since: 16-05-2020
     * @return string html 
    */
    public function renderElements() {

        $html = [];
        $elements = $this->elements ?: [];
        if($elements && count($elements) > 0) {

            foreach ($elements as $element) {

                $html[] = $this->renderElement($element);
            }
        }

        return implode('', $html);
    }

    /**
     * @todo: Hàm hỗ trợ render 1 element ra html
     * - nếu là Htmlable thì gọi hàm toHtml
     * - nếu là Renderable|View thì gọi hàm render
     * - nếu là Buildable thì gọi hàm build và ob_start lại html
     * @author: Croco
     * @since: 16-05-2020
     * @param Buildable|Renderable|Htmlable|View|string
     * @return string html 
    */
    public function renderElement($element) {

        if($element instanceof Buildable) {

            ob_start();

            $element->build();

            $contents = ob_get_contents();

            ob_end_clean();
            return $contents;
        } 

        if($element instanceof View) {

            return $element->render();
        }

        if ($element instanceof Htmlable) {

            return $element->toHtml();
        } 
        
        if($element instanceof Renderable) {

            return $element->render();
        }

        if($element !== null) {

            return (string) $element;
        }
        
        return "";
    }

    /**
     * @todo: Hàm hỗ trợ kiểm tra xem có element nào trong danh sách hay không
     * @author: Croco
     * @since: 16-05-2020
     * @return boolean
    */
    public function hasElements() {

        $elements = array_filter($this->elements ?: []);
        return $elements && count($elements) > 0;
    }

    /**
     * @todo: Hàm hỗ trợ lấy danh sách các element
     * @author: Croco
     * @since: 16-05-2020
     * @return array
    */
    public function getElements() {

        return $this->elements ?: [];
    }
}