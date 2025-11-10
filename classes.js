class Player {
  constructor(name, marker) {
    this.name = name;
    this.marker = marker;
  }

  sayHello() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p1 = new Player("Elle", "X");
p1.sayHello(); // "Hi, I'm Elle"


/*  Getters and Setters

These allow you to control how values are read and set.
*/


//private feild and method
class SecretBox {
  #secret = "Hidden code"; // private variable

  reveal() {
    return this.#secret;
  }
}

const box = new SecretBox();
console.log(box.reveal());  // ✅ "Hidden code"
console.log(box.#secret);   // ❌ SyntaxError: Private field


//inheritance

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Player extends Person {
  constructor(name, marker) {
    super(name); // call parent constructor
    this.marker = marker;
  }

  play() {
    console.log(`${this.name} plays as ${this.marker}`);
  }
}

const p1 = new Player("Elle", "X");
p1.greet(); // from Person
p1.play();  // from Player


/* Static Properties and Methods

Static members belong to the class itself, not the instances.
*/

class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(2, 3)); // 5
const helper = new MathHelper();
console.log(helper.add); // ❌ undefined
