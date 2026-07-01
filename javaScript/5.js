// if-else
let age = 18;

if(age> 18){
    console.log("We can vote");
}else{
    console.log("We can't vote");
}

// Nested if
let age1 = 21;
let hasId = true;

if(age1 > 18){
    if(hasId){
        console.log("We Can go college");
    }
}else{
    console.log("We Can't go college");
}

// array 0f num 
let arr = [1,2,3,4,5];

// Array of objects

let arr1 = [{a:1, b:2}, {x:2, y:6}];

console.log(arr1[0].a);

const users = [{
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
}, {
    name: "Ajeet",
    age: 25
}
]
console.log(users[1].name);
console.log(users[1].age);
console.log(users[0].address.city);

// object of objects

const user = [{
    name: "Abhishek",
    age: 30,
    address: {
        city: "Devariya",
        pincode: 274204
    }
}]

console.log(user[0].address.city)
