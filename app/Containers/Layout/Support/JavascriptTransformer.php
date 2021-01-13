<?php

namespace App\Containers\Layout\Support;
use Laracasts\Utilities\JavaScript\Transformers\Transformer;
use Illuminate\Support\Facades\App;
use Illuminate\Contracts\Events\Dispatcher;

/**
 * @todo: Class override lại Transformer của laracasts/utilities
 * @purpose: 
 * - mục đích: chống dublicate khi gọi JavaScript:put nhiều lần ở các view
 * - ý tưởng: override lại hàm put thay vì put vào thì add sự kiện để render js
 *      thì chỉ put vào mảng và add 1 sự kiện duy nhất composing: {$view}
 *          khi view render thì echo ra js khai báo biến
 * @author: Croco
 * @since: 28-07-2020
*/
class JavascriptTransformer extends Transformer {

    protected $variables = [];
    protected $events;
    protected $views;

    /**
     * Create a new Laravel view binder instance.
     *
     * @param Dispatcher   $event
     * @param string|array $views
     */
    public function __construct($viewBinder, $namespace, $views)
    {
        parent::__construct($viewBinder, $namespace);

        $this->views = str_replace('/', '.', (array)$views);
        $this->events = App::make(Dispatcher::class);

        foreach ($this->views as $view) {
            $this->events->listen("composing: {$view}", function () {

                $js = $this->constructJavaScript($this->variables);
                echo '<script type="text/javascript">' . $js . '</script>';
            });
        }
    }

    /**
     * Bind the given array of variables to the view.
     */
    public function put() {

        $variables = $this->normalizeInput(func_get_args());
        $this->variables = array_merge($this->variables, $variables);
        $js = $this->constructJavaScript($variables);

        return $js;
    }
}
