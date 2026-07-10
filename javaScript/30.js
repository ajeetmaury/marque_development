// filter()
const nums = [40, 50, 60, 11, 56, 15, 12, 6];

// const res = nums.filter(function(x){
//     if(x > 30){
//         return x;
//     }
// })

// console.log(res);

// -----------------------------------

const res1 = nums.filter( x => x % 2 != 0)

console.log(res1);


// --------------------------------------

const arr = ["mango", "kivi", "dragonFruit", "sunmelon", "cherry", "watermelon", "goa"];
// output : ["kiwi", "goa"];

const res2 = arr.filter(function(y){
    if(y.length <=4){
        return y;
    }
})
const res3 = arr.filter(z => z.length<=4
)

console.log(res2);
console.log(res3);

// -----------------------------

let users = [
    {id:1, name : "Ajeet", salary : 30000},
    {id:2, name : "Ankit", salary : 40000},
    {id:3, name : "Abhishek", salary : 900000},
    {id:4, name: "balkrishana", salary: 700000}
];

let res4 = users.filter(user => user.salary>30000).map(user => user.name);
console.log(res4)


// -----------------------------------

const students = [
    {name: 'John James', status: true},
    {name: 'Ajeet', status: false},
    {name: 'Abhi', status: true},
    {name: 'balkrishna', status: true},
    {name: 'Ankit', status: false},
    {name: 'babe', status: true}
];

const res5 = students.filter(student => student.status==true).map(student => student.name);

console.log(res5);