import "inputmask/dist/jquery.inputmask.bundle.js";

$(function() {

    /**
     * @todo sự kiện format number khi change, keyup, pase
     * 
     * @author Nguyễn Chiến
     * @since 10-09-2020
     */
    var jDocument = $(document);
    var elFormatNumberInput = [
        'input[type="text"][class~="numeric"]',
        'input[class~="numeric"]:not([type])',
        'textarea[class~="numeric"]',
    ].join(',');

    var elFormatNumberText = [
        '[class~="numeric"]:not(input, textarea)',
    ].join(',');

    var $elFormatNumberInput = $(elFormatNumberInput);
    var $elFormatNumberText  = $(elFormatNumberText);

    // hook value khi .val => format luôn
    $elFormatNumberInput.hook("value",{
        transform: (value) => {
            return (helper.number.escapseFormat(value) || "") + "";
        },
    });

    // event
    jDocument.on('input', elFormatNumberInput, function(e) {

        var $this = $(this);
        var value = $this.val();
        if(value || value === 0 || value === "0"){
            
            // nếu có class integer
            if($this.hasClass( "integer" )){

                value = Inputmask.format(value, { alias: "integer"});
            }else{
                value = helper.number.formatNumber(value);
            }
        }

        

        $this.val(value);
    });

    // duyệt qua để format input
    $elFormatNumberInput.each((idx, item) =>{

        var $this = $(item);
        var value = $this.val();
        if(value || value === 0 || value === "0"){
            // nếu có class integer
            if($this.hasClass( "integer" )){

                value = Inputmask.format(value, { alias: "integer"});
            }else{
                value = helper.number.formatNumber(value);
            }
        }
        $this.val(value);
    });

    // duyệt qua để format text
    $elFormatNumberText.each((idx, item) =>{

        var $this = $(item);
        var value = $this.text();
        if(value || value === 0 || value === "0"){
            // nếu có class integer
            if($this.hasClass( "integer" )){

                value = Inputmask.format(value, { alias: "integer"});
            }else{
                value = helper.number.formatNumber(value);
            }
        }

        $this.text(value);
    });
});