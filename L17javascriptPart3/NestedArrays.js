let nums = [[2, 4], [3, 6], [4, 8]];

console.log(nums);

console.log(nums[0]);

console.log(nums[1]);

console.log(nums[2]);


console.log(nums[0].length);

console.log(nums[2][1]);
console.log(nums[2][2]); // undefined

console.log(nums[2][1] + nums[2][2]); // NaN
console.log(nums[2][1] + nums[2][2] + 5); // NaN + 5 = NaN

console.log(nums[2][1] + (nums[2][1] + 5)); // 16 + 5 = 21
