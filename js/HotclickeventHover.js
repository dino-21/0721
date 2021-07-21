        $(function() {
            $("#booklist>li").mouseenter(function() {
                $("#booklist>li>div>span").hide();
                $(this).find("span").fadeIn();
            }).mouseleave(function() {
                $("#booklist>li>div>span").fadeOut();
            })
        })
