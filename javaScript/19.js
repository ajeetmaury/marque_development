// Scopes in js
// var -> function Scope 
// let, const -> block scope

var a = 100;

function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a); 
/* 
Accessible as a global variable outside hoist() function
Output: 20
*/

// console.log(b); 


//a) Global Scope 

let globalVar = "I'm global";

function show() {
  console.log(globalVar); // accessible here
}
show();

console.log(globalVar); // accessible here too

// b) Function Scope 
function test() {
  var x = 10;
  console.log(x);
   
}
test();
// console.log(x);  //error due to not define 

// c) Block Scope
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a);
// console.log(b);  //error 
// console.log(c);  // error 


function animal(){
    if(true){
        var animal1 = "cat";
        const animal2 = "dog";
        let animal3 = "rat";
    }
    console.log(animal1);
    // console,log(animal2); 
    // console,log(animal3);
}

animal();