// Polling example

// using setInterval
function poll2(){
    console.log("Polling at", new Date().toLocaleTimeString());
}

setInterval(poll2, 2000);

// --------------------------
// using recursion and setTimeout

function poll(){
    console.log("Polling at", newDate().toLocaleTimeString());
    setTimeout(poll, 2000);
}
setInterval(poll, 2000);