// using reduce

function Sum(...rest){
    console.log(rest)

    return rest.reduce((total, curr) => {
        return total+curr;
    }, 0)
}

console.log(Sum(10, 20, 30, 40, 50));

function add(...rest){
    console.log(rest);

}


function splitNumber(first, ...rest){
    return {
        first,
        rest
    };
}
console.log(splitNumber(10, 20, 30, 40));


function makeSentence(prefix, ...words) {
    return prefix + " " + words join(" ");
}

console.log(makeSentence("Hello", "my", "name", "is", "Sara"));