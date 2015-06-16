var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    $(document).unbind('keydown',arguments.callee);
    $.getScript('http://www.cornify.com/js/cornify.js',function(){
      cornify_add();
      $(document).keydown(cornify_add);
    });
  }
});

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
			console.log("original",newElements);
		   	
		   	var items = [];
		    var grid = document.querySelector('#posts');

		    for(i=0; i < newElements.length; i++) {
		        var item_html = $(newElements[i]);
		        	item_html = item_html.context.innerHTML;

		        	console.log('original classes', item_html.attr('class'));

		        var item = document.createElement('div');
		        	item.innerHTML = item_html;
		        	item.setAttribute('class', 'post');
					items.push(item);
		    }

		    console.log("grid:",grid, "items:", items);

			salvattore.appendElements(grid, items);

		    //salvattore['append_elements'](grid, items);
		});

	}
	// bind imgLoad
	imgLoad.on( 'always', onAlways );
});