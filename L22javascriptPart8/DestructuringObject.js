const student = {
    name: "aamir",
    class: "graduate",
    age: 22,
    subjects: ["Mathematics", "Physics", "Chemistry"],
    grades: {
        math: 90,
        physics: 95,
        chemistry: 95
    },
    userName: "aamir@123",
    password: 123,

};
const {userName: user, password: pass } = student;
console.log(user, pass);
