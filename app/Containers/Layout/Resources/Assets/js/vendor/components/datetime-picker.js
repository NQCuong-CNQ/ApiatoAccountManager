import '@chenfengyuan/datepicker';
import 'daterangepicker';
import 'fullcalendar';
import moment from 'moment';

window.moment = moment;

const dateRangePickerOrigin = $.fn.daterangepicker;

/**
 * @todo custom các options mặc định dateRangePicker
 * 
 * các @attribute sự dụng
 * 
 * @attribute data-single-date-picker           loại daterankpicker single hay từ đến (bolean: true = single, false = từ đến)
 * @attribute data-show-dropdowns               show select chọn tháng năm
 * @attribute data-show-week-numbers            sau số tuần
 * @attribute data-show-iso-week-numbers        sau số tuần
 * @attribute data-time-picker                  chức năng chọn giờ phút
 * @attribute data-time-picker24-hour           loại giờ
 * @attribute data-time-picker-increment        max số phút
 * @attribute data-time-picker-seconds          bật thêm chọn giây
 * @attribute data-auto-apply                   tụ động apply
 * @attribute data-auto-update-input            auto tự động lấy ngày (không nên bật chỉ nên bật khi có value trước đó)
 * @attribute data-always-show-calendars        luôn luôn show bảng lịch ghi sự dụng range
 * @attribute data-start-date                   bắt đầu
 * @attribute data-end-date                     kết thúc
 * @attribute data-min-date                     ngày nhỏ nhất
 * @attribute data-max-date                     ngày lớn nhất
 * @attribute data-min-year                     năm nhỏ nhất
 * @attribute data-max-year                     năm lớn nhất
 * @attribute data-opens                        show panel trái phải
 * @attribute data-drops                        show panel trên dưới
 * @attribute data-show-custom-range-label      label range
 * @attribute data-format                       kiểu format
 * 
 * @author Nguyễn Chiến
 * @since 09-09-2020
 * 
 * @input 
 *     @param options
 * 
 * @output 
 */
$.fn.daterangepicker = function daterangepicker(options) {

    if(
        (
            !Array.isArray(options)
            && typeof options === "object"
        )
        || (
            options === null
            || options === undefined
        )
    ) {

        const trans = window.trans;
        options = options || {};

        let dataAttribute = $(this).data();
        options = $.extend({}, dataAttribute, options);

        let ranges = options.ranges || {};
        let locale = options.locale || {};
        let format = helper.datetime.getMomentFormat(options.format) || helper.datetime.getMomentDateFormat() || 'DD.MM.YYYY HH:mm:ss';

        options = {
            singleDatePicker    : true,
            showDropdowns       : true,
            showWeekNumbers     : false,
            showISOWeekNumbers  : false,
            timePicker          : false,
            timePicker24Hour    : true,
            autoUpdateInput     : false,
            minYear             : 1970,
            maxYear             : 2100,
            opens               : 'right',
            drops               : 'down',
            showCustomRangeLabel: false,
            ...options,
            ranges              : options.showCustomRangeLabel && {
                [trans('Layout::layout.date_time_picker.hom_nay')]      : [moment(), moment()],
                [trans('Layout::layout.date_time_picker.hom_qua')]      : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                [trans('Layout::layout.date_time_picker.7_ngay_truoc')] : [moment().subtract(6, 'days'), moment()],
                [trans('Layout::layout.date_time_picker.30_ngay_truoc')]: [moment().subtract(29, 'days'), moment()],
                [trans('Layout::layout.date_time_picker.thang_nay')]    : [moment().startOf('month'), moment().endOf('month')],
                [trans('Layout::layout.date_time_picker.thang_truoc')]  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
                ...ranges
            },
            locale: {
                "separator"       : " - ",
                "applyLabel"      : trans("Layout::layout.date_time_picker.apply"),
                "cancelLabel"     : trans("Layout::layout.date_time_picker.cancel"),
                "fromLabel"       : trans("Layout::layout.date_time_picker.from"),
                "toLabel"         : trans("Layout::layout.date_time_picker.to"),
                "customRangeLabel": "Custom",
                "daysOfWeek"      : [
                    trans("Layout::layout.date_time_picker.CN"),
                    trans("Layout::layout.date_time_picker.T2"),
                    trans("Layout::layout.date_time_picker.T3"),
                    trans("Layout::layout.date_time_picker.T4"),
                    trans("Layout::layout.date_time_picker.T5"),
                    trans("Layout::layout.date_time_picker.T6"),
                    trans("Layout::layout.date_time_picker.T7"),
                ],
                "monthNames"      : [

                    trans("Layout::layout.date_time_picker.Th 1"),
                    trans("Layout::layout.date_time_picker.Th 2"),
                    trans("Layout::layout.date_time_picker.Th 3"),
                    trans("Layout::layout.date_time_picker.Th 4"),
                    trans("Layout::layout.date_time_picker.Th 5"),
                    trans("Layout::layout.date_time_picker.Th 6"),
                    trans("Layout::layout.date_time_picker.Th 7"),
                    trans("Layout::layout.date_time_picker.Th 8"),
                    trans("Layout::layout.date_time_picker.Th 9"),
                    trans("Layout::layout.date_time_picker.Th 10"),
                    trans("Layout::layout.date_time_picker.Th 11"),
                    trans("Layout::layout.date_time_picker.Th 12"),
                ],
                "firstDay"        : 1,
                ...locale,
                "format"          : format,
            },
        };

        return dateRangePickerOrigin.apply(this, [options]);
    }
    
    return dateRangePickerOrigin.apply(this, arguments);
};


