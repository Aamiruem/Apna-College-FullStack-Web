// Lexical Scope
// a variable defined outside a function can be accessible inside another function defined after the variable declaration


// The opposite is NOT true

function outerFunc(){
    let x = 5;
    let y = 6;

    function innerFunc(){
        console.log(x);
    }

    innerFunc();

    console.log(y);
}




function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){ // function scope
        let a = 10;
        console.log(x);
        console.log(y);
    }

    console.log(a);
    innerFunc();
}
