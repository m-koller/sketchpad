function createGrid(grid) {
	$('.grid').removeAttr('width');
  $('.grid').removeAttr('height');

	for (var i = 0; i < grid; i++) {
		$('.container').append('<div class="row">');

		for (var j = 0; j < grid; j++) {
			$('.container').append('<div class="grid"></div>');
		}

		$('.container').append('</div>');
	}
	$('.grid').css('height', 320 / grid);
	$('.grid').css('width', 320 / grid);

	$('.grid').hover(function () {
		$(this).css('background-color', 'orange');
	});
}

$(document).ready(function () {
	createGrid(16);

	$('.grid').on('hover', function () {
		$(this).css('background-color', 'orange');
	});

	$('#clear_grid').on('click', function () {
		$('.grid').remove();

		var customize = prompt('How big do you want the new grid? Please enter a number');
		if (isNaN(customize)) {
			alert('Please enter a number!');
		}
		else {
			createGrid(customize);
		}
	});
});