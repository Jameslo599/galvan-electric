(function($) {

	var	$window = $(window),
		$body = $('body'),
        $header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

    // Scrolly.
		$('.scrolly').scrolly({
			anchor: 'top',
            offset: 50,
		});

		$('.scrolly-middle').scrolly({
			anchor: 'middle',
			offset: function() {
				return $header.outerHeight() - 2;
			}
		});

        // Tiles.
		var $tiles = $('.tiles > article'),
        $wrapper = $('.service-wrapper');

		$tiles.each(function() {

			var $this = $(this),
				$image = $this.find('.image'), $img = $image.find('img'),
				$link = $this.find('.link'),
				x;

			// Link.
				if ($link.length > 0) {

					$link.on('click', function(event) {

						var href = $link.attr('href');

						// Prevent default.
							event.stopPropagation();
							event.preventDefault();

						// Target blank?
							if ($link.attr('target') == '_blank') {

								// Open in new tab.
									window.open(href);

							}
                            else if (href === '#contact') {
                                location.href = href;
                            }
                            
						// Otherwise ...
							else {

								// Start transitioning.
									$this.addClass('is-transitioning');
									$wrapper.addClass('is-transitioning');

								// Redirect.
									window.setTimeout(function() {
										location.href = href;
									}, 500);
							}
					});
				}
		});

     // Fade in.
		$('.fadeIn').scrollex({
			top:		'30vh',
			bottom:		'30vh',
			delay:		20,
			initialize:	function() {
				$(this).addClass('is-inactive');
			},
			terminate:	function() {
				$(this).removeClass('is-inactive');
			},
			enter:		function() {
				$(this).removeClass('is-inactive');
			}
		});
    // Fade in from left.
		$('.fadeInLeft').scrollex({
			top:		'30vh',
			bottom:		'30vh',
			delay:		20,
			initialize:	function() {
				$(this).addClass('is-inactive-left');
			},
			terminate:	function() {
				$(this).removeClass('is-inactive-left');
			},
			enter:		function() {
				$(this).removeClass('is-inactive-left');
			}
		});
    // Fade in from bottom.
		$('.fadeInBot').scrollex({
			top:		'20vh',
			bottom:		'20vh',
			delay:		25,
			initialize:	function() {
				$(this).addClass('is-inactive-bottom');
			},
			terminate:	function() {
				$(this).removeClass('is-inactive-bottom');
			},
			enter:		function() {
				$(this).removeClass('is-inactive-bottom');
			}
		});
    // Fade in without transform.
		$('.fadeInOnly').scrollex({
			top:		'15vh',
			bottom:		'15vh',
			delay:		25,
			initialize:	function() {
				$(this).addClass('is-inactive-passive');
			},
			terminate:	function() {
				$(this).removeClass('is-inactive-passive');
			},
			enter:		function() {
				$(this).removeClass('is-inactive-passive');
			}
		});

})(jQuery);