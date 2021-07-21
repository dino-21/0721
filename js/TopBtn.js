  $(function(){
        var topEle = $('#topBtn');
        var delay = 500;
        topEle.on('click', function() {
            $('html, body').stop().animate({
                scrollTop: 0
            }, delay);
        });

})