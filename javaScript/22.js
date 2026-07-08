// assignment
let a = 100;

function hoist() {
  console.log(message);
  console.log("a inside hoist: ", a)

  var message='Hoisting is all the rage!'
  
  a = 200;
  console.log("a inside hoist after updating value: ", a)
}

console.log("a outside hoist: ", a)
hoist();