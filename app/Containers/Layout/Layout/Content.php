<?php

namespace App\Containers\Layout\Layout;

use Closure;
use App\Containers\Layout\Traits\UseComponent;
use App\Containers\Layout\Traits\HasElements;
use App\Containers\Layout\Traits\Viewable;
use App\Containers\Layout\Traits\HasFlashMessages;
use App\Containers\Layout\Traits\HasSidebar;

use App\Containers\Layout\Contracts\Buildable;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;

use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Facades\App;

/**
 * @todo: Class quản lý nội dung hiển thị (html body)
 * - title: set get tiêu đề trang
 * - description: get set mô tả trang (meta description)
 * - layout: get set layout, dùng để set lại layout, mặc định đang dùng layout index
 * - row: hàm thêm 1 dòng vào content
 * - view: hàm thêm 1 dòng vào content bằng 1 view khác
 * - body: hàm xoá toàn bộ dòng và hàm thêm 1 dòng vào content
 * - render: hàm render ra html
 * - append: thêm 1 dòng (html div) vào layout cuối danh sách
 * - prepend: thêm 1 dòng (html div) vào layout đầu danh sách
 * @author: Croco
 * @since: 16-05-2020
*/
class Content implements View, Htmlable {

    use UseComponent;
    // quản lý flash message
    use HasFlashMessages;
    // quản lý render view
    use Viewable;
    // quản lý các element content
    use HasElements {
        renderElement as private _renderElement;
    }
    // quản lý sidebar
    use HasSidebar;

    /**
     * The event dispatcher implementation.
     *
     * @var Dispatcher
     */
    protected $events;

    /**
     * tên view render
     * @var string view name
     */
    protected $view = 'layout::index';
    /**
     * Tiêu đề web (title)
     * @var string
     */
    protected $title = ' ';

    /**
     * Mô tả (meta description)
     * @var string
     */
    protected $description = ' ';


    public function __construct($builder = []) {

        if(is_array($builder)) {

            $this->elements = $builder;
        } else if($builder instanceof Closure) {

            $builder($this);
        }

        $this->events = App::make(Dispatcher::class);
    }

    /**
     * @todo Hàm set, get tiêu đề
     * - nếu có truyền title thì set lại title
     * - nếu không thì lấy title ra
     * @author Croco
     * @since 16-05-2020
     * @param string|null $title
     * @return string|mixed
     */
    public function title($title = null) {

        if($title === null) {

            return $this->title;
        }

        $this->title = $title;

        return $this;
    }

    /**
     * @todo Hàm set get mô tả
     * - nếu có truyền description thì set lại description
     * - nếu không thì lấy description ra
     * @author Croco
     * @since 16-05-2020
     * @param string|null $description
     * @return string|mixed
     */
    public function description($description = '') {

        if($description === null) {

            return $this->description;
        }
        $this->description = $description;

        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ set get layout
     * @purpose: 
     * - dùng để thay đổi layout
     * mặc định đang dùng layout index là luôn có header, sidebar
     * @author: Croco
     * @since: 11-06-2020
     * @param string tên view
    */
    public function layout($viewName = null) {

        if(!$viewName) {

            return $this->view;
        }

        if(!view()->exists($viewName)) {

            throw new \Exception("Layout " . $viewName . " is not exists");
        }

        $this->view = $viewName;
        return $this;
    }

    /**
     * @todo Hàm reset lại nội dung và set lại content mới
     * -> sử dụng trong tình huống muốn set toàn bộ body trang web là 1 html cụ thể
     * @author Croco
     * @since 16-05-2020
     * @param Closure|Row|Renderable|Htmlable|Buildable|View|string $content
     * @return mixed
     */
    public function body($content) {

        $this->elements = [];
        return $this->row($content);
    }

    /**
     * @todo Hàm thêm 1 dòng cho content layout
     * -> chia dòng, cột trong html bootstrap
     * @author Croco
     * @since 16-05-2020
     * @param Closure|Row|Htmlable|Renderable|Buildable|string dòng
     * @return $this
     */
    public function row($content) {

        $this->append($content);
        return $this;
    }

    /**
     * @todo hàm thêm 1 dòng vào content bằng view
     * - truyền tên view và dữ liệu truyền ra view
     * hàm này sẽ gọi view để lấy html và add vào layout
     * @param string tên view
     * @param array $data
     * @return mixed
     */
    public function view($view, $data = []) {

        return $this->body(view($view, $data));
    }

    /**
     * @todo hàm add thêm row vào content
     * thêm vào cuối danh sách
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|Row|Htmlable|Renderable|Buildable|string dòng
     * @return mixed
     */
    public function append($row) {
        
        if(!($row instanceof Row)) {

            $row = new Row($row);
        }
        $this->appendElement($row);
        return $this;
    }

    /**
     * @todo hàm add thêm row vào content
     * thêm vào đầu danh sách
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|Row|Htmlable|Renderable|Buildable|string dòng
     * @return $this
     */
    public function prepend($row) {
        
        if(!($row instanceof Row)) {

            $row = new Row($row);
        }
        
        $this->prependElement($row);

        return $this;
    }

    /**
     * @todo: Hàm hỗ trợ render 1 element ra html
     * -> override lại hàm renderElement của trait HasElements: kiểm tra nếu $element không phải Row thì tạo Row
     * - nếu là Htmlable thì gọi hàm toHtml
     * - nếu là Renderable|View thì gọi hàm render
     * - nếu là Buildable thì gọi hàm build và ob_start lại html
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|Row|Buildable|Renderable|Htmlable|View|string
     * @return string html 
    */
    public function renderElement($element) {

        if($element && !($element instanceof Row)) {

            $element = new Row($element);
        }

        return $this->_renderElement($element);
    }

    /**
     * @todo hàm lấy toàn bộ giá trị để push ra view
     * @author: Croco
     * @since: 16-05-2020
     * @return array
     */
    public function getData() {

        $data = [
            'headers'   => [
                'title'       => $this->title,
                'description' => $this->description,
            ],
            // 'breadcrumb'  => $this->breadcrumb,
            'elements'   => $this->getElements(),
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
        
        $this->events->dispatch('layout.building', [$this->name()]);
        $this->events->dispatch('layout.composing', [$this->name()]);

        ob_start();

        $this->build();

        $contents = ob_get_contents();

        ob_end_clean();

        $this->events->dispatch('layout.composted', [$this->name()]);
        return $contents;
    }
}
