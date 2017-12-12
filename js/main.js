

//WHEN THE PAGE IS READY, DO THIS
		$(document).ready(function() {
			// ADD CLASS OF 'FONTS' TO ALL LIST ITEMS
			$(".button").click(function() {
				$("li").toggleClass("fonts")
			}); 
		})