$(function(){
  var i=0;
  $(".exclusive > .exab > li").click(function(){
    i = ($(this).index())+1
    $(".exclusive > .exdiv > li").hide()

    $(".exclusive > .exab > li").css({
      "border-left" : "none",
      "border-top" : "none",
      "border-right" : "none",
      "border-bottom" : "1px solid #000",
      "color" : "#000"
    })

    $(".exclusive > .exab > li:nth-of-type"+"("+i+")").css({
      "border-left" : "1px solid #000",
      "border-top" : "1px solid #000",
      "border-right" : "1px solid #000",
      "border-bottom" : "none",
      "color" : "#E35039"
    })

    $(".exclusive > .exdiv > li:nth-of-type"+"("+i+")").stop().show()
  })
});