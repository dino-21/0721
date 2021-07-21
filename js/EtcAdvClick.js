$(function(){
  $(".etcclick>li").click(function(){

    $(".etcclick>li").css({"color":"#fff"})
    $(this).css({"color":"#3fd0ff"})

    var i=$(this).index()

      if($(this).index()==i){
        $("#etc3>img").hide()
        $("#etc3>img").eq(i).show()
      }
  })
})