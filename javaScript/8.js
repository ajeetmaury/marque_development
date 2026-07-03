console.log(" " == undefined); // false
console.log("" == 0); //true
console.log(null == undefined); // true

// operator
let x = 5;
console.log(x++); // 5  // x = 6
console.log(++x); // 7   // x = 7
console.log(x--); // 7   // x = 6
console.log(--x); // 5   // x = 5

// ternery operator
let y = 2;
let price = y>5 ? "Allowed" : "Not Allowed";

console.log(price);


let count = 0;
console.log(count || 10) // 10   // if count =0 then print 10 or null or undefined otherwise print count
console.log(count ?? 10) // 0     // null or undefined ke alawa kuchh bhi aaye acctual value print karta hai 

let str = "";
console.log(str || "annoyonimus")

let setting = {value : 0};
