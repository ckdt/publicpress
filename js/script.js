$(document).ready(function() {
	var $posts = $('#posts');
	var grid = $posts;

	imagesLoaded( $posts, function() {
		$('#preloader').hide();

		$('#posts').infinitescroll({
			navSelector  : '.pagenav',
			nextSelector : '.next',
			itemSelector : '.post',
			dataType: 'json',
			appendCallback : false
		}, function(newElements) {
			console.log("called");
			var items = [];
			for(i=0; i < newElements.length; i++) {

				var item_html = $(newElements[i]);
					item_html = item_html.context.innerHTML;
				
				var item = document.createElement('div');
					item.innerHTML = item_html;
					item.setAttribute('class', 'required-classname');
					items.push(item);
			}
			salvattore['append_elements'](grid, items);
		});

	});
});