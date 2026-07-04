// Function type in java 

function add(a, b){
    let sum = a+b;
    console.log(sum);
}

add(10, 15);

// Function expression
const greet =function(name){
    console.log(`Hello! Good morning ${name}`)
}

greet("Ajeet");


// Anonymous function
// setTimeout(function(){
//     console.log("after 5 sec");
// }, 5000);


// Named function expression
// const factorial = function fact(n) {
//     if(n <= 1) return 1;
//     return n * fact(n-1);
// };
// console.log(factorial(5)); //120


// Arrow function
// function sum1(a, b){
//     console.log(a+b);
// }

let sum =(a,b)=>{console.log(a+b)}

sum(10, 20);