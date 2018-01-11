// Game JS

$(document).ready(function() {	
	$("#questions").hide();
	
});


//Play button
	$("#playButton").on("click", function(){
		$("#questions").show();
		$("#result").hide();
		$("#playButton").hide();
		runTimer();
	})



// Game function.
	function triviaGame(){

		//Create values that will track questions aanswered correctly and incorrectly, or unanswered.
			var correct = 0;
			var incorrect = 0;
			var unanswered = 0;

		//Function to reset the game
			function resetGame() {
				var correct = 0;
				var incorrect = 0;
				var unanswered = 0;
		}	

	//Variables to check if trivia answers are correct or incorrect
	var q1Correct = document.getElementById("ans1.2");
	var	q1Incorrect1 = document.getElementById("ans1.1");
	var	q1Incorrect2 = document.getElementById("ans1.3");
	var	q1Incorrect3 = document.getElementById("ans1.4");
	var q2Correct = document.getElementById("ans2.3");
	var	q2Incorrect1 = document.getElementById("ans2.1");
	var	q2Incorrect2 = document.getElementById("ans2.2");
	var	q2Incorrect3 = document.getElementById("ans2.4");
	var q3Correct = document.getElementById("ans3.4");
	var	q3Incorrect1 = document.getElementById("ans3.1");
	var	q3Incorrect2 = document.getElementById("ans3.2");
	var	q3Incorrect3 = document.getElementById("ans3.3");
	var q4Correct = document.getElementById("ans4.1");
	var	q4Incorrect1 = document.getElementById("ans4.2");
	var	q4Incorrect2 = document.getElementById("ans4.3");
	var	q4Incorrect3 = document.getElementById("ans4.4");
	var q5Correct = document.getElementById("ans5.2");
	var	q5Incorrect = document.getElementById("ans5.1");
	var q6Correct = document.getElementById("ans6.2");
	var	q6Incorrect1 = document.getElementById("ans6.1");
	var	q6Incorrect2 = document.getElementById("ans6.3");
	var	q6Incorrect3 = document.getElementById("ans6.4");

	if (q1Correct.checked === true) {
		correct ++;}
		else if (q1Incorrect1.checked === true)
			{ incorrect ++;}
		else if (q1Incorrect2.checked === true)
			{ incorrect ++;}
		else if (q1Incorrect3.checked === true)
			{ incorrect ++;}
		else { unanswered ++;}

	if (q2Correct.checked === true) {
		correct ++;}
		else if (q2Incorrect1.checked === true)
			{ incorrect ++;}
		else if (q2Incorrect2.checked === true)
			{ incorrect ++;}
		else if (q2Incorrect3.checked === true)
			{ incorrect ++;}
		else { unanswered ++;}

	if (q3Correct.checked === true) {
		correct ++;}
		else if (q3Incorrect1.checked === true)
			{ incorrect ++;}
		else if (q3Incorrect2.checked === true)
			{ incorrect ++;}
		else if (q3Incorrect3.checked === true)
			{ incorrect ++;}
		else { unanswered ++;}

	if (q4Correct.checked === true) {
		correct ++;}
		else if (q4Incorrect1.checked === true)
			{ incorrect ++;}
		else if (q4Incorrect2.checked === true)
			{ incorrect ++;}
		else if (q4Incorrect3.checked === true)
			{ incorrect ++;}
		else { unanswered ++;}

	if (q5Correct.checked === true) {
		correct ++;}
		else if (q5Incorrect.checked === true)
			{ incorrect ++;}
		else { unanswered ++;}

	if (q6Correct.checked === true) {
		correct ++;}
		else if (q6Incorrect1.checked === true)
			{ incorrect ++;}
		else if (q6Incorrect2.checked === true)
			{ incorrect ++;}
		else if (q6Incorrect3.checked === true)
			{ incorrect ++;}
		else { unanswered ++;}
	

		// Display results.
			$("#questions").hide();
			$("#result").show();
			$("#playButton").show();
			var resultDOM = document.getElementById('result');
			var resultHTML = "Questions Correct: " + correct + "<br>" +
								"Questions Incorrect: " + incorrect + "<br>" +
								"Questions Unanswered: " + unanswered;
			resultDOM.innerHTML = resultHTML;

	}


//Timer
	var number = 60;
	var intervalId;
	function runTimer () {
		intervalId = setInterval(decrement, 1000);
	}

	function decrement () {
		number--;
	
		$("#timer").html("<h2>" + number + "</h2>");

		if (number === 0) {
			stop();
			triviaGame();
		}
	}

	function stop () {
		clearInterval(intervalId);
	}

runTimer();





	