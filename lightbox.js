$(function(){

	// Triggered on image click
	$('#showcase img').on( "click", function(e) {
		e.preventDefault();
		let image_href = $(this).attr("src");
		
		// Changes src attribute, shows lightbox
		if ($('#lightbox').length > 0) {
			$('#content').html('<img src="' + image_href + '" />');
			$('#lightbox').show();
		}
		// If lightbox doesn't exist, creates it
		else {
			var lightbox =
			'<div id="lightbox">' +
				'<div id="content">' +
					'<img src="' + image_href +'" />' +
				'</div>' +
				'<p>Click anywhere to hide this.</p>' +	
			'</div>';
			$('body').append(lightbox);
		}
	});

	// Hides lightbox on body click
	$('body').on('click', '#lightbox', function() {
		$('#lightbox').hide();
	});	
}); 