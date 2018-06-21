var big_image
function debounce(a, t, n) {
	var i
	return function() {
		var e = this,
			r = arguments
		clearTimeout(i),
			(i = setTimeout(function() {
				;(i = null), n || a.apply(e, r)
			}, t)),
			n && !i && a.apply(e, r)
	}
}
$(document).ready(function() {
	BrowserDetect.init(),
		$('body').bootstrapMaterialDesign(),
		(window_width = $(window).width()),
		($navbar = $('.navbar[color-on-scroll]')),
		(scroll_distance = $navbar.attr('color-on-scroll') || 500),
		($navbar_collapse = $('.navbar').find('.navbar-collapse')),
		$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(),
		$('[data-toggle="popover"]').popover(),
		0 != $('.navbar-color-on-scroll').length &&
			$(window).on('scroll', materialKit.checkScrollForTransparentNavbar),
		materialKit.checkScrollForTransparentNavbar(),
		768 <= window_width &&
			0 != (big_image = $('.page-header[data-parallax="true"]')).length &&
			$(window).on('scroll', materialKit.checkScrollForParallax)
}),
	$(document).on('click', '.navbar-toggler', function() {
		;($toggle = $(this)),
			1 == materialKit.misc.navbar_menu_visible
				? ($('html').removeClass('nav-open'),
				  (materialKit.misc.navbar_menu_visible = 0),
				  $('#bodyClick').remove(),
				  setTimeout(function() {
						$toggle.removeClass('toggled')
				  }, 550),
				  $('html').removeClass('nav-open-absolute'))
				: (setTimeout(function() {
						$toggle.addClass('toggled')
				  }, 580),
				  (div = '<div id="bodyClick"></div>'),
				  $(div)
						.appendTo('body')
						.click(function() {
							$('html').removeClass('nav-open'),
								$('nav').hasClass('navbar-absolute') &&
									$('html').removeClass('nav-open-absolute'),
								(materialKit.misc.navbar_menu_visible = 0),
								$('#bodyClick').remove(),
								setTimeout(function() {
									$toggle.removeClass('toggled')
								}, 550)
						}),
				  $('nav').hasClass('navbar-absolute') &&
						$('html').addClass('nav-open-absolute'),
				  $('html').addClass('nav-open'),
				  (materialKit.misc.navbar_menu_visible = 1))
	}),
	(materialKit = {
		misc: {
			navbar_menu_visible: 0,
			window_width: 0,
			transparent: !0,
			fixedTop: !1,
			navbar_initialized: !1,
			isWindow: document.documentMode || /Edge/.test(navigator.userAgent),
		},
		initFormExtendedDatetimepickers: function() {
			$('.datetimepicker').datetimepicker({
				icons: {
					time: 'fa fa-clock-o',
					date: 'fa fa-calendar',
					up: 'fa fa-chevron-up',
					down: 'fa fa-chevron-down',
					previous: 'fa fa-chevron-left',
					next: 'fa fa-chevron-right',
					today: 'fa fa-screenshot',
					clear: 'fa fa-trash',
					close: 'fa fa-remove',
				},
			})
		},
		initSliders: function() {
			var e = document.getElementById('sliderRegular')
			noUiSlider.create(e, {
				start: 40,
				connect: [!0, !1],
				range: { min: 0, max: 100 },
			})
			var r = document.getElementById('sliderDouble')
			noUiSlider.create(r, {
				start: [20, 60],
				connect: !0,
				range: { min: 0, max: 100 },
			})
		},
		checkScrollForParallax: function() {
			;(oVal = $(window).scrollTop() / 3),
				big_image.css({
					transform: 'translate3d(0,' + oVal + 'px,0)',
					'-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
					'-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
					'-o-transform': 'translate3d(0,' + oVal + 'px,0)',
				})
		},
		checkScrollForTransparentNavbar: debounce(function() {
			$(document).scrollTop() > scroll_distance
				? materialKit.misc.transparent &&
				  ((materialKit.misc.transparent = !1),
				  $('.navbar-color-on-scroll').removeClass(
						'navbar-transparent'
				  ))
				: materialKit.misc.transparent ||
				  ((materialKit.misc.transparent = !0),
				  $('.navbar-color-on-scroll').addClass('navbar-transparent'))
		}, 17),
	})
var BrowserDetect = {
		init: function() {
			;(this.browser = this.searchString(this.dataBrowser) || 'Other'),
				(this.version =
					this.searchVersion(navigator.userAgent) ||
					this.searchVersion(navigator.appVersion) ||
					'Unknown')
		},
		searchString: function(e) {
			for (var r = 0; r < e.length; r++) {
				var a = e[r].string
				if (
					((this.versionSearchString = e[r].subString),
					-1 !== a.indexOf(e[r].subString))
				)
					return e[r].identity
			}
		},
		searchVersion: function(e) {
			var r = e.indexOf(this.versionSearchString)
			if (-1 !== r) {
				var a = e.indexOf('rv:')
				return 'Trident' === this.versionSearchString && -1 !== a
					? parseFloat(e.substring(a + 3))
					: parseFloat(
							e.substring(r + this.versionSearchString.length + 1)
					  )
			}
		},
		dataBrowser: [
			{
				string: navigator.userAgent,
				subString: 'Chrome',
				identity: 'Chrome',
			},
			{
				string: navigator.userAgent,
				subString: 'MSIE',
				identity: 'Explorer',
			},
			{
				string: navigator.userAgent,
				subString: 'Trident',
				identity: 'Explorer',
			},
			{
				string: navigator.userAgent,
				subString: 'Firefox',
				identity: 'Firefox',
			},
			{
				string: navigator.userAgent,
				subString: 'Safari',
				identity: 'Safari',
			},
			{
				string: navigator.userAgent,
				subString: 'Opera',
				identity: 'Opera',
			},
		],
	},
	better_browser =
		'<div class="container"><div class="better-browser row"><div class="col-md-2"></div><div class="col-md-8"><h3>We are sorry but it looks like your Browser doesn\'t support our website Features. In order to get the full experience please download a new version of your favourite browser.</h3></div><div class="col-md-2"></div><br><div class="col-md-4"><a href="https://www.mozilla.org/ro/firefox/new/" class="btn btn-warning">Mozilla</a><br></div><div class="col-md-4"><a href="https://www.google.com/chrome/browser/desktop/index.html" class="btn ">Chrome</a><br></div><div class="col-md-4"><a href="http://windows.microsoft.com/en-us/internet-explorer/ie-11-worldwide-languages" class="btn">Internet Explorer</a><br></div><br><br><h4>Thank you!</h4></div></div>'
//# sourceMappingURL=_site_kit_free/assets/js/kit-free.js.map