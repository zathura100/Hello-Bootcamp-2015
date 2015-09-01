
	
	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	$(document).ready( function(){



		$( "a" ).click(function(e) {
			e.preventDefault();
			$this = $(this);
			if ( $this.hasClass('active') ) return;
			var $link_current = $('.active');
			var $div_current = $link_current.attr('href');
			var $div_target = $this.attr('href');
			var effect = ['fold', 'shake', 'pulsate', 'slide']
			effect = effect[getRandomInt(0, 3)];

			$( "#" + $div_current).css('opacity',1).toggle( effect, 500, function() {

	  				$( "#" + $div_target).css('opacity',1).toggle( effect, 500, function() {
		  				$link_current.removeClass('active')
		  				$this.addClass('active');
		  			} );

  			} );
	  		
		});

	});
	