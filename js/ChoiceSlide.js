      $(function(){
        $(".choicewrap > .choprev").click(function(){
          if($("#cb2").css("display")=="none"){
            $("#cb1").hide()
            $("#cb2").show()
          } else {
            $("#cb1").show()
            $("#cb2").hide()
          }
            if($("#h52").css("display")=="none"){
              $("#h51").hide()
              $("#h52").show()
            } else if ($("#h51").css("display")=="none"){
              $("#h51").show()
              $("#h52").hide()
            }
        })
        $(".choicewrap > .chonext").click(function(){
          if($("#cb2").css("display")=="none"){
            $("#cb1").hide()
            $("#cb2").show()
          } else {
            $("#cb1").show()
            $("#cb2").hide()
          }
            if($("#h52").css("display")=="none"){
              $("#h51").hide()
              $("#h52").show()
            } else if ($("#h51").css("display")=="none"){
              $("#h51").show()
              $("#h52").hide()
            }
        })
      })