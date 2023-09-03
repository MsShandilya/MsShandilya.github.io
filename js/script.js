$(window).on("load",function(){
  $(".loader .inner").fadeOut(1000,function(){
        $(".loader").fadeOut(1500);
  });
})







$(document).ready(function()
{
   $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
     });

     var typed = new Typed(".typed",{
           strings: ["AWAKE ARISE and STOP not till you reach."],
         typeSpeed: 70,
         loop: true,
         startDelay: 1000,
         showCursor: false
     });

     $('.owl-carousel').owlCarousel({
    loop:true,
    items: 5,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        600:{
          items:4
        },
        938:{
          items:5
        }

    }
  });



       var skillsTopOffset = $(".skillSection").offset().top;
       var statsTopOffset = $(".statsSection").offset().top;
       var countUpFinished = false;

       $(window).scroll(function(){
            if(window.pageYOffset > skillsTopOffset- $(window).height()+250){
              $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor: '#fff',
                    trackColor: false,
                    scaleColor: false,
                    lineWidth: 4,
                    size: 152,
                    onStep: function(from, to, percent){
                      $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }

              if(!countUpFinished && window.pageYOffset > statsTopOffset- $(window).height()+250){
                    $(".counter").each(function() {
                         var element = $(this);
                         var endVal = parseInt(element.text());

                          element.countup(endVal);
                    });

                    countUpFinished = true;

            }
       });



       $("#navigation li a").click(function(e){
           e.preventDefault();

           var targetElement = $(this).attr("href");
           var targetPosition = $(targetElement).offset().top;
           $("html, body").animate({scrollTop: targetPosition-50},"slow");
       });

       const nav = $("#navigation");
       const navTop = nav.offset().top;

       $(window).on("scroll",stickyNavigation);

       function stickyNavigation(){
           var body = $("body");
           if($(window).scrollTop() >= navTop){
             body.css("padding-top", nav.outerHeight()+"px");
              body.addClass("fixedNav");
           }
           else{
                 body.css("padding-top",0);
                 body.removeClass("fixedNav");
           }
       }



});
