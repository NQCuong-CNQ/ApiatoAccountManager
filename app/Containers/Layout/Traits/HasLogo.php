<?php

namespace App\Containers\Layout\Traits;
use App\Containers\Layout\Widgets\Logo;
use Closure;
use App\Containers\Layout\Facades\Layout;
use App\Containers\Layout\Layout as LayoutInstance;

/**
 * @todo: Class hỗ trợ quản lý logo
 * - logo: hàm build logo, truyền vào là html hoặc view
 * @author: Croco
 * @since: 16-05-2020
*/
trait HasLogo
{

    // logo
    protected $logo = null;

    /**
     * @todo: hàm build logo
     * - nếu là instance của Layout thì khởi tạo widget logo
     * - nếu là instance khác thì lấy logo từ Layout
     * @author: Croco
     * @since: 16-05-2020
     * @param Closure|Sidebar 
     * @return Sidebar
     */
    public function logo($builder = null) {

        if($builder instanceof Logo) {

            if(!($this instanceof LayoutInstance)) {

                return Layout::logo($builder);
            }

            $this->logo = $builder;
            return $this;
        }

        if($this instanceof LayoutInstance) {

            $logo = $this->logo;
            if(!$logo) {

                $logo = new Logo($builder);
                $this->logo = $logo;
            }
        } else {

            $logo = Layout::logo($builder);
        }

        if($builder instanceof Closure) {

            return $this;
        }

        return $logo;
    }
}