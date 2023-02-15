// créer des container de taupe
// appliquer du hide et show sur chaque taupe
// hide an element randomly from a list of elements

$(document).ready(function () {
	setInterval(function () {
		$(".taupe").hide();
		let randomNumber = Math.floor(Math.random() * 9 + 1);
		//console.log(randomNumber);
		let hideTaupe = $("#taupe" + randomNumber);
		//console.log(hideTaupe);
		hideTaupe.toggle(1000);
	}, 1000);

	var score = 0;

	$(".taupe").click(function () {
		$(this).hide();
		score++;
		console.log(score);
		$("#score").replaceWith(
			"<div id='score'>Your Score : " + score + "</div>"
		);
	});
});
