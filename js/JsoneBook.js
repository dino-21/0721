      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"ebook"},
        headers:{Authorization: "KakaoAK ec47a9bda05472ac2b77a05ffa4d70e8"}
      })
        .done(function( msg ) {

                       console.log( msg );
            var divs = document.getElementsByTagName('div');
            
            for(var i=0; i<divs.length; i++){
 
                  var str=msg.documents[i].title;
                  var str2=str.substring(0,17);
	    var salep = parseInt(((msg.documents[i].price-msg.documents[i].sale_price)/msg.documents[i].price)*100)

	
                  $("#fdiv6 .ftextwrap div").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                  $("#fdiv6 .ftextwrap div").eq(i).append("<h5>"+str2+"..."+"</h5>");
                  $("#fdiv6 .ftextwrap div").eq(i).append("<h6>"+msg.documents[i].sale_price+"원"+"</h6>");


                  $("#fdiv6 .ftextwrap div").eq(i).append("<h6 class='saleprice'>"+msg.documents[i].price+"원"+"</h6>");
                  $("#fdiv6 .ftextwrap div").eq(i).append("<h6 class='saleprice2'>"+"("+salep+"%↓)"+"</h6>");  
  
            }

        });
