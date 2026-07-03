// Array Method
// -puch 
// -pop
// -shift
// -unshift

const colors = ["Blue", "Black", "Green", "violet"]

colors[1] = "Orange"
console.log(colors);

colors.push("Red");
console.log(colors);
console.log(colors.length);

for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}

console.log("For-Of");
// for-of
for (const color of colors) {
    console.log(color);
}