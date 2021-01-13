<?php

namespace App\Containers\Layout\Layout;

use Closure;
use App\Containers\Layout\Traits\UseComponent;
use App\Containers\Layout\Traits\Buildable as BuildableHtml;
use App\Containers\Layout\Traits\Renderable as RenderHtml;
use App\Containers\Layout\Traits\HasElements;
use App\Containers\Layout\Traits\HasAttributes;

use App\Containers\Layout\Contracts\Buildable;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Contracts\Support\Htmlable;

/**
 * @todo: Class quản lý cột trong bootstrap html
 * - append: thêm 1 content html vào cuối danh sách
 * - prepend: thêm 1 content html vào đầu danh sách
 * - row: thêm 1 dòng vào cột
 * - render: hàm render html
 * @author: Croco
 * @since: 16-05-2020
*/
class Column implements Buildable, Renderable, Htmlable
{
    use UseComponent;
    // quản lý build html
    use BuildableHtml;
    // quản lý danh sách html trong dòng
    use HasElements;
    // quản lý render ra html
    use RenderHtml;
    // quản lý attribute của html
    use HasAttributes;

    /**
     * grid system prefix width.
     *
     * @var array
     */
    public $width = [];

    /**
     * Column constructor.
     *  - with theo bootstrap
     * @param $content
     * @param int $width
     */
    public function __construct($content, $width = 12) {

        if ($content instanceof Closure) {

            call_user_func($content, $this);
        } else {

            $this->append($content);
        }

        ///// set width.
        // if null, or $this->width is empty array, set as "md" => "12"
        if (is_null($width) || (is_array($width) && count($width) === 0)) {

            $this->width['md'] = 12;
        }
        // $this->width is number(old version), set as "md" => $width
        elseif (is_numeric($width)) {

            $this->width['md'] = $width;
        } else if(is_array($width)){
            
            $this->width = $width;
        }
    }

    /**
     * @todo hàm add thêm content vào cột hiện tại
     * thêm vào cuối danh sách
     * @author: Croco
     * @since: 16-05-2020
     * @param Row|Htmlable|Renderable|Buildable|string nội dung html
     * @return mixed
     */
    public function append($row) {

        $this->appendElement($row);
        return $this;
    }

    /**
     * @todo hàm add thêm content vào cột hiện tại
     * thêm vào đầu danh sách
     * @author: Croco
     * @since: 16-05-2020
     * @param Row|Htmlable|Renderable|Buildable|string nội dung html
     * @return $this
     */
    public function prepend($row) {
        
        $this->prependElement($row);

        return $this;
    }

    /**
     * @todo: Hàm bắt đầu tag html column
     * @author: Croco
     * @since: 16-05-2020
     * @echo string 
    */
    protected function startColumn() {

        // get class name using width array
        foreach ($this->width as $key => $value) {

            $this->class("col-$key-$value");
        }

        $attributes = $this->getAttributes() ?: [];
        
        echo $this->startElement("div", $attributes);
    }

    /**
     * @todo: Hàm kết thúc tag html column
     * @author: Croco
     * @since: 16-05-2020
     * @echo string 
    */
    protected function endColumn() {

        echo $this->endElement("div");
    }

    /**
     * @todo Hàm thêm 1 dòng cho cột
     * thêm vào cuối danh sách
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|Row|Htmlable|Renderable $content
     * @return Column
     */
    public function row($content) {

        if(!($content instanceof Row)) {

            $row = new Row($content);
        }

        $this->append($row);
        return $this;
    }

    /**
     * @todo: Hàm build html cho column
     * - duyệt qua toàn bộ contents
     * render
     * @author: Croco
     * @since: 16-05-2020
     * @echo string html 
    */
    public function build() {

        $this->startColumn();

        echo $this->renderElements();

        $this->endColumn();
    }
}
