/*-------------------------------------------------------------------- 
 * JQuery Plugin: "EqualHeights"
 * by:	Scott Jehl, Todd Parker, Maggie Costello Wachs (http://www.filamentgroup.com)
 *
 * Copyright (c) 2008 Filament Group
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 *
 * Description: Compares the heights or widths of the top-level children of a provided element 
 		and sets their min-height to the tallest height (or width to widest width). Sets in em units 
 		by default if pxToEm() method is available.
 * Dependencies: jQuery library, pxToEm method	(article: 
		http://www.filamentgroup.com/lab/retaining_scalable_interfaces_with_pixel_to_em_conversion/)							  
 * Usage Example: $(element).equalHeights();
  		Optional: to set min-height in px, pass a true argument: $(element).equalHeights(true);
 * Version: 2.0, 08.01.2008
--------------------------------------------------------------------*/

(function($) {
	$.fn.equalHeights = function() {
		tallest = 0;
		this.each(function() {
			if($(this).height() > tallest) {
				tallest = $(this).height();
			}
		});
		
		return this.each(function() {
			$(this).height(tallest);
		});
	}
})(jQuery);