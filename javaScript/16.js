// ...rest operator 
function add(a, b, ...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}
add(10, 20, 30, 40, 50);


// sum of all number
function sum(...rest){
    let total = 0;
    for(let i=0;i<rest.length;i++){
        total += rest[i];
    }
    console.log(total);
}

sum(10, 20, 30, 40, 50);

function num(...rest){
    console.log(rest);
}

num(1, 2, 3, 4, 5, 6);