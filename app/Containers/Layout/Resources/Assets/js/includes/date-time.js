$(function() {

    /**
     * @todo khi gắn class date-range-picker tự động đổ date-range-picker
     * 
     * @author Nguyễn Chiến
     * @since 09-09-2020
     */
    // chạy daterange picker
    if($.fn.daterangepicker && typeof $.fn.daterangepicker == "function"){

        let $elementDateRangePicker = $('.date-range-picker');
        var $elementDate;
        $.each($elementDateRangePicker, function (idx, element) {
    
            $elementDate  = $(element);
            $elementDate.daterangepicker();
            // sự kiện apply dữ liệu
            $elementDate.on('apply.daterangepicker', function (ev, picker) {
    
                let {
                    locale:{
    
                        format = helper.datetime.getMomentDateFormat() || 'DD.MM.YYYY HH:mm:ss'
                    } = {},
                    singleDatePicker,
                    startDate,
                    endDate
    
                } = picker || {};
    
                // kiểm tra loại single hay từ dến
                let value = '';
                if (singleDatePicker) {
    
                    value = startDate.format(format)
                    $(this).val(value);
    
                } else {
    
                    value =  startDate.format(format) + ' - ' + endDate.format(format);
                    $(this).val(value);
                }
    
                $(this).attr('title', value);
                $(this).trigger('change');
    
            }).on('show.daterangepicker', function (ev, picker) {
    
                var $container = picker.container;
                $container.addClass('fz-12-all rounded-0-all');
    
            }).on('cancel.daterangepicker', function (ev, picker) {
    
                $(this).val('');
                $(this).trigger('change');
            });
        })
    }
});