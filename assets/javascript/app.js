// Game JS

$(document).ready(function() {	
	$("#questions").hide();
	
});


//Play button
	$("#playButton").on("click", function(){
		$("#questions").show();
		$("#result").hide();
		$("#playButton").hide();
		resetGame();
	})


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

// Game function.
	function fQuestions(){
	var q1Correct = document.getElementById("ans1.2");
	var	q1Incorrect = document.getElementById("ans1.1");
	var q2Correct = document.getElementById("ans2.3");
	var q3Correct = document.getElementById("ans3.4");
	var q4Correct = document.getElementById("ans4.1");
	var q5Correct = document.getElementById("ans5.2");
	var q6Correct = document.getElementById("ans6.2");

	if (q1Correct.checked === true) {
		correct ++;}
		else if (q1Incorrect.checked === true)
			{ incorrect ++;}
		else { unanswered ++;}

	if (q2Correct.checked === true) {
		correct ++;}
		else if (q2Correct.checked === false)
			{ incorrect ++;}

	if (q3Correct.checked === true) {
		correct ++;}
		else if (q3Correct.checked === false)
			{ incorrect ++;}

	if (q4Correct.checked === true) {
		correct ++;}
		else if (q4Correct.checked === false)
			{ incorrect ++;}

	if (q5Correct.checked === true) {
		correct ++;}
		else if (q5Correct.checked === false)
			{ incorrect ++;}

	if (q6Correct.checked === true) {
		correct ++;}
		else if (q6Correct.checked === false)
			{ incorrect ++;}
	

	
				
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





	