let book = {
    title: "JavaScript",
    author: "John",
    pages: 300
};
console.log("Book: " + book.title + " by " + book.author);

console.log("---");

let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log("5 + 3 = " + calculator.add(5, 3));
console.log("5 - 3 = " + calculator.subtract(5, 3));

console.log("---");

function Mobile(brand, model) {
    this.brand = brand;
    this.model = model;
    this.info = function() {
        console.log(this.brand + " " + this.model);
    };
}
let phone = new Mobile("Samsung", "A50");
phone.info();

console.log("---");

class Fruit {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    display() {
        console.log("Fruit: " + this.name + " (" + this.color + ")");
    }
}
let apple = new Fruit("Apple", "Red");
apple.display();
