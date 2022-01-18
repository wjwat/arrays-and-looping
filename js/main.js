$(document).ready(function () {
    $("form").submit(function (event) {
			event.preventDefault();
			let color = $("#color").val();
			let food = $("#food").val();
			let movie = $("#movie").val();
			let car = $("#car").val();
			let number = $("#number").val();

			// let userChoice = [$("#color").val(),
			// 									$("#car").val(),
			// 									$("#food").val(),
			// 									$("#movie").val(),
			// 									$("#number").val()]
			let choiceArray = [color, food, movie, car, number];

			let newArray = [];
			//let newArray = [choiceArray[0].toUpperCase(), choiceArray[1].toLowerCase(), choiceArray[2].charAt(2)]

			newArray.push(choiceArray[0].toUpperCase())
			newArray.push(choiceArray[1].toLowerCase())
			newArray.push(choiceArray[2].charAt(2))

			// console.log(newArray)
			// let x = [].forEach(function(i) {
			// 	newArray.push(i);
			// })
			console.log(newArray)

			function appendLi(i) {
				return `<h5>${i}</h5>`
			}

			choiceArray.forEach(function(i) {
				console.log(i);
				$('#display ul').append(appendLi(i));
			});
			newArray.forEach(function(i) {
				console.log(i);
				$('#display ul').append(appendLi(i));
			});
			$('#display').show();
		}); 

		$('#reset').click(function () {
			$('#display').hide();
			$('#display').text('');
		})
});