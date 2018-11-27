//create secretNumber
var secretNumber = 4;

//ask user for their guess
var guess = Number(prompt("Guess a number."));
/* alert(guess);
 */
//check guess
if (guess === secretNumber) {
    alert("Congratulations, you guessed correctly!");
}
else if (guess > secretNumber) {
    alert("Lower....");
}
else if (guess < secretNumber) {
    alert("Higher....");
}