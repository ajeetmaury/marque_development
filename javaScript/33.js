// Promise
// function asyncOperation(resolve, reject){
//     setTimeout(()=>{
//         console.log("data fetched")
//         resolve("promises resolve");
//     }, 3000)
// }

// // Promises creation
// let p = new Promise(asyncOperation);
// console.log("P: ", p);


// // Promise consumption
// p.then((data)=>{
//     console.log("p: ", p);
//     console.log("data: ", data);
// })
// .catch((error) => {
//     console.log("p: ", p);
//     console.log("error: ", error);
// })

// -------------------------------

const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("foo");
    },3000);
});

promise1.then((value) => {
    console.log(value);
    // Expected output: "foo";
});

console.log(promise1);
// Expected output: Promises {<pending>};