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
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    };
}
//creating new object with the constructor
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
const book2 = new Book("1984", "George Orwell", 328, false);


book1.info(); // "To Kill a Mockingbird by Harper Lee, 281 pages, read"
