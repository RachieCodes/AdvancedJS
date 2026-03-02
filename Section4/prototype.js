class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}`;
};

Person.prototype.birthday = function() {
    this.age++;
    return `Happy birthday! You are now ${this.age}`;
};

const alice = new Person('Alice', 30);
const bob = new Person('Bob', 25);

console.log(alice.greet());
console.log(bob.birthday())