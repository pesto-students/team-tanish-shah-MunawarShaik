// Inheritance
class Vehicle {
  constructor(make, model, year, color) {
    (this.make = make),
      (this.model = model),
      (this.year = year),
      (this.color = color);
  }
  drive() {
    console.log(`Driving ${this.make} {this.model}.`);
  }
}
class Car extends Vehicle {
  constructor(numSeats) {
    this.numSeats = numSeats;
  }
}
class RideShareCar extends Car {
  constructor(isAvailable) {
    this.isAvailable = isAvailable;
  }
}

//Polymorphism
class Shape {
  calculateArea() {}
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}
class Traingle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  calculateArea() {
    return (this.base * this.height) / 2;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}
const rectangleInstance = new Rectangle(4, 8);
console.log(rectangleInstance.calculateArea());
const traiangleInstance = new Traingle(6, 8);
console.log(traiangleInstance.calculateArea());
const circleInstance = new Circle(4);
console.log(circleInstance.calculateArea());

// Abstraction and encpasulation

class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;
  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }
}
class CheckingAccount extends BankAccount {
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }
  getBalance() {
    return this.#balance;
  }
}
class SavingsAccount extends BankAccount {
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (this.#balance > 0) {
      this.#balance -= amount;
    } else {
      console.log("No Funds");
    }
  }
  getBalance() {
    return this.#balance;
  }
}

const instanceCheckingAccount = new CheckingAccount();
const instanceSavingAccount = new SavingsAccount();
console.log(instanceCheckingAccount);
console.log(instanceSavingAccount);
