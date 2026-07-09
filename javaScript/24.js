// setTimeout method()
// setTimeout - allows us to run a function once after the interval of time.

// setInterval - allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

// syntax
// let timerId = setTimeout(function, delayInMilliseconds, argument1, argument2, ......);

// syntax
// let intervalId = setInterval(function, delayInMilliseconds, argument1, argument2, ...)

function SayHi(){
    console.log('Hello');
}

setTimeout(SayHi, 2000);

// setTimeout-------------------
console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Repeating message with setInterval--------------------------

setInterval(() => {
    console.log("This prints every 1 sec");
}, 1000);