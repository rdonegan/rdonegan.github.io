


$(document).ready(function(){

	// portfolio tile controls

	
	$('.item-selector-tile').mouseover(function(){
		$(this).find('img').attr('src', 'images/portfolio/project-tiles/item-selector.gif');
	});

	$('.item-selector-tile').mouseout(function(){
		$(this).find('img').attr('src', 'images/portfolio/project-tiles/item-selector.svg');
	});

	$('.decision-tree-tile').mouseover(function(){
		$(this).find('img').attr('src', 'images/portfolio/project-tiles/decision-tree.gif');
	});

	$('.decision-tree-tile').mouseout(function(){
		$(this).find('img').attr('src', 'images/portfolio/project-tiles/decision-tree.svg');
	});

	$('.pricing-tile').mouseover(function(){
		$(this).find('img').attr('src', 'images/portfolio/project-tiles/pricing.gif');
	});

	$('.pricing-tile').mouseout(function(){
		$(this).find('img').attr('src', 'images/portfolio/project-tiles/pricing.svg');
	});

	$('.sugarwod-tile').mouseover(function(){
		$(this).find('img').attr('src', 'images/portfolio/project-tiles/sugarwod.gif');
	});

	$('.sugarwod-tile').mouseout(function(){
		$(this).find('img').attr('src', 'images/portfolio/project-tiles/sugarwodTile.svg');
	});

	



});