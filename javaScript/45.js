//object & method

//  class student{
//     constructor(name, marks){
//         this.name = name;
//         this.marks = marks;
//     }
//     getAvg(){
//         return this.marks.reduce((max, val) => max + val, 0) / this.marks.length;
//     }  
// }

// let s1 = new student("ajeet", [10, 20 ,30]);
// console.log(s1.getAvg());

// --------------------------------------------------

// Getter & Setter 

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get Area(){
        return Math.PI * this.radius **2;
    }
    set diameter(val){
        this.radius = val/2;
    }
}

let c1 = new Circle(7);
console.log(c1.radius);
console.log(c1.Area);

console.log("-------");
c1.radius= 20;
console.log(c1.radius);
console.log(c1.diameter);
