/* practice problem
1. make a function sleeping(time), that takes "time" as an argument
2. it should get resolve after"time" sec passed
3. on getting resolve, it should print out `${time}` sec passed 
.then
*/

function sleeping(time){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log(time);
            resolve(`${time} sec passed`);
        },`${time}`);
    })
}

sleeping(5000)
.then((msg)=>{console.log(msg)})
.then((msg)=>{console.log(msg)})
