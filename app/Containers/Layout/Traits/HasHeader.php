<?php

namespace App\Containers\Layout\Traits;
use App\Containers\Layout\Widgets\Header;
use Closure;
use App\Containers\Layout\Facades\Layout;
use App\Containers\Layout\Layout as LayoutInstance;

/**
 * @todo: Class hỗ trợ quản lý header
 * - header: hàm build thanh header, truyền vào là html hoặc view
 * @author: Croco
 * @since: 16-05-2020
*/
trait HasHeader
{

    // thanh header
    protected $header = null;

    /**
     * @todo: hàm build header
     * - nếu là instance của Layout thì khởi tạo widget Header
     * - nếu là instance khác thì lấy logo từ Layout
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|Sidebar 
     * @return Sidebar
     */
    public function header($builder = null) {

        if($builder instanceof Header) {

            if(!($this instanceof LayoutInstance)) {

                return Layout::header($builder);
            }

            $this->header = $builder;
            return $this;
        }

        if($this instanceof LayoutInstance) {

            $header = $this->header;
            if(!$header) {

                $header = new Header($builder);
                $this->header = $header;
            }
        } else {

            $header = Layout::header($builder);
        }

        if($builder instanceof Closure) {

            return $this;
        }

        return $header;
    }
}