


$(document).ready(function(){

	

        $('.image-popup-no-margins').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
          image: {
            verticalFit: true
          },
          zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          }
        });

     
    

	// portfolio tile controls

	
	// $('.item-selector-tile').mouseover(function(){
	// 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/item-selector.gif');
	// });

	// $('.item-selector-tile').mouseout(function(){
	// 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/item-selector.svg');
	// });

	// $('.decision-tree-tile').mouseover(function(){
	// 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/decision-tree.gif');
	// });

	// $('.decision-tree-tile').mouseout(function(){
	// 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/decision-tree.svg');
	// });

	// $('.pricing-tile').mouseover(function(){
	// 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/pricing.gif');
	// });

	// $('.pricing-tile').mouseout(function(){
	// 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/pricing.svg');
	// });

	// // $('.sugarwod-tile').mouseover(function(){
	// // 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/sugarwod.gif');
	// // });
	

	// // $('.sugarwod-tile').mouseout(function(){
	// // 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/sugarwodTile.svg');
	// // });

	// $('.virtual-agents-tile').mouseover(function(){
	// 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/virtual-agents.gif');
	// });

	// $('.virtual-agents-tile').mouseout(function(){
	// 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/virtual-agents.svg');
	// });

	// $('.icommute-tile').mouseover(function(){
	// 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/icommute.gif');
	// });

	// $('.icommute-tile').mouseout(function(){
	// 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/icommute.svg');
	// });

	// $('.palau-tile').mouseover(function(){
	// 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/palau-project.gif');
	// });

	// $('.palau-tile').mouseout(function(){
	// 	$(this).find('img').attr('src', 'images/portfolio/project-tiles/palau-project.svg');
	// });

	



});