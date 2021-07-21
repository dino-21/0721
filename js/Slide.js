      $(function() {
        var i = 0;

        $("#booklist li").mouseenter(function () {
          i = $(this).index()
        })

        function slide() {

          i++;

          if (i > $("#bl1 li:last").index()) {
            i = 0;
          }
          $("#bl1>li").eq(i).stop().fadeIn("slow");
          $("#bl1>li").eq(i - 1).stop().fadeOut();

          if (i == 1) {
            $(".slideadv").css({
              "background": "#c5e1d4"
            })
	$("#booklist li").eq(i-1).css({
              color:"black",
              borderTop:"none"
            });

            $("#booklist li").eq(i).css({
              borderTop:"3px solid red",
	 margin: "-1px 0 0 0"
            });

          } else if (i == 2) {
            $(".slideadv").css({
              "background": "#fff"
            })
	$("#booklist li").eq(i-1).css({
              color:"black",
              borderTop:"none"
            });

            $("#booklist li").eq(i).css({
              borderTop:"3px solid red",
	 margin: "-1px 0 0 0"
            });
          } else if (i == 3) {
            $(".slideadv").css({
              "background": "#fee7c3"
            })
	$("#booklist li").eq(i-1).css({
              color:"black",
              borderTop:"none",
	 margin: "-1px 0 0 0"
            });

            $("#booklist li").eq(i).css({
              borderTop:"3px solid red",
	 margin: "-1px 0 0 0"
            });
          } else if (i == 4) {
            $(".slideadv").css({
              "background": "#d3b5c5"
            })
	$("#booklist li").eq(i-1).css({
              color:"black",
              borderTop:"none",
	 margin: "-1px 0 0 0"
            });

            $("#booklist li").eq(i).css({
              borderTop:"3px solid red",
	 margin: "-1px 0 0 0"
            });
          } else {
            $(".slideadv").css({
              "background": "#ADBFFF"
            })
	$("#booklist li").eq(i-1).css({
              color:"black",
              borderTop:"none"
            });

            $("#booklist li").eq(i).css({
              borderTop:"3px solid red",
	 margin: "-1px 0 0 0"
            });
          }

        }

        $("#booklist li").eq(0).mouseenter(function () {
          var i = 0;
          $(".slideadv").css({
            "background": "#ADBFFF"
          });
          $("#booklist li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $("#bl1 li").stop().hide();
          $("#bl1 li").eq(0).stop().show();
        });

        $("#booklist li").eq(1).mouseenter(function () {
          var i = 0;
          $(".slideadv").css({
            "background": "#c5e1d4"
          });
          $("#booklist li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $("#bl1 li").stop().hide();
          $("#bl1 li").eq(1).stop().show();
        });

        $("#booklist li").eq(2).mouseenter(function () {
          var i = 0;
          $(".slideadv").css({
            "background": "#fff"
          });
          $("#booklist li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $("#bl1 li").stop().hide();
          $("#bl1 li").eq(2).stop().show();
        });

        $("#booklist li").eq(3).mouseenter(function () {
          var i = 0;
          $(".slideadv").css({
            "background": "#fee7c3"
          });
          $("#booklist li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $("#bl1 li").stop().hide();
          $("#bl1 li").eq(3).stop().show();
        });

        $("#booklist li").eq(4).mouseenter(function () {
          var i = 0;
          $(".slideadv").css({
            "background": "#d3b5c5"
          });
          $("#booklist li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $("#bl1 li").stop().hide();
          $("#bl1 li").eq(4).stop().show();
        });

        var ani = setInterval(slide, 3000)

        $("#booklist li").mouseover(function () {
          clearInterval(ani);
        });

        $("#booklist li").mouseout(function () {
          $(this).css({
	borderTop: "3px solid red",
	 margin: "-1px 0 0 0"
          });
          ani = setInterval(slide, 3000);
        });
      })