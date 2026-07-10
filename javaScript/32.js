const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res = number.filter(num => num %2 == 0).map(num => num*num).reduce((sum, currNum) => sum + currNum, 0);

console.log(res)