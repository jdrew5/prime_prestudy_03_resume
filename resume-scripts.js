$(document).ready(function() {
	$('button').on('click', function() {
		if ($('article').hasClass('displayBlock')) {
			$('article').removeClass('displayBlock');
			$(this).text('Show Resume');
		}
		else {
			$('article').addClass('displayBlock');
			$(this).text('Hide Resume');
		}		
	});
});