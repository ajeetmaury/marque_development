// class inheritance with super keyword 

// class Foo{
//     constructor(name){
//         this.name = name;
//     }

//     getNameSeparator(){
//         return "-";
//     }
// }

// class FooBar extends Foo{
//     constructor(name, index){
//         super(name);
//         this.index = index;
//     }

//     getNameSeparator(){
//         return "/"
//     }

//     getFullName(){
//         return this.name + this.getNameSeparator() + this.index;
//     }
// }

// const firstFooBar = new FooBar("foo", 1);
// console.log(firstFooBar.name);

// console.log(firstFooBar.getFullName());

// ---------------------------
// task

// class Rectangle{
//     constructor( height, width){
//         this.name = "Rectangle";
//         this.width = width;
//         this.height = height;
//     }

//     get area(){
//         return this.height * this.width;
//     }
// }

// class Square extends Rectangle{
//         constructor(name,length){
//             super(name);
//             this.height = length;
//             this.width = length;
//         }
// }

// const sq = new Square("Square",10);
// console.log(sq.area)

// let c1 = new Rectangle(10, 15);
// console.log("Name", c1.name);
// console.log("Height", c1.height);
// console.log("Width", c1.width);
// console.log("Area",c1.area);

// ----------------------------------
// task

class Animal{
    constructor(name){
        this.name = name;
    }

    get speak(){
        return `${this.name} make a sound`
    }
}

class Dog extends Animal{
    get speak(){
        // return `${this.name}, specifically barks`;
        return super.speak;
    }
}

let d = new Dog("Dog");
console.log(d.speak);