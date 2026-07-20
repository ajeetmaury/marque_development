function animal(){
    this.name = this.name,
    this.sound = this.sound,

    this.intro = function(){
        console.log(`My pet name is ${this.name}`)
    }
}

animal.prototype.speak = function(){
    console.log(`${this.name} : ${this.sound}`)
}

let a1 = new animal("bob", "barks");
a1.intro();
a1.speak();