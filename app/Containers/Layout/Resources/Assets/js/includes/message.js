$(function() {

    /**
     * @todo show errors
     * @author Nguyễn Chiến
     * @since 04-07-2020
     * 
     * @param errors {Object} : các lỗi errors
     * @param isValidInput boolean : có add valid cho input
     */
    var onShowErrors = $.onShowErrors = function onShowErrors(errors = {}, isValidInput = true, options = {}) {

        var _self = this;
        errors = errors || {};
        if(Object.values(errors).length){

            var jElementbody = $('body');
            // xóa các valid input
            jElementbody.find('.is-invalid').removeClass('is-invalid');
            $.each(errors, function(key, item){

                var name = item.name || key;
                var title = item.title || item || '';
                // nếu có valid input => add class
                if(isValidInput){

                    jElementbody.find('[name="' + name + '"], [class~="' + name + '"]').addClass('is-invalid');
                }

                // hiển thị thông báo
                if(item.message){

                    toastr.error(item.message, title, {
    
                        timeOut        : 10000,
                        progressBar    : true,
                        showDuration   : 300,
                        hideDuration   : 1000,
                        extendedTimeOut: 1000,
                        showEasing: 'swing',
                        hideEasing: 'linear',
                        showMethod: 'fadeIn',
                        hideMethod: 'fadeOut',
                        closeDuration  : 1000,
                        ...options,
                    });
                }

            });
            return true;
        }
        return false;

    };

    /**
     * @todo show errors
     * @author Nguyễn Chiến
     * @since 04-07-2020
     * 
     * @param errors {Object} : các lỗi errors
     */
    var formatErrorsResponse = $.formatErrorsResponse = function formatErrorsResponse(err, title = '', isValidInput = true, options = {}) {

        var response  = err.responseJSON || {};
        var errors    = response.errors || {};
        var message   = response.message || err.message ||null;
        title = title || '';

        // duyệt qua lỗi
        var showErrors = [];
        if(Object.keys(errors).length){
            $.each(errors, function(key, messages){

                showErrors.push({
                    name : key,
                    message : messages[0],
                    title : title,
                });
            });
            $.onShowErrors(showErrors, isValidInput, options);

        }else if(message){
            toastr.error(message, title);

        }else{
            toastr.error(trans("Layout::layout.messages.error"), title);
        }

    };
});