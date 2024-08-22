let jsonRes = '{"fact ": "approximately 1/3 of cat owners think their pets are able to read their minds." , "length": 78}';




let validRes = JSON.parse(jsonRes);

console.log(validRes.fact);

let student = {
    name: "kamran",
    age: 22,
    marks: 99.7,
    city: "Delhi"
};

console.log(student["name"]);
console.log(student.name);
