$(document).ready(function () {
	$("#graphics").click(function () {
		$(".hidden").fadeOut(400, function(){ 
		$("#graphicst").fadeIn(1000);	
	});
  });		

	$("#backpacking").click(function () {
		$(".hidden").fadeOut(400, function(){
		$("#backpackingt").fadeIn(1000);
	});

	$("#marketing").click(function () {
		$(".hidden").fadeOut(400);
		$("#marketingt").fadeIn(1000);	
	});


	$("#northwestern").click(function () {
		$(".hidden").fadeOut(400);
		$("#northwesternt").fadeIn(1000);	
	});

	$("#parks").click(function () {
		$(".hidden").fadeOut(400);
		$("#parkst").fadeIn(1000);	
	});


	$("#printmaking").click(function () {
		$(".hidden").fadeOut(400);
		$("#printmakingt").fadeIn(1000);	
	});


	$("#web").click(function () {
		$(".hidden").fadeOut(400);
		$("#webt").fadeIn(1000);	
	});

	$("#gardening").click(function () {
		$(".hidden").fadeOut(400);
		$("#gardeningt").fadeIn(1000);	
	});	
});