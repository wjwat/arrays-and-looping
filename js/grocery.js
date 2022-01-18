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
		$('#items input').each(function () {
			if ($(this).val()) {
				x.push($(this).val());
			}
		});
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

	// Add items to list
	$('#add').click(function() {
		updateValues().forEach(function(i) {
			addItemToListOfItems(i);
		})
		resetInputValues('#items input');
		console.log(listOfItems);
	})

	$('#show').click(function () {
		displayResult(listOfItems);
	})

	$('#reset').click(function () {
		$('#display').hide();
		$('#display ul').text('');
	});
});