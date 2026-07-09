// countdown timer-----------------
let count = 10;

let clock = setInterval(() => {
    console.log("count:", count);
    count--;

    if(count < 0){
        clearInterval(clock);
        console.log("time off")
    };
}, 1000);


// ------------------
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");