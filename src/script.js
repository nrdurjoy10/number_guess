//Variables
let guess = document.querySelector("#guess");
let submit = document.querySelector("#submit");
let message = document.querySelector("#message");
let reset = document.querySelector("#reset");




//Reset button
const resetButton = () => {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    guess.value = "";
    message.textContent = ""
}
reset.addEventListener("click", resetButton);

//Game logic
let attempts = 0;
const checkGuess = () =>{
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts++;
    console.log(`Random Number: ${randomNumber}`);
    console.log(`Attempts: ${attempts}`);
    
    let userGuess = parseInt(guess.value);
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "😒Please enter a number between 1 and 100.";
    } else if (userGuess === randomNumber) {
        message.textContent = `😍Congratulations! You guessed it in ${attempts} attempts.`;
        reset.style.display = "block";
    } else if (userGuess < randomNumber) {
        message.textContent = "👇Too low! Try again.";
    } else {
        message.textContent = "👆Too high! Try again.";
    }
}

submit.addEventListener("click", checkGuess);