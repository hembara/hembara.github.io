function main() {
	(function () {
		'use strict';
		$('a.page-scroll').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 900);
					return false;
				}
			}
		});
		var figure = $(".video").hover(hoverVideo, hideVideo);
		var figure1 = $(".video").click(hoverVideo);

		function hoverVideo(e) {
			$('video', this).get(0).play();
		}

		function hideVideo(e) {
			$('video', this).get(0).pause();
		}

		$("video").prop('muted', true);
		// $('body').scrollspy({
		// 	target: '.navmenu'
		// 	, offset: 80
		// , });
	}());
}
main();
