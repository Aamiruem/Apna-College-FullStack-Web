let num = [1, 2, 3, 4, 5];
let double = num.map(function(ele){
    return ele * 2;
});

console.log(double);

console.log("first way \n");
//filter function using function
let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even = nums.filter(function(ele){
    return ele % 2 == 0;
});
console.log(even);


console.log("second way \n");
//filter function using arrow function
let nums1 = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even1 = nums1.filter((ele) => {
    return ele % 2 == 0;
});
console.log(even1);




console.log("third way \n");

let nums2 = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even2 = nums2.filter((num) => (num % 2 == 0));

console.log(even2);



console.log("first way \n");

let nums3 = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even3 = nums3.filter((num) => {
    return num % 2 == 0;// even -> true
});

console.log(even3);
