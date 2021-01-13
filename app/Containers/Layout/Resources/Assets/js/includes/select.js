$(function() {

    /**
     * @todo: load Select2 cho 1 select
     */
    var select2Custom = $.select2Custom = function select2Custom(element, options = {}) {

        options = options || {};
        
        // các options default
        var objDefault = {
            theme             : "bootstrap4",
            containerCssClass : ':all:',
            allowClear        : true,
            minimumInputLength: 0,
            placeholder       : trans("Layout::layout.select2.placeholders"),
            language          : {
                inputTooShort: function() {
                    return trans("Layout::layout.select2.select2_input_too_short");
                },
                noResults: function() { return trans("Layout::layout.select2.select2_no_results"); }
            },
        }

        var properties = objDefault;
        // extend lại dữ liệu nếu thay đổi
        if (options && Object.keys(options).length) {
            properties = $.extend({}, objDefault, options);
        }

        // select select2 data-remove danh sách tỉnh thành        
        $(element).select2(properties);
    };

    /**
     * @todo: setvalue select 2
     */
    var setValueSelect2 = $.setValueSelect2 = function setValueSelect2(element, data = {}){

        data = data || {};

        if(!Object.keys(data).length){
            return;
        }

        // kiểm tra có dữ liệu chưa thì xóa đ
        $(element).find('option[value="'+data.id+'"]').detach();

        // create the option and append to Select2
        var option = new Option(data.text, data.id, true, true);
        $(element).append(option).trigger('change');

        // manually trigger the `select2:select` event
        $(element).trigger({
            type: 'select2:select',
            params: {
                data:data,
                ...data
            }
        });
    }
});