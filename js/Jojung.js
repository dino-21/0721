$(function() {
            $(".jojung").mouseenter(function() {
                if ($(".jojung2").css("display") == "none") {
                    $(".jojung2").animate({
                        height: 'toggle',
                        width: 'toggle'
                    })
                }
            })

            $(".guide2").click(function() {
                $(".jojung2").fadeOut();
            })
            $(".guide3").click(function() {
                $(".jojung2").fadeOut();
            })
        })
