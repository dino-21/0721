      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"2022"},
        headers:{Authorization: "KakaoAK ec47a9bda05472ac2b77a05ffa4d70e8"}
      })
        .done(function( msg ) {

           $(".howulbox > ul  li").eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
           $(".howulbox > ul  li").eq(1).append("<img src='"+msg.documents[1].thumbnail+"'/>");
           $(".howulbox > ul  li").eq(2).append("<img src='"+msg.documents[2].thumbnail+"'/>");

           //1

            var str=msg.documents[0].title;
            var str2=str.substring(0,10);
            var str3=msg.documents[0].contents;
            var str4=str3.substring(0,10);

           $(".howulbox2 > ul > li > p ").eq(0).prepend(str4);
           $(".howulbox2 > ul > li > span ").eq(0).prepend(str2);

           //2

            var str5=msg.documents[1].title;
            var str6=str5.substring(0,10);
            var str7=msg.documents[1].contents;
            var str8=str7.substring(0,10);

           $(".howulbox2 > ul > li > p ").eq(1).prepend(str8);
           $(".howulbox2 > ul > li > span ").eq(1).prepend(str6);

           //3

            var str9=msg.documents[2].title;
            var str10=str9.substring(0,10);
            var str11=msg.documents[2].contents;
            var str12=str11.substring(0,10);

           $(".howulbox2 > ul > li > p ").eq(2).prepend(str12);
           $(".howulbox2 > ul > li > span ").eq(2).prepend(str10);


        });
