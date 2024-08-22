// function getNum(){
//     return new promise((resolve, rejected) => {
//         let num = Math.floor(Math.random() * 10) + 1;
//         return num;
//     }, 1000);
//     console.log(5);
    
// }
// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }




h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        
    setTimeout(() => {
        let num = Math.floor(Math.random() * 5) +1;
        if(num >3){
            reject("failed");
        }
        h1.style.color = color;
        console.log(`color changed to ${color}!`);
        resolve("color changed!");
    }, delay);

    });
}

async function demo() {
    try{
        await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    changeColor("orange", 1000);
    } catch(err) {
        console.log("error", err);
        console.log("error caught");
        
    }


    let a = 5;
    console.log(a);
    console.log("new number", a+ 3);
    
}
