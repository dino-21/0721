      $(function(){
        var num = 1;

        function changePic(idx) {
          if(idx){
            if(num == 7) num = 0
            num++;
          } else {
            if (num == 1) num = 8
            num--;
          }

          var imgTag = document.getElementById("sideb")
          imgTag.setAttribute("src", "img/main/sideslide"+num+".jpg")

        }


        $(".sideslideprev").click(function(){
          changePic(0)
        })

        $(".sideslidenext").click(function(){
          changePic(1)
        })

      })