
/*
$(document).ready(function(){
    


     $("#testimonials").on('click', '.blue_dot', function(){
     
      //var dugme= $(this).data();
      //var slajd= dugme.slide;
      
          var element1 = $('.active-slide');
          var nextSlideID = $(this).data('slide');
          var element2 = $(nextSlideID);
      fejdovanje(element1,element2);


     
});

      function fejdovanje(){
        
          
          
        $(element1).fadeIn(800).addClass('active-slide')
        .delay(4000).fadeOut(800)
        .removeClass('active-slide');

        $(element2).fadeIn(800).addClass('active-slide')
        .delay(4000).fadeOut(800)
        .removeClass('active-slide');
  

      }

      

     
});
*/

/*
    (function proba(){

        
        $('#testimoni1').fadeIn(800).delay(4000).fadeOut(800, function(){
          $('#testimoni2').fadeIn(800).delay(4000).fadeOut(800, function(){
            $('#testimoni3').fadeIn(800).delay(4000).fadeOut(800, function(){
              $('#testimoni4').fadeIn(800).delay(4000).fadeOut(800, function(){
                $('#testimoni5').fadeIn(800).delay(4000).fadeOut(800, function(){
                   
               });
              });
            });
          });
        });
      setTimeout(proba, 28000);

    })();
*/    
      
$(document).ready(function(){

/*
  $("#testimonials").on("click","button",function(){

          
          var nextSlideID = $(this).data('slide');
          var elem1 = $(nextSlideID);
          var elem2 = $(".active-slide").next();
          fejdovanje(elem1,elem2);

  });
*/

//   function fejdovanje(){

    

// if(typeof elem2 === undefined){
//       $("#testimoni1").addClass("active-slide");

//     }

//     var elem1= $(".active-slide");
//     var elem2 = $(".active-slide").next();

//     $(elem1).addClass("active-slide").fadeIn(800).delay(4000)
//     .fadeOut(800).removeClass("active-slide");

//     $(elem2).addClass('active-slide');
  

    
   
    
//   }
// setInterval(fejdovanje,5600);

  $("#testimonials").on("click", "button", function() {
      var elem1       = $(".active-slide");
      var nextSlideID = $(this).data('slide');
      var elem2       = $(nextSlideID);
      fadeSlide(elem1,elem2);
  });

  function fadeSlide(element1, element2) {
     element1.fadeOut(800).removeClass('active-slide');
     element2.delay(800).fadeIn(800).addClass('active-slide');

  }

  setInterval(function(){

    var element1 = $(".active-slide");
    var element2 = $(".active-slide").next();

    if(typeof elem2 === undefined){
      $("#testimoni1").addClass("active-slide");
    }

    
    fadeSlide(element1,element2)},5600);
});