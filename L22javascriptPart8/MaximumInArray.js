let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let max = nums.reduce((max, ele) => {
    if(ele>max){
        return ele;
    } else{
        return max
    }
});

console.log("This is a max number of over all given array = ", max);
