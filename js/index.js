$("#btn-all").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#scrollTo").offset().top
    },
    700
  );
});

$(".btn").click(function() {
  console.log("OK");

  if (!$(this).hasClass("active")) {
    $(".btn").removeClass("active");
    $(".btn")
      .find(".btn-p1")
      .removeClass("activep1");
    $(".btn")
      .find(".btn-p2")
      .removeClass("activep2");

    $(this).toggleClass("active");
    $(this)
      .find(".btn-p1")
      .toggleClass("activep1");
    $(this)
      .find(".btn-p2")
      .toggleClass("activep2");

    /*Displaying card*/

    // $("div[class^='containerbt']").attr('style','display : none');
    // var x = $(this).attr('id');
    // x = '.container' + x;
    // console.log(x);
    // $(x).attr('style','display : flex');
    var x = $(this).attr("id");
    //var c = x[2]-1;
    console.log(x);
    $.getJSON("json_data.json", function(json) {
      var y = json[x];
      var inject = "";
      for (var card in y) {
        inject =
          inject +
          '<li><img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;cs=srgb&amp;s=1cd7edb2ed25c1de4908db807e545988&amp;w=150&amp;h=150"/><div class="details"><span class="name">' +
          y[card].name +
          '</span><span class="title">' +
          y[card].name +
          '</span><a class="phone" href="tel:123-456-789">' +
          y[card].phone +
          '</a><a class="email" href="mailto:emilia.jacobs@email.com">' +
          y[card].email +
          "</a></div></li>";
        //console.log(inject);
      }
      // /console.log(inject);
      $(".cards").html(inject);
      //var z = y['contact1'].name;
      //console.log(y);
    });
  }
});
