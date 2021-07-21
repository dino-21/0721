        $(function() {
            function hownext() {
                $(".howulbox>ul").animate({
                    "marginLeft": "-150px"
                }, function() {
                    $(".howulbox>ul li:first").appendTo(".howulbox>ul")
                    $(".howulbox>ul").css({
                        "marginLeft": "0px"
                    })
                })

                $(".howulbox2>ul").animate({
                    "marginLeft": "-150px"
                }, function() {
                    $(".howulbox2>ul li:first").appendTo(".howulbox2>ul")
                    $(".howulbox2>ul").css({
                        "marginLeft": "0px"
                    })
                })


            }

            function howprev() {

                $(".howulbox>ul li:last").prependTo(".howulbox>ul")
                $(".howulbox>ul").css({
                    "marginLeft": "-150px"
                })
                $(".howulbox>ul").animate({
                    "marginLeft": "0px"
                })

                $(".howulbox2>ul li:last").prependTo(".howulbox2>ul")
                $(".howulbox2>ul").css({
                    "marginLeft": "-150px"
                })
                $(".howulbox2>ul").animate({
                    "marginLeft": "0px"
                })

            }
            $(".howbookbox > .hownext").click(function() {
                hownext()
            })

            $(".howbookbox > .howprev").click(function() {
                howprev()

            })


        })