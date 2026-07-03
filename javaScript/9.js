// Create a object and print all key model using by for-each loop

const car = {
    brand: "BMW",
    model: 2020,
    year: 2020
}

// for-In
for (let key in car) {
    console.log(key + ":", car[key]);
}


// forEach Method
const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(function(fruit,index){
    console.log(`fruit ${index + 1}: ${fruit}`)
})


const price = [10, 20, 30];
price.forEach(function(pri){
    console.log(`price : ${pri}`);
})

const nums = [2,4,6];
const square = [];


square.forEach(function(num){
    square.push(num*num);
    // console.log(`choco : ${num}`);
})

console.log(square);


nums.forEach(function(num){
    console.log(`num : ${num}`);
})

const arr = [{name : "Abhi"}, {name : "Ajeet"}];

arr.forEach(function(val, idx){
    console.log(val.name);
})