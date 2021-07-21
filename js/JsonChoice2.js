      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"프랑스"},
        headers:{Authorization: "KakaoAK ec47a9bda05472ac2b77a05ffa4d70e8"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );


            /// 1

            var str=msg.documents[0].title;
            var str2=str.substring(0,13);
            var str3=msg.documents[0].contents;
            var str4=str3.substring(0,20);
            var str5=msg.documents[0].price/100*2;

           $("#cb2 > .choicebottombox > ul > li").eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
           $("#cb2 > .choicebox > .chojson> ul > li").eq(0).prepend("<img src='"+msg.documents[0].thumbnail+"'/>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(0).append("<h3>"+msg.documents[0].title+"</h3>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(0).append("<p>"+str4+"..."+"</p>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(0).append("<span>"+msg.documents[0].price+"원"+" + "+"<b>"+str5+"P"+"</b>"+"</span>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(0).append("<h5>"+msg.documents[0].publisher+"출판사 편집부 추천"+"</h5>")

            /// 2

            var str6=msg.documents[1].title;
            var str7=str6.substring(0,13);
            var str8=msg.documents[1].contents;
            var str9=str8.substring(0,20);
            var str10=msg.documents[1].price/100*2;

           $("#cb2 > .choicebottombox > ul > li").eq(1).append("<img src='"+msg.documents[1].thumbnail+"'/>");
           $("#cb2 > .choicebox > .chojson> ul > li").eq(1).prepend("<img src='"+msg.documents[1].thumbnail+"'/>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(1).append("<h3>"+msg.documents[1].title+"</h3>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(1).append("<p>"+str9+"..."+"</p>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(1).append("<span>"+msg.documents[1].price+"원"+" + "+"<b>"+str10+"P"+"</b>"+"</span>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(1).append("<h5>"+msg.documents[1].publisher+"출판사 편집부 추천"+"</h5>")

            /// 3

            var str11=msg.documents[2].title;
            var str12=str11.substring(0,13);
            var str13=msg.documents[2].contents;
            var str14=str13.substring(0,20);
            var str15=msg.documents[2].price/100*2;

           $("#cb2 > .choicebottombox > ul > li").eq(2).append("<img src='"+msg.documents[2].thumbnail+"'/>");
           $("#cb2 > .choicebox > .chojson> ul > li").eq(2).prepend("<img src='"+msg.documents[2].thumbnail+"'/>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(2).append("<h3>"+msg.documents[2].title+"</h3>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(2).append("<p>"+str14+"..."+"</p>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(2).append("<span>"+msg.documents[2].price+"원"+" + "+"<b>"+str15+"P"+"</b>"+"</span>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(2).append("<h5>"+msg.documents[2].publisher+"출판사 편집부 추천"+"</h5>")

            /// 4

            var str16=msg.documents[3].title;
            var str17=str16.substring(0,13);
            var str18=msg.documents[3].contents;
            var str19=str18.substring(0,20);
            var str20=msg.documents[3].price/100*2;

           $("#cb2 > .choicebottombox > ul > li").eq(3).append("<img src='"+msg.documents[3].thumbnail+"'/>");
           $("#cb2 > .choicebox > .chojson> ul > li").eq(3).prepend("<img src='"+msg.documents[3].thumbnail+"'/>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(3).append("<h3>"+msg.documents[3].title+"</h3>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(3).append("<p>"+str19+"..."+"</p>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(3).append("<span>"+msg.documents[3].price+"원"+" + "+"<b>"+str20+"P"+"</b>"+"</span>")
           $("#cb2 > .choicebox > .chojson> ul > li").eq(3).append("<h5>"+msg.documents[3].publisher+"출판사 편집부 추천"+"</h5>")


        });
