// let arr = [1, 2, 3, 4, 5, 6];
// let print = function(ele){
//     console.log(ele);
// };

// arr.forEach(print);





// arr.forEach(function(ele){
//     console.log(ele);
// });

// output: 1 2 3 4 5 6



// using arrow function
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((ele) => {
    console.log(ele);
});

console.log("other way\n");

// output: 1 2 3 4 5 6
arr.forEach(function (ele){
    console.log(ele);
});
  



console.log("other way");
arr.forEach(ele => console.log(ele));









let arr1 = [
    {
        name: "aamir",
        id: 1,
        marks: 95,
    },
    {
        name: "kamran",
        id: 2,
        marks: 90,
    },
    {
        name: "khan",
        id: 3,
        marks: 80,
    },
];
console.log(arr1);

arr1.forEach((ele) => {
    console.log(ele);
});
