$(document).ready(function() {

	var imgLoad = imagesLoaded( $('.posts') );
	function onAlways( instance ) {
		
		console.log('all images are loaded');
		
		// hide Preloader 
		$('#preloader').hide();

		// setup infinite scroll
		var $posts = $('#posts');
		$posts.infinitescroll({
			navSelector  : ".pagenav",
            nextSelector : ".next",
            itemSelector : ".post",
            appendCallback : false,
		}, function(newElements) {
			console.log(newElements);
		   /* var items = [];
		    var grid = $('#posts');
		    for(i=0; i < newElements.length; i++) {
		        var item_html = $(newElements[i]);
		        item_html = item_html.context.innerHTML;
		        var item = document.createElement('div');
		        item.innerHTML = item_html;
		        item.setAttribute('class', 'required-classname');

		                items.push(item);
		    }

		    salvattore['append_elements'](grid, items);*/
		});

	}
	// bind imgLoad
	imgLoad.on( 'always', onAlways );
});