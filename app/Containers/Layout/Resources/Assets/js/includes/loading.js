$(function() {
    
    /**
     * @todo backdropLoader
     * @author Nguyễn Chiến
     * @since 04-07-2020
     * 
     * @param errors {Object} : các lỗi errors
     */
    var backdropLoader = $.backdropLoader = function backdropLoader(message, isShow = true){

        var backdropLoader = $('.backdrop-loader');
        var span           = backdropLoader.find('span');
        message = message || trans('Layout::layout.messages.loading');
        if(!isShow){
            backdropLoader.hide();
            return;
        }

        span.text(message);
        backdropLoader.show();
    };
});