let msg = "apnacollege";
console.log(msg.slice(-1)); //11-1 = 10 => e
console.log(msg.slice(-2)); //11-2 = 9 => ge

console.log(msg.slice(0,5));
console.log(msg.slice(0,5).toUpperCase());
console.log(msg.slice(0,5).toUpperCase().slice(0,3));
console.log(msg.slice(0,5).toUpperCase().slice(0,3).slice(0,1));

console.log(msg.slice(4, 11));
console.log(msg.slice(0, ));
console.log(msg.slice(0, 5).toUpperCase().slice(0, 3).slice(0, 1).toLowerCase());
console.log(msg.slice(0, msg.length));


//slice method is used to extract a part of the string and return it as a new string without changing the original string
//slice method takes two arguments first is the starting index and second is the ending index
console.log(msg.slice(-1)); //12-1 = 11 last output = e
