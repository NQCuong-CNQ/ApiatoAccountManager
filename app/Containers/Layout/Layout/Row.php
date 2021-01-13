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
 * @todo: Class quản lý dòng trong body theo bootstrap html
 * - column: tạo thêm cột cho dòng: độ rộng cột, content
 * - addColumn: add 1 cột vào dòng
 * - append: hàm thêm 1 html vào dòng, thêm vào cuối
 * - prepend: hàm thêm 1 html vào dòng, thêm vào đầu danh sách
 * - build: hàm echo toàn bộ html
 * - render: hàm render html
 * @author: Croco
 * @since: 16-05-2020
*/
class Row implements Buildable, Renderable, Htmlable
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
     * Row constructor.
     *
     * @param string $content
     */
    public function __construct($content = "")
    {

        if(($content instanceof Closure)) {

            $content($this);
        } else if($content instanceof Column) {

            $this->addColumn($content);
        } else if(!empty($content)) {
            
            $this->column($content, 12);
        }
    }

    /**
     * @todo: hàm thêm cột cho dòng
     * -> sử dụng chia cột cho dòng (row trong bootstrap html, có 12 cột, with là số từ 1 đến 12)
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|Column|Htmlable|Renderable|Buildable|string nội dung cột
     * @param number độ rộng cột tính theo bootstrap có từ 1 đến 12 cột
     * @return mixed
    */
    public function column($content, $width) {

        $width = $width < 1 ? round(12 * $width) : $width;

        if(!($content instanceof Column)) {
            
            $column = new Column($content, $width);
        }
        
        $this->addColumn($column);

        return $this;
    }

    /**
     * @todo hàm add thêm content vào dòng hiện tại
     * thêm vào cuối danh sách
     * @author: Croco
     * @since: 16-05-2020
     * @param Column|Htmlable|Renderable|Buildable|string nội dung html
     * @return mixed
     */
    public function append($row) {

        $this->appendElement($row);
        return $this;
    }

    /**
     * @todo hàm add thêm content vào dòng hiện tại
     * thêm vào đầu danh sách
     * @author: Croco
     * @since: 16-05-2020
     * @param Column|Htmlable|Renderable|Buildable|string nội dung html
     * @return $this
     */
    public function prepend($row) {
        
        $this->prependElement($row);

        return $this;
    }

    /**
     * @todo: Hàm build html cho dòng
     * - duyệt qua toàn bộ cột
     * render cột
     * @author: Croco
     * @since: 16-05-2020
     * @echo string html 
    */
    public function build() {

        $this->startRow();

        echo $this->renderElements();

        $this->endRow();
    }

    /**
     * @todo: hàm thêm cột cho dòng
     * - 1 dòng trong html có nhiều cột
     * @author: Croco
     * @since: 16-05-2020
     * @param Column $column
     * @return mixed
    */
    protected function addColumn(Column $column) {

        $this->appendElement($column);
        return $this;
    }

    /**
     * @todo: Hàm bắt đầu tag html cho dòng
     * @author: Croco
     * @since: 16-05-2020
     * @echo string 
    */
    protected function startRow() {

        $this->class("row");
        $attributes = $this->getAttributes() ?: [];
        echo $this->startElement("div", $attributes);
    }

    /**
     * @todo: Hàm kết thúc tag html cho dòng
     * @author: Croco
     * @since: 16-05-2020
     * @echo string 
    */
    protected function endRow() {

        echo $this->endElement("div");
    }
}
