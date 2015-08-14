
$(document).scroll(function() {

    if ($(this).scrollTop() >= 50) {
    	
        // $('#logo-image').attr('src', 'img/Acme_Monogram_Colour.png')
        $(".important-nav").addClass("padding-on-my-header");
        
        $(".name img").css("content","url('images/logo-sm.png')");
        $(".name img").css("max-width","50px");
        $(".name img").css("margin","-.1em 0 0 0");

    }
    if ($(this).scrollTop() < 50) {

        $(".important-nav").removeClass("padding-on-my-header");
        // $(".name img").removeClass("image-small");
        $(".name img").css("content","url('images/logo.png')");
        $(".name img").css("max-width","77px");
        $(".name img").css("margin","-1em 0 0 0");

        
    }
});




$(document).ready(function(){

	$(".proj_header").css('cursor', 'pointer');
	$(".proj_header").hover(function(){
		$(this).find(".dots").addClass('dots_hover');

	},
		function(){
			$(this).find(".dots").removeClass('dots_hover');
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

	// $(function(){
	// 	var sections= $("section");
	// 	var nav_links = $('.top-bar-section a');

	// 	sections.waypoint({
	// 		handler: function(direction){
	// 			var active_section;
 //      			active_section = $(this);
 //      			var activeID = active_section.attr('id');

 //      			if (direction === "up"){
 //      				// console.log("uppp");
 //      			 	activeID = active_section.prev().attr('id')
 //      			}
      			

 //      			// console.log(activeID);

 //      			nav_links.removeClass('active_color');

 //      			var anchors = $.map(nav_links, function(el){
	// 			  return $(el).get();
	// 			});
      			
      			


 //      			if(activeID=="portfolioSection"){
      				
 //      				$(anchors[0]).addClass('active_color');
 //      			}
 //      			else if(activeID=="contactSection"){
      				
 //      				$(anchors[1]).addClass('active_color');
 //      			}
 //      			else{
 //      				$(anchors[1]).removeClass('active_color');
 //      				$(anchors[0]).removeClass('active_color');
 //      			}
      			

      			
	// 		},

	// 		offset: '35%'
	// 	});
	// });

});