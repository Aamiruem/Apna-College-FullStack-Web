let greet = "Hello"; //global scope

function changeGreet(){
    greet = "Goodbye"; // function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);//lexical scope
    }
    innerGreet();
}
console.log(greet);
changeGreet();
