

  $(function(){
    $('.sellranking2').hide();
    $('.towewrap > div:nth-of-type(2)').click(function(){
   
    $(".todaybox").css({"border-bottom":"1px solid #888"})
    $(".weekbox").css({"border-bottom":"none"})

    $('.sellranking2').fadeIn();

    $('.sellranking1').hide();

   });

   $('.towewrap > div:nth-of-type(1)').click(function(){
    $(".todaybox").css({"border-bottom":"none"})
    $(".weekbox").css({"border-bottom":"1px solid #888"})
    $('.sellranking1').fadeIn();

    $('.sellranking2').hide();

   });

  });
