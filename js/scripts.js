$(document).ready(function(){
    $("#myCarousel").carousel( { interval: 2000 } );
   
     $("#carouselButtons").click(function()
     {
      if($("#carouselButtons").children('span').hasClass("fa-pause"))
      {
          $("#myCarousel").carousel('pause');
          $("#carouselButtons").children('span').removeClass("fa-pause");
          $("#carouselButtons").children('span').addClass("fa-play");
      }
      else if($("#carouselButtons").children('span').hasClass("fa-play"))
      {
        $("#myCarousel").carousel('cycle');
          $("#carouselButtons").children('span').removeClass("fa-play");
          $("#carouselButtons").children('span').addClass("fa-pause");
      }
     });


     $("#reserveButton").click(function()
        { 
            $("#reservetable").modal('toggle');
        });

 $("#loginButton").click(function()
 {
      $("#loginModal").modal('toggle');
 });
});


    