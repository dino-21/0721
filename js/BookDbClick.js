$(function(){
  $(".bookdbclick>li").click(function(){

    $(".bookdbclick>li").css({"color":"#fff"})
    $(this).css({"color":"#3fd0ff"})

    var i=$(this).index()

      if($(this).index()==i){
        $(".boxnonewrap").hide()
        $(".boxnonewrap").eq(i).show()
      }
  })
})