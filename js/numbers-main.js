function bigResult(value) {
	return `<h2>${value}</h2>`
}

function addArray(arr) {
	let result = 0;
	arr.forEach(function(i) {
		result += i;
	})
	return result;
}

$(document).ready(function () {
    $("form").submit(function (event) {
			event.preventDefault();
		});

		function displayResult(value) {
			$('#display').text('');
			$('#display').append(bigResult(value))
			$('#display').show();
		}

		function updateValuesAsInts() {
			let x = [];
			$('input').each(function () {
				x.push(parseInt($(this).val()));
			})
			return x;
		}

		$('#add').click(function(e) {
			let values = updateValuesAsInts();

			displayResult(addArray(values));
		});


		$('#add').click(function(e) {
			let result = 0;

			$('input').each(function () {
				result += parseInt($(this).val());
			})
			displayResult(result);
		});

		$('#divide').click(function () {
			let result = 1;

			$('input').each(function () {
				result /= parseInt($(this).val());
			})
			displayResult(result);
		})

		$('#multiply').click(function () {
			let result = 1;

			$('input').each(function () {
				result *= parseInt($(this).val());
			})
			displayResult(result);
		})

		$('#subtract').click(function () {
			let result = 0;

			$('input').each(function () {
				result -= parseInt($(this).val());
			})
			displayResult(result);
		})

		$('#reset').click(function () {
			$('#display').hide();
			$('#display').text('');
		})
});