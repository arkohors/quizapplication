$(document).ready(function () {
	'use strict';
	var points = 0;
	var currentQuestion = 0;
	var questionCounter = 1;
	var questions = [{
		question: "1. What expansion set is this symbol from?",
		picture: "ARB_symbol.png",
		answerChoices: ["Alara Reborn", "Dragons of Tarkir", "Khans of Tarkir", "Odyssey"],
		correctChoice: "Alara Reborn",
		feedback: "The previous symbol was from Alara Reborn."
	}, {
		question: "2. What expansion set is this symbol from?",
		picture: "MOR_symbol.png",
		answerChoices: ["Alara Reborn", "MorningTide", "Khans of Tarkir", "Odyssey"],
		correctChoice: "MorningTide",
		feedback: "The previous symbol was from MorningTide."
	}, {
		question: "3. What expansion set is this symbol from?",
		picture: "ODY_symbol.png",
		answerChoices: ["Alara Reborn", "Dragons of Tarkir", "Khans of Tarkir", "Odyssey"],
		correctChoice: "Odyssey",
		feedback: "The previous symbol was from Odyssey."
	}, {
		question: "4. What expansion set is this symbol from?",
		picture: "LRW_symbol.png",
		answerChoices: ["Alara Reborn", "Lorwyn", "Scars of Mirrodin", "Odyssey"],
		correctChoice: "Lorwyn",
		feedback: "The previous symbol was from Lorwyn."
	}, {
		question: "5. What expansion set is this symbol from?",
		picture: "SOM_symbol.png",
		answerChoices: ["Alara Reborn", "Dragons of Tarkir", "Scars of Mirrodin", "Odyssey"],
		correctChoice: "Scars of Mirrodin",
		feedback: "The previous symbol was from Scars of Mirrodin."

	}];

	genq();

	function genq() {
		$('.individual-questions').text(questions[currentQuestion].question);
		$('.qimage').attr({
			'src': 'assets/images/' + questions[currentQuestion].picture,
			'alt': 'question-image'
		});
		for (var i = 0; i < questions[currentQuestion].answerChoices.length; i++) {
			$('#choices').append('<input type="radio" name="radioName" value="' + questions[currentQuestion].answerChoices[i] + '" /> ' + questions[currentQuestion].answerChoices[i]);

		}
	}

	$('.quiz-button').on('click', function () {
		var selectedRadio = $('input[name=radioName]:checked', '#choices').val();
		var correctAnswer = questions[currentQuestion].correctChoice;

		nextQuestion();

		if (selectedRadio === correctAnswer) {
			valiateAnswer('Correct');
			points++;
			$('.badge').text(points);

		} else {
			valiateAnswer("Incorrect");
			$('#correct-answer-feedback').append(questions[currentQuestion].feedback);
		}
		if (currentQuestion >= 4) {
			gameOver();
			questionCounter--;
			$('.badge2').text(questionCounter);
		}
	});

	function valiateAnswer(message) {
		$('#initial-feedback').text(message);
		//$('#correct-answer-feedback').append(questions[currentQuestion].feedback);
	}


	function nextQuestion() {
		$('.individual-questions').empty();
		$('#choices').empty();
		$('#correct-answer-feedback').empty();
		currentQuestion++;
		questionCounter++;
		$('.badge2').text(questionCounter);
		genq();
	}

	function gameOver() {
		$('.individual-questions').hide();
		$('#choices').hide();
		$('#choices').empty();
		$('.qimage').hide();
		$('#correct-answer-feedback').empty();
		$('.finished').show();
		$('.quiz-button').hide();
		$('.new-game-button').show();
	}

$('.new-game-button').click( function(){
	newGame();
});

	function newGame() {
			points = 0;
			currentQuestion = 0;
			questionCounter = 1;
			genq();
			$('.new-game-button').hide();
			$('.quiz-button').show();
			$('.badge2').text(questionCounter);
    		$('.badge').text(points);
    		$('#choices').show();
    		$('.finished').hide();
    		$('#initial-feedback').empty();
    		$('#correct-answer-feedback').empty();
    		$('.qimage').show();
	}

	// create a new game function here

});



/* Functions needed:
Generate new questions from Object
	Must Append answer choices
	Must appened symbol Image
	Reset radio button selector

Compare Answer Function
	On click of Sumit Button
	Takes user input from radio button and compares it to "correctChoice from Object"
	Increment Correct Answer Counter if correct
	Tell user "Correct" or "Incorrect" in feedback section
	append Object key/value feedback to feedback section
	remove previous question/answers and append the next question
*/