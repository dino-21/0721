$(function(){

  function interprev(){
      $("#interslidewrap>ul>li:last").prependTo("#interslidewrap>ul");
      $("#interslidewrap>ul").css({marginLeft:-700})
      $("#interslidewrap>ul").stop().animate({marginLeft:0},"fast")
  }

  function internext(){
    $("#interslidewrap>ul").stop().animate({marginLeft:-700},function(){
      $("#interslidewrap>ul>li:first").appendTo("#interslidewrap>ul");
      $("#interslidewrap>ul").css({marginLeft:0})
    })
  }

  function interslide(){
    $("#interslidewrap>ul").stop().animate({marginLeft:-700},function(){
      $("#interslidewrap>ul>li:first").appendTo("#interslidewrap>ul");
      $("#interslidewrap>ul").css({marginLeft:0})
    })
  }
  setInterval(interslide,7000)

  $(".interprev").click(function(){
    interprev()
  })

  $(".internext").click(function(){
    internext()
  })

})