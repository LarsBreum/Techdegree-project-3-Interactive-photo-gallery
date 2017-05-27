//Customizing lightbox
lightbox.option({
	'resizeDuration': 100,
	'wrapAround': true,
	'fadeDuration': 200

});

function searchFunction() {
	//declare vars
	var input, filter;
	input = $('input[type=search]');
	//get the anchor element as array of objects
	var allAnchors = $('a[data-lightbox=gallery');
	//Get number of a tags on page
	var numOfAnchors = allAnchors.length;
	//case insensitivity
	filter = input.val().toLowerCase();


	//Loop through all 12 images
	for (var i = 0; i < numOfAnchors; i++ ) {
		//get attribute data-title
		var dataTitleVal = 
		document.getElementsByTagName('a')[i].getAttribute("data-title").toLowerCase();
		//if filter is not a substr of dataTitleVal hide the anchor
		if (dataTitleVal.indexOf(filter) == -1) {
			allAnchors[i].css('display', 'none');
		} else {
			allAnchors[i].css('display', 'initial');
		}
	}
}
