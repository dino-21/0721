      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"어린이전집"},
        headers:{Authorization: "KakaoAK ec47a9bda05472ac2b77a05ffa4d70e8"}
      })
        .done(function( msg ) {

            console.log( msg.documents[0].title );
            console.log( msg.documents[0].thumbnail );


            /// 1

            var str=msg.documents[0].title;
            var str2=str.substring(0,15);
            var str3 = msg.documents[0].price.toLocaleString()
            var str4 = msg.documents[0].sale_price.toLocaleString()

           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(0).append("<h4>"+str2+"..</h4>")
           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(0).append("<span>정가 "+str3+"원</span>")
           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(0).append("<h5>"+str4+"원</h5>")


            /// 2

            var str5=msg.documents[1].title;
            var str6=str5.substring(0,15);
            var str7=msg.documents[1].price.toLocaleString()
            var str8=msg.documents[1].sale_price.toLocaleString()

           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(1).append("<img src='"+msg.documents[1].thumbnail+"'/>");
           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(1).append("<h4>"+str6+"..</h4>")
           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(1).append("<span>정가 "+str7+"원</span>")
           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(1).append("<h5>"+str8+"원</h5>")

            /// 3

            var str9=msg.documents[2].title;
            var str10=str9.substring(0,15);
            var str11=msg.documents[2].price.toLocaleString()
            var str12=msg.documents[2].sale_price.toLocaleString()

           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(2).append("<img src='"+msg.documents[2].thumbnail+"'/>");
           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(2).append("<h4>"+str10+"..</h4>")
           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(2).append("<span>정가 "+str11+"원</span>")
           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(2).append("<h5>"+str12+"원</h5>")

            /// 4

            var str13=msg.documents[3].title;
            var str14=str13.substring(0,15);
            var str15=msg.documents[3].price.toLocaleString()
            var str16=msg.documents[3].sale_price.toLocaleString()

           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(3).append("<img src='"+msg.documents[3].thumbnail+"'/>");
           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(3).append("<h4>"+str14+"..</h4>")
           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(3).append("<span>정가 "+str15+"원</span>")
           $(".exclusive > .exdiv > li:nth-child(4) > .exdivsub > li").eq(3).append("<h5>"+str16+"원</h5>")
  

        });
