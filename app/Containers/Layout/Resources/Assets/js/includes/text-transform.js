$(function() {

    let $document = $(document);

    // tự động capitalize text khi nhập liệu
    $document.on("input", "input.text-capitalize, textarea.text-capitalize", function(e) {

        let $this = $(this);
        let value = $this.val() || "";
        value = value.replace(/([^\s:\-])([^\s:\-]*)/g, function ($0, $1, $2) {
            return $1.toUpperCase() + $2.toLowerCase();
        });
        $this.val(value);
    });

    // tự động uppercase text khi nhập liệu
    $document.on("input", "input.text-uppercase, textarea.text-uppercase", function (e) {

        let $this = $(this);
        let value = $this.val() || "";
        value = value.toUpperCase();
        $this.val(value);
    });

    // tự động lowercase text khi nhập liệu
    $document.on("input", "input.text-lowercase, textarea.text-lowercase", function (e) {

        let $this = $(this);
        let value = $this.val() || "";
        value = value.toLowerCase();
        $this.val(value);
    });


    // chuyển đổi sang toCamelCase
    String.prototype.toCamelCase = function() {

        return this.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    }
});