
$(document).scroll(function() {

    if ($(this).scrollTop() >= 50) {
    	
        // $('#logo-image').attr('src', 'img/Acme_Monogram_Colour.png')
        $(".important-nav").addClass("padding-on-my-header");
        
        $(".name img").css("content","url('images/logo.svg')");
        $(".name img").css("max-width","50px");
        $(".name img").css("margin","-.1em 0 0 0");

    }
    if ($(this).scrollTop() < 50) {

        $(".important-nav").removeClass("padding-on-my-header");
        // $(".name img").removeClass("image-small");
        $(".name img").css("content","url('images/logo.svg')");
        $(".name img").css("max-width","77px");
        $(".name img").css("margin","-1em 0 0 0");

        
    }
});


$(document).ready(function(){

	$('.image-link').magnificPopup({
		type:'image',


	});

	$('.popup-link').magnificPopup({ 
	  	type: 'image',
		closeOnContentClick: true
	});


	$(".proj_header").css('cursor', 'pointer');
	$(".proj_header").hover(function(){
		$(this).find(".dots").addClass('dots_hover');
		$(this).find(".proj_image").addClass("hovered");

	},
		function(){
			$(this).find(".dots").removeClass('dots_hover');
			$(this).find(".proj_image").removeClass("hovered");
		});
	
	$(".proj_header").click(function(){
		
		var sibling = $(this).next()
		sibling.slideToggle(500);
		$(this).find(".dots").toggleClass('dots_active');
		
	});

  $(".collapse_listen").css('cursor', 'pointer');
  $(".collapse_listen").hover(function(){
    // $(this).find(".dots").addClass('dots_hover');

  },
    function(){
      // $(this).find(".dots").removeClass('dots_hover');
    });
  
  $(".collapse_listen").click(function(){
    
    var parent = $(this).parent().parent().parent();
    var oderp = parent.parent();
    $('html, body').animate({
        scrollTop: $(oderp).offset().top
    }, 500);
    //console.log(parent);
    parent.slideToggle(500);
    // parent.show("slide", {direction:"down"},500);
    parent.prev().find(".dots").toggleClass('dots_active');
    
  });


	$('nav a').on('click', function() {

	    var scrollAnchor = $(this).attr('data-scroll')
	    var scrollPoint  = $("#"+scrollAnchor).offset().top - 40;
	                      
	   $('body,html').animate({
	       scrollTop: scrollPoint
	   }, 500);
	    
	   return false;

	});

	$(".proj_link").on('click', function(){

		var scrollAnchor = $(this).attr('data-scroll')
	    var scrollPoint  = $("#"+scrollAnchor).offset().top - 40;
	                      
	   $('body,html').animate({
	       scrollTop: scrollPoint
	   }, 500);
	    
	   return false;

	});

});