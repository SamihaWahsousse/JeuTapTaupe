//Pseudo-code
//create a taupe container
// apply hide and show for each taupe
// hide an element randomly from a list of elements

$(document).ready(function () {
	var score = 0;
	var roundTimer = 10;
	var playerName;

	var startGame = setInterval(function () {
		$(".taupe").hide();
		var randomNumber = Math.floor(Math.random() * 9 + 1);
		//console.log(randomNumber);
		var hideTaupe = $("#taupe" + randomNumber);
		//console.log(hideTaupe);
		hideTaupe.toggle(200);
		//
		roundTimer--;
		var displayTimer = "timer : <span>00:" + roundTimer + "</span>";
		$("#timer").html(displayTimer);
		console.log(($("#timer").innerText = "00:" + roundTimer));

		if (roundTimer === 0) {
			if (score === 0)
				$(".containerTaupes").before(
					'<span id="gameOver"> * Game Over *<span id=looseMsg>You loose</span></span>'
				);
			else {
				$(".containerTaupes").before(
					'<span id="gameOver"> * Congratulations! *<span id=winMsg>You win</span></span>'
				);
			}
			clearInterval(startGame);
			$(".taupe").hide();
		}
	}, 800);

	//increase the score number for each click on taupe
	$(".taupe").click(function () {
		$(this).hide();
		score++;
		console.log(score);
		$("#score").replaceWith(
			"<div id='score'>Your Score : " + score + "</div>"
		);
	});

});
