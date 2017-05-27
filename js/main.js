//Customizing lightbox

lightbox.option({
	'resizeDuration': 100,
	'wrapAround': true,
	'fadeDuration': 200

});

function searchFunction() {
	//declare vars
	var input, divs, filter, dataTitle;
	input = $('input[type=search]');
	//case insensitivity
	filter = input.val().toLowerCase();
	//Get the data-title values
	var dataTitleVal = $('a[data-title]').attr("data-title").toLowerCase();
	console.log(dataTitleVal[1]);
	//output the field value
	console.log(filter);

	/*loop through all a's to see if filter is included in dataTitleVal
	display: none, if it is not */


}
