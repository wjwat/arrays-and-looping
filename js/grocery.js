let listOfItems = [];

function clearListOfItems() {
	listOfItems = [];
}

function addItemToListOfItems(item) {
	listOfItems.push(item);
}

$(document).ready(function () {
	$("form").submit(function (event) {
		event.preventDefault();
	});

	function updateValues() {
		let x = [];
		x = $('#items textarea').val().split('\n');
		return x;
	}

	function displayResult(value) {
			$('#display ul').empty();
			value.forEach(function(i) {
				$('#display ul').append(`<li>${i}</li>`);
			})
			$('#display').show();
	}

	function resetInputValues(sel) {
		$(sel).each(function() {
			$(this).val('');
		})
	}

	function clearDisplay() {
		$('#display').hide();
		$('#display ul').text('');
	}

	// Add items to list
	$('#add').click(function() {
		updateValues().forEach(function(i) {
			if (i) {
				addItemToListOfItems(i);
			}
		})
		resetInputValues('#items textarea');
		console.log(listOfItems);
	})

	$('#show').click(function () {
		displayResult(listOfItems);
	})

	$('#clear-display').click(clearDisplay);

	$('#reset').click(function () {
		clearDisplay();
		listOfItems = [];
	})
});