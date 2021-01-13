$(function() {

    /**
     * @todo checkbox all
     * @author Nguyễn Chiến
     */
    var checkboxAll = $.checkboxAll  = function checkboxAll(elementsCheckboxAll, elementsCheckbox) {

        var jElementsCheckboxAll = $(elementsCheckboxAll);
        var jElementsCheckbox = $(elementsCheckbox);

        if(jElementsCheckbox.length){

            jElementsCheckbox.prop("checked", jElementsCheckboxAll.is(":checked"));
        }
    };

    /**
     * @todo checkbox
     * @author Nguyễn Chiến
     */
    var checkbox = $.checkbox  = function checkbox(elementsCheckboxAll, elementsCheckbox) {

        var jElementsCheckboxAll = $(elementsCheckboxAll);
        var jElementsCheckbox = $(elementsCheckbox);
        if(jElementsCheckbox.length){
            var isTrue = true;
            $.each(jElementsCheckbox, function(idx, item){

                if($(item).is(':checkbox')){
                    if(!$(item).is(":checked")){
                        isTrue = false
                    }
                }

            });
            jElementsCheckboxAll.prop("checked", isTrue);
            return;
        }

        jElementsCheckboxAll.prop("checked", false);
    };
});