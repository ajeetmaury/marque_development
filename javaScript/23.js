// Clouser

function outer(){
    let a = 5;

    function inner(){
        a += 1;
        console.log(a);
    }
    return inner;
}

let inner = outer();
inner();  //6
inner();  //7
inner();  //8
inner();  //9


// -----------------------
function createUser(name){
    let password = "secret123";

    return {
        getName: function(){
            return name;
        },
        checkPassword: function(pass){
            return pass === password;
        }
    };
}

const user = createUser("Ajeet");
console.log(user.getName());
console.log(user.checkPassword("123"));
console.log(user.checkPassword("secret123"));