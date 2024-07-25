const car = {
    name: "BMW",
    model: "X5",
    year: 2018,
    color: "red",
    getCarDetails: function () {
        return this.name + " " + this.model + " " + this.year + " " + this.color
    }
};

console.log(car.getCarDetails());
console.log(car.name);
