const student = {
    name: "kamran",
    age: 22,
    marks: 99.7,
    city: "Delhi"
};

console.log(student);

student.name = "kamran khan";

console.log(student);

student["name"] = "kamran hussain";

console.log(student);

student["city"] = "Bangaluru";

console.log(student);

student["city"] = "Delhi";

console.log(student);

student["city"] = "Chennai";

console.log(student);
student.marks;

console.log(student.marks);

student.marks = 100;

console.log(student);

student.marks = [99, 89, 70, 79,88];

console.log(student);

// delete

delete student.marks;

console.log(student);

delete student.city;

console.log(student);
// delete student; // error

// update

student.age = 23;

console.log(student);
student["age"] = 24;

console.log(student);

//add

student.country = "India";

console.log(student);

student["country"] = "USA";

console.log(student);

//create

const student2 = {
    name: "kamran",
    age: 22
};

console.log(student2);
