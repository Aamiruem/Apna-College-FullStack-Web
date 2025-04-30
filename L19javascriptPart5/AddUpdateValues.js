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

student["city"] = "Bengaluru";

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






let student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

console.log(student.city);        // Output: 'Delhi'

// 🔁 Update existing property
student.city = "Mumbai";          // city updated to 'Mumbai'

// ➕ Add a new property
student.gender = "female";        // gender added

console.log(student.gender);      // Output: 'female'

// ✅ Final object after update and addition
console.log(student);

/*
{
  name: "shradha",
  age: 23,
  marks: 94.4,
  city: "Mumbai",     // updated
  gender: "female"    // added
}
*/
