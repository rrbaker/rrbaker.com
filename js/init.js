(function($) {

	// Structure
	skel.init({
		reset: 'full',
		containers: '100%',
		breakpoints: {
			global: { href: '/css/style.css', grid: { gutters: ['2.5em', 0] } },
			xlarge: { media: '(max-width: 1800px)', href: '/css/style-xlarge.css' },
			large: { media: '(max-width: 1280px)', href: '/css/style-large.css', grid: { gutters: ['2em', 0] } },
			medium: { media: '(max-width: 980px)', href: '/css/style-medium.css'},
			small: { media: '(max-width: 736px)', href: '/css/style-small.css', grid: { gutters: ['1.5em', 0] }, viewport: { scalable: false } },
			xsmall: { media: '(max-width: 480px)', href: '/css/style-xsmall.css' }
		}
	});

	$(function() {

		var $window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

		// Touch?
		if (skel.vars.isMobile) {
			// Turn on touch mode.
			$body.addClass('is-touch');
			// Height fix (mostly for iOS).
			window.setTimeout(function() {
				$window.scrollTop($window.scrollTop() + 1);
			}, 0);
		}
	});

	// Map
	var map = new Datamap({
		scope: 'world',
		element: document.getElementById("map"),
		projection: 'mercator',
		height: 400,
		fills: {
			defaultFill: "#e8e8e8",
			workedIn: "#e928ed",
			spokenAt: "#1f1815"
		},
		data: {
			USA: { fillKey: "workedIn" },
			IDN: { fillKey: "workedIn" },
			COD: { fillKey: "workedIn" },
			SSD: { fillKey: "workedIn" },
			KEN: { fillKey: "workedIn" },
			UGA: { fillKey: "workedIn" },
			HTI: { fillKey: "workedIn" },
			PRY: { fillKey: "workedIn" },
			SLE: { fillKey: "workedIn" },
			LBR: { fillKey: "workedIn" },
			AFG: { fillKey: "workedIn" },
			ESP: { fillKey: "spokenAt" },
			AUT: { fillKey: "spokenAt" },
			SGP: { fillKey: "spokenAt" },
			ARE: { fillKey: "spokenAt" },
			JAM: { fillKey: "spokenAt" },
			LUX: { fillKey: "spokenAt" },
			TZA: { fillKey: "spokenAt" },
			MEX: { fillKey: "spokenAt" },
			ARG: { fillKey: "spokenAt" },
			CAN: { fillKey: "spokenAt" },
			GHA: { fillKey: "spokenAt" },
			GBR: { fillKey: "spokenAt" },
		}
	});

})(jQuery);
