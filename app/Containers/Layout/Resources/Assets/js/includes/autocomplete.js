$(function() {

    /**
     * @todo autocomplete
     * @author Nguyễn Chiến
     * @since 04-07-2020
     * 
     * @param errors {Object} : các lỗi errors
     */
    var autocompleteInputCustom = $.autocompleteInputCustom = function autocompleteInputCustom(jElement, options = {}, cb){

        if(jElement.length){

            var objDefault = {
                source   : {},
                minLength: 0,
                position : { my : "right top", at: "right bottom" },
                select   : function (ui, data) {
                    cb && cb(data.item.data);
                },
            }

            var properties = objDefault;
            // extend lại dữ liệu nếu thay đổi
            if (options && Object.keys(options).length) {
                properties = $.extend({}, objDefault, options);
            }

            jElement.autocomplete(properties);
        }
    }
});