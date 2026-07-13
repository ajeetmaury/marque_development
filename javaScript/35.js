function delayMsg(msg){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log(msg);
            resolve();
        }, 3000);
    })
}

delayMsg("Delay step 1")
.then(()=>delayMsg("Delay step 2"))
.then(()=>delayMsg("Delay step 3"));