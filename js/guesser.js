// The following comments are settings for various linters
/*jslint es6: true*/ // Causes an "Unexpected 'es6'." warning in JSLint that you should ignore.
/*jshint globalstrict: true*/
/*jshint esversion: 6 */
/*jshint jquery: false*/
/*jshint node: false*/
/*jshint browser: true*/
/*jshint devel: true*/
/*eslint-env es6*/
/*eslint-env jquery: false*/
/*eslint-env browser*/
/*eslint no-console: 0*/

/*
 * INSTRUCTIONS:
 * Use ES6 or above for this assignment.
 * 
 * Make a guessing game where the computer guesses what the human user's secret
 * number is between 0 and 100 (inclusive). Do NOT use Arrays,
 * do NOT use a linear search algorithm, and do NOT use the prompt functions!
 * 
 * Use if-else and confirm("some question") inside the while-loop.
 * The human is expected to click the cancel button to indicate No
 * (and thus the confirm function returns false)
 * or the OK button to indicate Yes (confirm function returns true).
 * 
 * Do NOT change the line "guess = Math.round((min + max) / 2);"
 * because the computer is supposed to guess efficiently by
 * asking the human if their secret number is higher, lower, or equal to
 * the computer's current guess.
 * 
 * Do NOT use break or continue. You can use the "return;" statement inside
 * the while-loop to get the computer to leave the guesser function.
 * 
 * For info on how while loops work see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * For info on how return works see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 * For info on how arrrow function expressions work see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */
const guesser = event => {
	let min = 0;
	let max = 100;
	let guess;
	// If this guesser function was called correctly both event.currentTarget
	// and the this variable should be the window object. If event is undefined you probably
	// changed the code at the end of this file even though you are not allowed to.
	console.log("this:", this);
	console.log("event.currentTarget:", event.currentTarget);

	alert("Think of a number between " + min + " and " + max + ".");
	while (min <= max) {
		guess = Math.round((min + max) / 2);
		// TODO: Add your code below here ONLY!
		let imput = prompt(`Is your number higher than ${guess} use yes or no or if number found type correct`)
		if( imput === 'yes' ){
			min =  guess;
		}else if(imput === 'no') { 
			max =  guess
		} else if(imput !=='yes' || imput !== no) {
			alert("I could not guess your number. I think you are cheating!");
		}
	
	
		
		// TODO: Add your code above here ONLY!
	}

	
};
// guesser is now an arrow function that takes a paramaeter it refers to as event.
window.onload = guesser;
// When the window's page is loaded it will call guesser(event).