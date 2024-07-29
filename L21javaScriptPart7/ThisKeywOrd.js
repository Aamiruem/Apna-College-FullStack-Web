const student = {
    name: "kamran",
    age:  22,
    english: 89,
    math: 96,
    phy: 98,
    getAvg(){
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
}

console.log(student.getAvg());
