// shift
// unshift

let nums = [40, 10, 50, 80, 96];

// let removed = nums.shift();
// console.log(removed);
// console.log(nums);


nums.unshift(100);
console.log(nums);

let arr = [];

arr.push("eat");
arr.push("code");
arr.push("sleep");

console.log(arr);
arr.shift();
console.log(arr)

let message = ["msg1", "msg2"];
message.unshift("urgent");
message.push("msg3");
console.log(message)

message.shift();
console.log(message);