// class BankAccount{
//     balance = 0;  
//     deposite(val){
//         this.balance += val;
//     }
//     getBalance(){
//         return `balance : ${this.balance}`
//     }
// }

// let acc1 = new BankAccount();
// console.log(acc1.balance);

// acc1.deposite(500);
// console.log(acc1.balance);

// acc1.deposite(200);
// console.log(acc1.getBalance());


// --------------------

// class Car{
//     constructor(model, year){
//         this.model = model;
//         this.year = year;
//     }
//     get displayInfo(){
//         return `This car is a ${this.year} ${this.model}.`
//     }
// }

// let s1 = new Car(2026, 324);
// console.log(s1.displayInfo);


// -------------------------

// class Temperature{
//     #celsius = 0;

//     // temp(val){
//     //     this.#celsius = val;
//     // }
//     get convTemp(){
//         return `temp in F: ${9/5*(this.#celsius)+32}`
//     }
//     set setVal(val){
//         this.#celsius = (val - 32) * 5/9
//     }
//     get readcel(){
//         return`${this.#celsius}`
//     }
// }

// let s1 = new Temperature(40);
// console.log(s1.convTemp);
// // console.log(s1.setVal);
// s1.setVal = 200;
// console.log(s1.readcel);


// -----------------------------
class User{
    static useCount = 0;
    constructor(use){
        this.use = use;
        User.useCount++;   
    }
}

console.log(User.useCount);

const user1 = new User("Ajeet");
const user2 = new User("Nick");
const user3 = new User("Abhishek");
console.log(User.useCount)

// ---------------------------

class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary
    }
}
class Manager extends Employee{
    constructor(name, salary, teamSize){
        super(name, salary);
        this.teamSize = teamSize;
    }

    get describe(){
        return `${this.name} manages a temm of ${this.teamSize} member`
    }
}

const s1 = new Manager("Ajeet", 80000, 3);
console.log(s1.describe);