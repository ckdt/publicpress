$(window).smartresize(function(){
	$(".col").width(($(window).width()-50)/2);

	/*if( $(window).width() < 750 ){
		$('#mobile').show();
		$('#desktop').hide();
	}else{
		$('#mobile').hide();
		$('#desktop').show();
	}*/
});


$(document).ready(function() {

	var $posts = $('#mobile .post');
	imagesLoaded( $posts, function() {
		$('.preloader').hide();
		setupDesktop();

		$('#desktop').infinitescroll({
			navSelector : '.pagenav',
			nextSelector : '.next',
			itemSelector : '.post',
			function (ne){
				console.log( ne );
			}

		});

		/*$('#mobile').infinitescroll({
				navSelector  : '#pagenav',
				nextSelector : '.next',
				itemSelector : '.post',
				loading: {
					finishedMsg: 'End of site.',
					img: loaderimg
				}
			},
			function( newElements ) {
				var $newElems = $( newElements ).css({ opacity: 0 });
				$newElems.imagesLoaded(function(){
					fakeReload($newElems,false);
				});
			}
		);*/

	});

	function setupDesktop(){
		// Duplicate mobile content to desktop
		$('#mobile .post').clone().appendTo('#desktop');

		// Find all Odd and Even posts
		var $evenPosts = $('#desktop .post:even');
		var $oddPosts = $('#desktop .post:odd');

		// Wrap in columns accordingly
		$evenPosts.wrapAll('<div id="col-one" class="col"></div>');
		$oddPosts.wrapAll('<div id="col-two" class="col"></div>');

		// Alternate left and right class col-one
		$("#col-one .post:even").addClass("left");
		$("#col-one .post:odd").addClass("right");

		$("#col-two .post:even").addClass("left");
		$("#col-two .post:odd").addClass("right");
	}








		$(".col").width(($(window).width()-50)/2);

	/*	if( $(window).width() < 750 ){
		$('#mobile').show();
		$('#desktop').hide();
	}else{
		$('#mobile').hide();
		$('#desktop').show();
	}*/
});