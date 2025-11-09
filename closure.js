//closure
function makeAdder(x) {
  return function(y) {
    return x + y;
  }
}

const add5 = makeAdder(5);
console.log(add5(2)); // 7



//function factory

const User = function (name) {
  this.name = name;
  this.discordName = "@" + name;
}
// hey, this is a constructor - 
// then this can be refactored into a factory!

function createUser (name) {
  const discordName = "@" + name;
  return { name, discordName };
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword

const user1 = createUser("Elle");
console.log(user1.discordName); // "@Elle"




//private variables using closure

/*  Modern wsy for private method or design pattern, is the oop
also the use of clases, inheretence, # fgor private, the constructors and all
for closure modern way is using the module import and export ways*/
//AN EXAMPLE DISPLAYING ALL THSES:
//1. OOP-Clases
class Person {
  #age; // private field  
  constructor(name, deptartment, age) {
    this.name = name;
    this.deptartment = deptartment;
    this.#age = age; //private variable
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I work in ${this.deptartment}.`);
  }

  #getAge() {
    return this.#age;
  }
};
const emp1 = new Person("Alice", "Engineering", 30);
emp1.greet(); // Hello, my name is Alice and I work in Engineering.
//console.log(emp1.#age); // Error: Private field '#age' must be declared in an enclosing class
//console.log(emp1.#getAge()); // Error: Private method '#getAge' must be declared in an enclosing class

//inheritance next
class Employee extends Person  {
    constructor(name, department, age, position) {
        super (name, department, age);
        this.position = position;
    }
    dept() {
        console.log(`I work as a ${this.position} in ${this.deptartment} department.`);
    }

}
//console.log(emp1.#getAge()); // Error: Private method '#getAge' must be declared in an enclosing class --- IGNORE ---
const emp2 = new Employee("Bob", "Marketing", 28, "Manager");
emp2.greet(); // Hello, my name is Bob and I work in Marketing.
//console.log(emp2.#age); // Error: Private field '#age' must be declared in an enclosing class
//console.log(emp2.#getAge()); // Error: Private method '#getAge' must be declared in an enclosing class --- IGNORE ---
emp2.dept(); // I work as a Manager in Marketing department.

//2. Closure way of private variables
const PersonClosure = function (name, deptartment, age) {
  let _age = age; // private variable
    return {
    name: name,
    deptartment: deptartment,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I work in ${this.deptartment}.`);
    },
    getAge: function() {
        return _age;
    }
  };
};

//Note the class is the modern way of doing this, closure way is old fashioned but still valid


//module design patter





//assume next.js

export function sayHi(user) {
  return `Hello, ${user}!`;
}

//assume fun.js

import {sayHi} from './next.js';




