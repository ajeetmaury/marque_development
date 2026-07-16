// creating an object
// const student = {
//     name : "Ajeet",
//     age : 21,
//     isEnrolled: true 
// };

// console.log(student);


// Constructor function
// function Student(name, age){
//     this.name = name;
//     this.age = age;
// }
// const s1 = new Student("Riya", 21);
// console.log(s1.name);


// Task
function EmployeeDetail(name, department, salary) {
    this.name = name;
    this.department = department;
    this.salary = salary;

    this.introduction = function () {
        console.log(
            `I am ${this.name} from ${this.department} department, with salary of ${this.salary}k`
        );
    };
}

const emp = new EmployeeDetail("Ajeet", "tech", 80);
emp.introduction();
