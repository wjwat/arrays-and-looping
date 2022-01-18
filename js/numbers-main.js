$(document).ready(function () {
    $("form").submit(function (event) {
			event.preventDefault();

			$('#display').show();
		}); 

		$('#reset').click(function () {
			$('#display').hide();
			$('#display').text('');
		})
});