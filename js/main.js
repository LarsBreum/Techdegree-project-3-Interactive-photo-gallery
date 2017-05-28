// this runs everytime a keyUp event happens in the input field
function searchFunction() {
	//declare vars
	var input, filter;
	//get the input field as $object
	input = $('input[type=search]');
	//get the anchor elements as array of objects
	var allAnchors = $('a[data-lightbox=gallery');
	//Get number of a tags on page
	var numOfAnchors = allAnchors.length;
	//case insensitivity by setting the filter to lowercase
	filter = input.val().toLowerCase();

	//Loop through all 12 images
	for (var i = 0; i < numOfAnchors; i++ ) {
		/*get attribute data-title (to search by the caption) and setting the
		caption to lower case*/
		var dataTitleVal = 
		document.getElementsByTagName('a')[i].getAttribute("data-title").toLowerCase();
		//if filter is not a substr of dataTitleVal hide the anchor
		if (dataTitleVal.indexOf(filter) == -1) {
			$(allAnchors[i]).hide('1000');
		//if it is, show the anchor
		} else {
			$(allAnchors[i]).show('1000');
		}
	}
}

//Customizing lightbox
lightbox.option({
	'resizeDuration': 100,
	'wrapAround': true,
	'fadeDuration': 200

});