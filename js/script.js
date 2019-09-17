(function(window, $, undefined) {
    'use strict';

    $(window).load(function() {
        var targetNode = document.getElementById('uploadprogressbar');
        var config = { attributes: true, childList: false, subtree: false };
        var callback = function(mutationsList, observer) {
            if (mutationsList[0].attributeName !== "original-title") {
                return;
            }
            var original_title = $("#uploadprogressbar").attr("original-title");
            var eta = $("#uploadprogressbar > em .desktop").text();
            var percent = Math.round($("#uploadprogressbar").attr("aria-valuenow"));
            $("#uploadprogressbar em .desktop").html(eta + " (" + percent + "%)" + "<br>" + original_title).css({"line-height": "1", "margin-top": "-4px", "font-variant-numeric": "tabular-nums"});
            $("#uploadprogressbar .label").css("overflow", "visible");
        };
        
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    });
})(window, jQuery);