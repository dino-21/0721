$(function(){
           $("#nc").click(function() {
                if ($("#up1").css("display") == "none") {
                    $("#up1").show()
                    $("#down1").hide()
	       $(".navslide").slideDown()

                } 
	
	else {
                    $("#up1").hide()
                    $("#down1").show()
	       $(".navslide").slideUp()
                }
            })
           $(".navslide > span").click(function(){
 	$(".navslide").slideUp()
              $("#up1").hide()
              $("#down1").show()
           })

})