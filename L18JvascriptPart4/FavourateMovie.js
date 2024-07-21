const favMovie = 'avatar';

let guess = prompt("Guess my favorite movie");

while((guess != favMovie) && (Guess != "quit")){
    guess = prompt("wrong guess. please try again ");
}

if(guess == favMovie){
    alert("congrats!!");
} else{
    alert("goodbye");
}
