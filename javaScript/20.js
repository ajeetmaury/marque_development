// --------------------------------
// greet();

// function greet() {
//   console.log("Hello");
// }

// ----------------------------------

// greet();

// var greet = function () {
//   console.log("Hello");
// };

// ----------------------------------

// expression(); 

// var expression = function hoisting() {
//   console.log('Will this work?');
// };

// ----------------------------------

function f() {
    function g() {
        console.log(x)
    }
    let x = 1
    g()
}

f()