function outerFunc(){
    let x = 5;
    let y = 6;

    function innerFunc(){
        console.log(x);
    }

    innerFunc();

    console.log(y);
}
