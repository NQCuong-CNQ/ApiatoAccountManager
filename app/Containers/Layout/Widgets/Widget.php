<?php
namespace App\Containers\Layout\Widgets;

use Illuminate\Support\Fluent;
use App\Containers\Layout\Traits\HasAttributes;
use App\Containers\Layout\Traits\HasElements;
use App\Containers\Layout\Traits\Viewable;
use App\Containers\Layout\Traits\AttributesToHtml;

use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;

use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Facades\App;

/**
 * @todo: Class abtract 1 component Widget (html) chứa các hàm cơ bảng để render
 * thêm content
 * - append: hàm add 1 html vào view, thêm vào cuối danh sách
 * - prepend: hàm add 1 html vào view, thêm vào đầu danh sách
 * - render: hàm render ra html
 * @author: Croco
 * @since: 16-05-2020
*/
abstract class Widget extends Fluent implements View, Htmlable {
    // quản lý danh sách attribute
    use HasAttributes;
    // quản lý danh sách các element html
    use HasElements;
    // quản lý render ra view
    use Viewable;
    // hỗ trợ chuyển danh sách attribute sang html để hiển thị
    use AttributesToHtml;

    /**
     * The event dispatcher implementation.
     *
     * @var Dispatcher
     */
    protected $events;

    /**
     * @todo hàm add thêm element vào danh sách
     * thêm vào cuối danh sách
     * @author: Croco
     * @since: 16-05-2020
     * @param Row
     * @return mixed
     */
    public function append($element) {
        
        $this->appendElement($element);
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
    public function prepend($element) {
        
        $this->prependElement($element);
        return $this;
    }

    /**
     * @todo hàm lấy toàn bộ giá trị để push ra view
     * @author: Croco
     * @since: 16-05-2020
     * @return array
     */
    public function getData() {

        $data = [
            'content'   => $this->renderElements(),
        ] + ($this->data ?: []);

        return $data;
    }

    /**
     * @todo Hàm render ra html
     * -> sử dụng cho Buildable render ra laravel view
     * @author: Croco
     * @since: 16-05-2020
     * @return string html
     */
    public function render() {
        
        if(!$this->events) {

            $this->events = App::make(Dispatcher::class);
        }
        $this->events->dispatch('layout.build.widget', [$this->name()]);
        
        ob_start();

        $this->build();

        $contents = ob_get_contents();

        ob_end_clean();

        return $contents;
    }
}
