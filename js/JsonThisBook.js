      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"명작"},
        headers:{Authorization: "KakaoAK ec47a9bda05472ac2b77a05ffa4d70e8"}
      })
        .done(function( msg ) {
 
           /// 1

            var str=msg.documents[0].title;
            var str2=str.substring(0,20);
            var str3=msg.documents[0].contents;
            var str4=str3.substring(0,60);

           $(".thisulbox > ul > li > .wrap-star > .thisimgbox").eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
           $(".thisulbox > ul > li > .wrap-star > p").eq(0).append(str2);
           $(".thisulbox > ul > li > .wrap-star > h5").eq(0).append("<span>"+msg.documents[0].price+"원</span>"+" "+msg.documents[0].sale_price+"원");
           $(".thisulbox > ul > li > .wrap-star > .interpbox").eq(0).prepend(str4);


           /// 2

            var str5=msg.documents[1].title;
            var str6=str5.substring(0,20);
            var str7=msg.documents[1].contents;
            var str8=str7.substring(0,60);

           $(".thisulbox > ul > li > .wrap-star > .thisimgbox").eq(1).append("<img src='"+msg.documents[1].thumbnail+"'/>");
           $(".thisulbox > ul > li > .wrap-star > p").eq(1).append(str6);
           $(".thisulbox > ul > li > .wrap-star > h5").eq(1).append("<span>"+msg.documents[1].price+"원</span>"+" "+msg.documents[1].sale_price+"원");
           $(".thisulbox > ul > li > .wrap-star > .interpbox").eq(1).prepend(str8);

           /// 3

            var str9=msg.documents[2].title;
            var str10=str9.substring(0,20);
            var str11=msg.documents[2].contents;
            var str12=str11.substring(0,60);

           $(".thisulbox > ul > li > .wrap-star > .thisimgbox").eq(2).append("<img src='"+msg.documents[2].thumbnail+"'/>");
           $(".thisulbox > ul > li > .wrap-star > p").eq(2).append(str10);
           $(".thisulbox > ul > li > .wrap-star > h5").eq(2).append("<span>"+msg.documents[2].price+"원</span>"+" "+msg.documents[2].sale_price+"원");
           $(".thisulbox > ul > li > .wrap-star > .interpbox").eq(2).prepend(str12);

           /// 4

            var str13=msg.documents[3].title;
            var str14=str13.substring(0,20);
            var str15=msg.documents[3].contents;
            var str16=str15.substring(0,60);

           $(".thisulbox > ul > li > .wrap-star > .thisimgbox").eq(3).append("<img src='"+msg.documents[3].thumbnail+"'/>");
           $(".thisulbox > ul > li > .wrap-star > p").eq(3).append(str14);
           $(".thisulbox > ul > li > .wrap-star > h5").eq(3).append("<span>"+msg.documents[3].price+"원</span>"+" "+msg.documents[3].sale_price+"원");
           $(".thisulbox > ul > li > .wrap-star > .interpbox").eq(3).prepend(str16);

           /// 5

            var str17=msg.documents[4].title;
            var str18=str17.substring(0,20);
            var str19=msg.documents[4].contents;
            var str20=str19.substring(0,60);

           $(".thisulbox > ul > li > .wrap-star > .thisimgbox").eq(4).append("<img src='"+msg.documents[4].thumbnail+"'/>");
           $(".thisulbox > ul > li > .wrap-star > p").eq(4).append(str18);
           $(".thisulbox > ul > li > .wrap-star > h5").eq(4).append("<span>"+msg.documents[4].price+"원</span>"+" "+msg.documents[4].sale_price+"원");
           $(".thisulbox > ul > li > .wrap-star > .interpbox").eq(4).prepend(str20);

           /// 6

            var str21=msg.documents[5].title;
            var str22=str21.substring(0,20);
            var str23=msg.documents[5].contents;
            var str24=str23.substring(0,60);

           $(".thisulbox > ul > li > .wrap-star > .thisimgbox").eq(5).append("<img src='"+msg.documents[5].thumbnail+"'/>");
           $(".thisulbox > ul > li > .wrap-star > p").eq(5).append(str22);
           $(".thisulbox > ul > li > .wrap-star > h5").eq(5).append("<span>"+msg.documents[5].price+"원</span>"+" "+msg.documents[5].sale_price+"원");
           $(".thisulbox > ul > li > .wrap-star > .interpbox").eq(5).prepend(str24);

           /// 7

            var str25=msg.documents[6].title;
            var str26=str25.substring(0,20);
            var str27=msg.documents[6].contents;
            var str28=str27.substring(0,60);

           $(".thisulbox > ul > li > .wrap-star > .thisimgbox").eq(6).append("<img src='"+msg.documents[6].thumbnail+"'/>");
           $(".thisulbox > ul > li > .wrap-star > p").eq(6).append(str26);
           $(".thisulbox > ul > li > .wrap-star > h5").eq(6).append("<span>"+msg.documents[6].price+"원</span>"+" "+msg.documents[6].sale_price+"원");
           $(".thisulbox > ul > li > .wrap-star > .interpbox").eq(6).prepend(str28);

           /// 8

            var str29=msg.documents[7].title;
            var str30=str29.substring(0,20);
            var str31=msg.documents[7].contents;
            var str32=str31.substring(0,60);

           $(".thisulbox > ul > li > .wrap-star > .thisimgbox").eq(7).append("<img src='"+msg.documents[7].thumbnail+"'/>");
           $(".thisulbox > ul > li > .wrap-star > p").eq(7).append(str30);
           $(".thisulbox > ul > li > .wrap-star > h5").eq(7).append("<span>"+msg.documents[7].price+"원</span>"+" "+msg.documents[7].sale_price+"원");
           $(".thisulbox > ul > li > .wrap-star > .interpbox").eq(7).prepend(str32);
   

        });
