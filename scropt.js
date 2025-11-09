//Practicing objects
const person = {
    name: 'Alice',
    age: 23,
    role: "Developer"
}

//Using objecty Constructor
function Player(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
}
//creating new object with the constructor
const player1 = new Player("Bob", 24, "IT technician");
const player2 = new Player("Rebecca", 22, "Designer");

console.log(person);
console.log(player1);
console.log(player2);
console.log(player1.name);

//exercise
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
};
//creating new object with the constructor
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
const book2 = new Book("1984", "George Orwell", 328, false);


console.log(book1.info()); // "To Kill a Mockingbird by Harper Lee, 281 pages, read"

//accessing prorotype method
const proto = Object.getPrototypeOf(book1);
console.log(proto.info === Book.prototype.info); // true


//more examples
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

function Players(name, marker) {
  this.name = name;
  this.marker = marker;
}

Players.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Players.prototype); // returns Object.prototype

// Now make `Players` objects inherit from `Person`
Object.setPrototypeOf(Players.prototype, Person.prototype);
Object.getPrototypeOf(Players.prototype); // returns Person.prototype

const players1 = new Players('steve', 'X');
const players2 = new Players('also steve', 'O');

players1.sayName(); // Hello, I'm steve!
players2.sayName(); // Hello, I'm also steve!

players1.getMarker(); // My marker is 'X'
players2.getMarker(); // My marker is 'O'
