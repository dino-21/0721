$(function(){
  $(".trendclick>li").click(function(){
    $(".trendclick>li").css({"color":"#d6d6d6"})
    $(this).css({"color":"#3fd0ff"})

    var i=$(this).index()

      if($(this).index()==i){
        $(".trendimgbox>img").hide()
        $(".trendimgbox>img").eq(i).show()
      }
  })
})