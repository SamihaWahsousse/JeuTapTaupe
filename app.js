// créer des container de taupe
// appliquer du hide et show sur chaque taupe
// hide an element randomly from a list of elements

$(document).ready(function () {
	var score = 0;
	var roundTimer = 5;
	var playerName;

	var startGame = setInterval(function () {
		$(".taupe").hide();
		var randomNumber = Math.floor(Math.random() * 9 + 1);
		//console.log(randomNumber);
		var hideTaupe = $("#taupe" + randomNumber);
		//console.log(hideTaupe);
		hideTaupe.toggle(100);
		//
		roundTimer--;
		var timerDisplay = ($("#timer").innerText = "00:" + roundTimer);
		console.log(($("#timer").innerText = "00:" + roundTimer));

		if (roundTimer === 0) {
			$(".containerTaupes").before(
				'<span id="gameOver"> ** Game Over **</span>'
			);
			clearInterval(startGame);
			$(".taupe").hide();
		}
	}, 1000);

	//increase the score number for each click on taupe
	$(".taupe").click(function () {
		$(this).hide();
		score++;
		console.log(score);
		$("#score").replaceWith(
			"<div id='score'>Your Score : </br>" + score + "</div>"
		);
	});

	// display player's name after click on start button
	$("#playBtn").click(function () {
		playerName = $("#inputPlayerName").val();
		$("h4").replaceWith("<h4> Welcome " + playerName + "</h4>");
		console.log($(".headerContainer > h4").html());
	});

	//set a timer for a partie when click start button
	//set a stop function to stop the set intervall
});
