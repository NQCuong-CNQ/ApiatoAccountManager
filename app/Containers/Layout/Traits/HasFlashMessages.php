<?php

namespace App\Containers\Layout\Traits;

use Illuminate\Support\MessageBag;

/**
 * @todo: Class hỗ trợ quản lý flash message
 * => sử dụng trong tình huống muốn đẩy 1 thông báo lỗi hoặc thành công ra view thông qua flash message
 * - withSuccess: đẩy message có type là success la layout
 * - withError: đẩy message có type là error la layout
 * - withWarning: đẩy message có type là warning la layout
 * - withInfo: đẩy message có type là info la layout
 * @author: Croco
 * @since: 15-05-2020
*/
trait HasFlashMessages
{
    
    /**
     * @todo hàm push message có type là success ra layout
     * => sử dụng trong tình huống muốn hiển thị 1 thông báo thành công
     * - push thông qua session flash message
     * ngoài layout sẽ lấy từ session này ra để hiển thị
     * @author Croco
     * @since 16-05-2020
     * @param string tiêu đề
     * @param string nội dung
     * @return mixed
     */
    public function withSuccess(string $title = '', string $message = '') {

        $message = new MessageBag(get_defined_vars());
        $this->withMessage("success", $message);
        return $this;
    }

    /**
     * @todo hàm push message có type là error ra layout
     * => sử dụng trong tình huống muốn hiển thị 1 thông báo lỗi
     * - push thông qua session flash message
     * ngoài layout sẽ lấy từ session này ra để hiển thị
     * @author Croco
     * @since 16-05-2020
     * @param string tiêu đề
     * @param string nội dung
     * @return mixed
     */
    public function withError(string $title = '', string $message = '') {

        $message = new MessageBag(get_defined_vars());
        $this->withMessage("error", $message);
        return $this;
    }

    /**
     * @todo hàm push message có type là warning ra layout
     * => sử dụng trong tình huống muốn hiển thị 1 thông báo cảnh báo
     * - push thông qua session flash message
     * ngoài layout sẽ lấy từ session này ra để hiển thị
     * @author Croco
     * @since 16-05-2020
     * @param string tiêu đề
     * @param string nội dung
     * @return mixed
     */
    public function withWarning(string $title = '', string $message = '') {

        $message = new MessageBag(get_defined_vars());
        $this->withMessage("warning", $message);
        return $this;
    }

    /**
     * @todo hàm push message có type là info ra layout
     * => sử dụng trong tình huống muốn hiển thị 1 thông báo thông tin
     * - push thông qua session flash message
     * ngoài layout sẽ lấy từ session này ra để hiển thị
     * @author Croco
     * @since 16-05-2020
     * @param string tiêu đề
     * @param string nội dung
     * @return mixed
     */
    public function withInfo(string $title = '', string $message = '') {

        $message = new MessageBag(get_defined_vars());
        $this->withMessage("info", $message);
        return $this;
    }

    /**
     * @todo hàm push message ra layout
     * => sử dụng trong tình huống muốn hiển thị 1 thông báo có loại custom
     * - push thông qua session flash message
     * @author Croco
     * @since 16-05-2020
     * @param string loại thông báo
     * @param MessageBag thông tin
     * @return mixed
     */
    public function withMessage($type = '', MessageBag $message) {

        session()->flash($type, $message);
        return $this;
    }
}
