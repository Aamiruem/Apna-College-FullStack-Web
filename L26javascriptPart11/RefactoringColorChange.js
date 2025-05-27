const h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve(`Color changed to ${color}`);
        }, delay);
    });
}

changeColor("red", 1000)
    .then((res) => {
        console.log("Red color was completed");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("Orange color was completed");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("Green color was completed");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("Blue color was completed");
    })
    .catch((err) => {
        console.error("Error:", err);
    });
