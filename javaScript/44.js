// class 

class Student{

    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    introduce(){
        console.log("Hi, I am " + this.name + " with id: " + this.id);
    }

    intro(){
        console.log(`Hi, I am ${this.name} with id: ${this.id}`);
    }
}

let s1 = new Student("Ajeet", 21);
let s2 = new Student("Rahul", 55);
let s3 = new Student("Saurabh", 65);

s1.introduce()
s2.introduce()

s3.intro()