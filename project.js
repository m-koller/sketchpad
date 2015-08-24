$(document).ready(function()	{
	var grid = 256;
	for(i=0; i<grid; i++)	{
		$(".container").append('<div class="grid"></div>');
	}

	grid;

	$(".grid").hover(function()	{
		$(this).css("background-color", "orange");
	}, function()	{
		$(this).css("background-color", "orange");
	});
	$("#clear_grid").click(function()	{
		$(".grid").remove();
	var customize = prompt("How big do you want the new grid? Please enter a number");
	if(isNaN(customize))	{
		alert("Please enter a number!");
	}
		else	{
			$(".grid").removeAttr("width");
			$(".grid").removeAttr("height");
			for(z=0; z<(customize*customize); z++)	{
				$(".container").append('<div class="grid"></div>');
				$(".grid").css("width", 320 / customize);
				$(".grid").css("height", 320 / customize);
			}
		}
		$(".grid").hover(function()	{
			$(this).css("background-color", "orange");
		}, function(){
			$(this).css("background-color", "orange");
		});
});
});