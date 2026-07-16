// working with objects
const student = { name: "Ajeet", age: 21, city: "Vadodara"};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

for(const [key, value] of Object.entries(student)){
    console.log(`${key}: ${value}`);
}