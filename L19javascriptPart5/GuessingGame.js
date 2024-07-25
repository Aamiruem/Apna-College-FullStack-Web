// let prompt = require("prompt-sync")();

const max =  prompt("Enter the max number ");

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

// console.log("Guess the number between 1 to " + max);
let guess = prompt("guess the number! ")
while(true){
    if(guess == "quit"){
        console.log("You guessed " + guess + " too many times");
        break;
    }
    if(guess == random){
        console.log("You are right! congrats!! random number was " , random);
        break;
    } else if(guess < random){
        console.log("Your guess was too small. please try again! ");
    } else if(guess > random){
        console.log("Your guess was too high. please try again! ");
    }else{
        console.log("You guess was wrong. please try again ");
    }
}
