import 'select2/dist/js/select2.full.js';
import '@atomaras/bootstrap-multiselect';

const selectOrigin = $.fn.select2;

// custom select default options
$.fn.select2 = function select2(options) {

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
    
        let language = options.language || {};
    
        options = {
            theme: "bootstrap4",
            containerCssClass: ':all:',
            allowClear: true,
            minimumInputLength: 0,
            placeholder: trans("Layout::layout.select2.placeholders"),
            ...options,
            language: {
                inputTooShort: () => {
    
                    return trans("Layout::layout.select2.select2_input_too_short");
                },
                noResults: () => { 
    
                    return trans("Layout::layout.select2.select2_no_results");
                },
                ...language
            },
        };
    
        return selectOrigin.apply(this, [options]);
    }
    
    return selectOrigin.apply(this, arguments);
};