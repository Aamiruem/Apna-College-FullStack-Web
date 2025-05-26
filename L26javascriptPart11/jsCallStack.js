function hello() {
    console.log("Hello from the hello inside function!");
}
function world() {
    console.log("Hello from the world inside function!");
    hello();
}
world();

console.log("End of the script!");
world();
console.log("Done by! End of the script again!");
