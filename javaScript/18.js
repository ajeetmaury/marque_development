// String method in java 
const name = "Nikita Vs Anuradha";

console.log(name.toUpperCase());
console.log(name.toLowerCase());

const input = "  hello world     ";
console.log(input.trim());     //"hello world"
console.log(input.trimStart());   //"hello world  "
console.log(input.trimEnd());   //"  hello world"

// Slice method
const str = "JavaScript";

console.log(str.slice(0, 4)) //"Java"
console.log(str.slice(4))  // "Script"
console.log(str.slice(-6));  //"Script"


// split()

const sentence = "I Love JavaScript";

console.log(sentence.split(" "));
console.log("a, b, c".split(","));
console.log("hello".split(""));


// includes(), startsWith(), endsWith()

const url = "https://example.com/page";

console.log(url.includes("example"));
console.log(url.startsWith("https"));
console.log(url.endsWith(".com/page"));


// Replace and replaceAll
const text = "I like cats. Cats are great.";

console.log(text.replace("cats", "dogs"));
console.log(text.replaceAll("cats", "Dogs"));



// indexOf() and lastIndexOf();

const str1 = "banana";
console.log(str1.indexOf("a"));
console.log(str1.lastIndexOf("a"));
console.log(str1.indexOf("z"));


// padStrat() and padEnd()
const num = "7";

console.log(num.padStart(3, "0"));
console.log(num.padEnd(3, "0"));

// repeat() 
