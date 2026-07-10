// reduce

// Syntax
// Array.reduce((acccumulator, currValue, index)=>{
//     // 
// })

const numArr = [10, 20, 30, 40, 50, 60, 70];

// ------------------------
let sum = 0;
for(let i=0;i<numArr.length;i++){
    sum += numArr[i];
}
console.log("total: ", sum);



// ------------------------
// using reduce

let res = numArr.reduce(function(sum, currNum) {
    return sum+currNum;
},0)

console.log("total: ", res);


//--------------------------
let res1 = numArr.reduce((sum, currNum) => sum + currNum, 0);

console.log(res1);


// -----------------------
// find maximum
const number = [10, 20, 11, 43, 37];

let max = number[0];

for(let i=0;i<number.length;i++){
    if(number[i]>max){
        max = number[i];
    }
}
console.log(max);

// ----------------------------

let res2 = number.reduce(function(max, currNum){
    return max<currNum ? currNum : max;
    // if(currNum[index]>max){
    //     return max = currNum[index];
    // }
},0)

console.log(res2);