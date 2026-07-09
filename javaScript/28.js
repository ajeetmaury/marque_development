// countdown with resume, pause function

let count = 10;
let currentCount;
var clock ;

function countDown(){

    clock = setInterval(()=>{
    console.log(count);
    count --;

    if(count < 0){
            clearInterval(clock);
        }
    }, 1000)
}

function pause(){
    currentCount = count;
    console.log("paused at:", currentCount);
    clearInterval(clock);
}

function resume(){
    count = currentCount;
    console.log("resumed from:", count);
    countDown();
}

countDown();

setTimeout(pause, 3500)
setTimeout(resume, 8000)