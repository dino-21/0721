$(function(){
  var i=0;
  $(".field > .art2 > #fieldbooklist > li").mouseenter(function(){
    i = ($(this).index())+1
    $(".field > .art2 > div").hide()


    $(".field > .art2 > #fieldbooklist > li").css({
	"border-bottom":"none",
             "color":"#000	"
    })

    $(".field > .art2 > #fieldbooklist > li:hover").css({
	"border-bottom":"2px solid #e66a57",
             "color":"#e66a57"
    })


    $(".field > .art2 > div:nth-of-type"+"("+i+")").stop().fadeIn("fast")
  })
});