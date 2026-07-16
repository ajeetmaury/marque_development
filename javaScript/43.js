// JSON method
// JSON.stringify()
// JSON.parse()

// const user = {
//     name : "Ajeet",
//     age : 21,
//     isEnrolled: true
// };

// console.log(user);
// const jsonString = JSON.stringify(user);
// console.log(jsonString);


// ---------------------------------
const user2 = {
    name : "Ajeet",
    isEnrolled: true,
    age : undefined,
    greet : function(){
        console.log(`hi there`)
    },
    Date: new Date().toLocaleDateString()
};

let res = JSON.stringify(user2);
let res2 = JSON.parse(res);

console.log(res);
console.log(typeof res);
console.log(res2);
console.log(typeof res2);