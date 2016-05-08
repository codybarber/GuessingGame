debugger;

var num = Math.random() * 100;
var number = Math.floor(num);
var i = 0;
var guess = Number(prompt("I'm thinking of a number between 1 and 100. Can you guess which one??"));


for (i = 1; i <= 10; i++) {
  if (i === 10) {
    alert("You took too many guesses! Please refresh and try again!")
    break;
  } if (guess === number) {
    alert("You are correct!! It only took you " + i + " guesses!");
    break;
  } else if (guess > number) {
    guess = Number(prompt("Your guess of " + guess + " was too high! Try again!"));
  } else if (guess < number) {
    guess = Number(prompt("Your guess of " + guess + " was too low! Try again!"));
  }
}
