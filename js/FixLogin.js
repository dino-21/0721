$(function() {
            $(".loginfixed > .nextbox").click(function(){
	  if($(".loginfixed").css("width")=="8px"){
	    $(".loginfixed").stop().animate({
	      width : '145',
	    })
	    $(".prev").show()
	    $(".next").hide()
	  } else {
	    $(".loginfixed").stop().animate({
	      width : '8',
	    })	
	    $(".next").show()    
	    $(".prev").hide()
	  }
	})
        })
