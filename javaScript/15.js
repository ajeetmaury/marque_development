sayHello()

function sayHello(){
    console.log("Hello");
}

// const sayBye;
// sayBye()

// sayBye = function(){
//     console.log("Bye");
// }

const obj = {
  name: "Sara",
  regular: function () {
    console.log("Regular:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name);
  },
};

obj.regular();
obj.arrow();