let months = ["January", "july", "march", "august"];

console.log(months)
console.log(months[0]) // January
console.log(months[3]) // august

console.log(months.shift()) // undefined

console.log(months)

console.log(months.pop()) // august

console.log(months)

console.log(months.unshift("january"))

console.log(months)

console.log(months.push("december"))

console.log(months)
console.log(months.splice(1, 0, "feb"))

console.log(months)

console.log(months.splice(1, 1, "feb"))

console.log(months)

console.log(months.splice(1, 1, "feb", "march"))

console.log(months)
