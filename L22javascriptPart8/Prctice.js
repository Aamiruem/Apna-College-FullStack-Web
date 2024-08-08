function getMin(nums){
    let min = nums.reduce((min, ele) => {
        if(min<ele){
            return min;
        } else{
            return ele;
        }
    });
    return min;
}
let nums = [10, 20, 30, 40, 50, 60];

console.log(getMin(nums));
