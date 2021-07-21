$(function(){
  var i=0;
  $(".choicebottombox > ul > li").mouseenter(function(){
    i = ($(this).index())+1
    $(".choicebox > .chojson > ul> li").hide()
    $(".choicebox > .chojson > ul> li:nth-child"+"("+i+")").show()
  })
})