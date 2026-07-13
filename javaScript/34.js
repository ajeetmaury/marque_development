// Task
// 1. wait for 5 sec and print "5 sec passed"
// 2. only then "after 5 sec" should get printed




// const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("5 sec passed");
//     },5000);
// });

// prom.then((value) => {
//     console.log(value);
//     // Expected output: "5 sec passed";
// });

// console.log(prom);

// ------------------------------
function asyncTask(resolve, reject){
    setTimeout(()=>{
        console.log("5 sec passed");
        resolve();
    }, 5000);
}

new Promise(asyncTask)
.then(()=>{
    console.log("after 5 sec");
})
.catch(() =>{
    console.log("error: ", e);
})
