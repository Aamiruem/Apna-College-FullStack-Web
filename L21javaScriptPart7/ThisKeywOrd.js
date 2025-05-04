const student = {
    name: "kamran",
    age:  22,
    english: 89,
    math: 96,
    phy: 98,
    getAvg() {
        console.log(this); //this is the object itself
        let avg = (this.eng + this.math + this.phy) / 3;
        
        console.log(`${this.name} got avg marks =  ${avg}`); //console.log(avg);
    }
}

console.log(student.getAvg());

function getAvg() {
    console.log(this); //this is the object itself and window object in browser
}
