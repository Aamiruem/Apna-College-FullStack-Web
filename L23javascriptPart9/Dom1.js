let para = document.createElement("p");

para.innerText = "Hey I'm red and I am new para";
document.querySelectorAll("body").prepend(para);
para.classList.add("red");

let h3 = document.createElement("h3");

h3.innerText = "Hey I'm blue ";

document.querySelectorAll("body").prepend(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";

para2.innerText = "ME TOO!";

div.append(para2);
div.append(para2);

document.querySelectorAll("body").prepend(div);

div.classList.add("mystyle");
