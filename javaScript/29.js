const nums = [40, 50, 60, 11, 56];
const newNums = [];

// output :
// newNums = [80,100,120,22,112];

// for(let i=0;i<nums.length;i++){
//     newNums[i] = nums[i]*2;
// }

// for(let i =0;i<newNums.length;i++){
//     console.log(newNums[i]);
// }

// -------------------------
// using map :
// const nums = [40, 50, 60, 11, 56];

let res = nums.map((num) => {
    return num*2
});

let res1 = nums.map(num => num*2);

console.log(res)
console.log(res1)

// -------------------------------

const arr = ["cow", "dog", "rabbit", "bear", "tiger"];

// output :
// newArray = ["animal : cow", "animal : dog", ........]

let res2 = arr.map((num) => {
    return `animal : ${num}`
})

console.log(res2)

// -----------------------------------
// extracting object  Properties 
const userProfile = [
    {id: 101,
        username: "abhishek"
    },
    {
        id:202,
        username: "Ajeet"
    }
];
const usernames = userProfile.map()