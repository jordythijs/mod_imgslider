/*
	This plugin slides horizontal parts of an image towards the middle
	Every row has a random horizontal margin between -10px and 10px so that the image looks a little distorted

	The plugin has one function with four parameters:
		One parameter with the path to the fullcolor image
		One parameter with the width of the image
		One parameter with the height of the image
		one optional parameter to set the amount of rows
*/
jQuery.slideImage = function(imagepath, imagewidth, imageheight, rows) {
	// If the rowamount parameter has not been set, set it now
	rows = rows || 4;

	// calculate the height of every row
	var rowheight = imageheight / rows;

	// Create the rows using divs and insert them in the already existing div which has the black&white image background
	for (i = rows; i > 0; i--){
		if (i%2 == 0){
			// Even row, so start from the left (left:-total_width_of_image)
			$('#greyscale').after('<div id="fullcolor' + i +'" style="overflow: hidden; position: absolute; left: -' + imagewidth + 'px; top: ' + (i-1)*rowheight + 'px; width: ' + imagewidth + 'px; height: ' + rowheight + 'px; background-image: url(' + imagepath + '); background-repeat: no-repeat; background-position: center -' + (i-1)*rowheight + 'px; z-index: 1; display: none"></div>');
		} else {
			// Odd row, so start from the right (left: total_width_of_image)
			$('#greyscale').after('<div id="fullcolor' + i +'" style="overflow: hidden; position: absolute; left: ' + imagewidth + 'px; top: ' + (i-1)*rowheight + 'px; width: ' + imagewidth + 'px; height: ' + rowheight + 'px; background-image: url(' + imagepath + '); background-repeat: no-repeat; background-position: center -' + (i-1)*rowheight + 'px; z-index: 1; display: none"></div>');
		}
	}

	// Let the rows of the image slide in and fade in, with alternate directions for the even and odd rows
	// They also have different (random) horizontal ending positions 
	for (i = rows; i > 0; i--){
		// Generate random number between -10 and 10
		// This number will be the left (even row) or right (odd row) margin of this row
		var randommargin = Math.floor(Math.random()*21) - 10;
		randommargin = 0;
		// Randomize the slide & fade speed of every sliding row (1000ms - 3000ms)
		var randomspeed = 1000 + 100 * Math.floor(Math.random()*21);

		if (i%2 == 0){
			// Even row, so slide in from the left
			$("#fullcolor"+i).animate({"left" : + randommargin}, {duration: randomspeed, queue: false})
		} else {
			// Odd row, so slide in from the right
			$("#fullcolor"+i).animate({"left" : + randommargin}, {duration: randomspeed, queue: false})
		}
		// Fade in the row
		$("#fullcolor"+i).fadeIn({duration: randomspeed, queue: false})
	}
}
