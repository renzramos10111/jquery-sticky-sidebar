var lockfixed = $(".lockfixed");
	if ( lockfixed.length ) {
		var distance = lockfixed.offset().top;
		var relative = 0;
		var oldScrollTop = 0;
		var parentHeight  = 0;
		var breakWidth = 768;
		var relativePosition  = 0;
		var currentWidth = lockfixed.width();
		
		$(window).resize(function() {
		  	lockfixed.css("top", "auto");
			distance = lockfixed.offset().top;
			relative = 0;
			oldScrollTop = 0;
		        parentHeight  = 0;
		        relativePosition  = 0;
		        
		        lockfixed.width("100%");
		        currentWidth = lockfixed.width();
		});
		
		$(window).scroll(function(){
	
		        if ($(window).width() > breakWidth ){
				var scrollTop = $(document).scrollTop();
				var headerheight =$(".section.header.sticky").outerHeight(); 
				var parentHeight = lockfixed.parents(".row").offset().top + lockfixed.parents(".row").outerHeight();
				
				parentHeight-=headerheight ;
				//console.log(parentHeight );
				relative+= scrollTop - oldScrollTop ;
				
				console.log("Distance:" + distance + " Old" + oldScrollTop + " New:" + scrollTop + " Relative:" + relative);
				
				if (distance <= scrollTop + headerheight ){
				
					if ( parentHeight > (scrollTop + lockfixed.outerHeight()   )){
					   lockfixed.css("position", "fixed");
					   lockfixed.css("top", headerheight  + "px");
					   
					   //lockfixed.css("top", ((scrollTop  - distance) + headerheight ) + "px");
					   oldScrollTop = scrollTop ;	
					   relativePosition = ((scrollTop  - distance) + headerheight );
					}else{
						lockfixed.css("position", "relative");
						lockfixed.css("top", relativePosition + "px");
					}
				}else{
					lockfixed.css("top", "auto");
					lockfixed.css("position", "relative");
				}
				lockfixed.width(currentWidth );
			}else{
			   lockfixed.width("auto");
			   lockfixed.css("position", "relative");
			   lockfixed.css("top", "auto");
			} 
		
		});
	}
