// clearInterval-------------------
const clock = setInterval(() => {
    console.log("This prints every 1 sec");
}, 1000);

clearInterval(clock);


// -----------------
setTimeout(() => {
    console.log("clock Stopped");
    clearInterval(clock);
}, 5000);



