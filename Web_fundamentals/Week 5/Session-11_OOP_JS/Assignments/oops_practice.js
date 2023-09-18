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
  getBalance() {
    return this.#balance;
  }
  setBalance(amount) {
    this.#balance = amount;
  }
}
class CheckingAccount extends BankAccount {
  deposit(amount) {
    let balance = this.getBalance();
    balance += amount;
    this.setBalance(balance);
    console.log(
      "Amount of -> " +
        amount +
        " was deposited, updated balance is -> " +
        this.getBalance()
    );
  }
  withdraw(amount) {
    let balance = this.getBalance();
    balance -= amount;
    this.setBalance(balance);
  }
}
class SavingsAccount extends BankAccount {
  deposit(amount) {
    let balance = this.getBalance();
    balance += amount;
    this.setBalance(balance);
    console.log(
      "Amount of -> " +
        amount +
        " was deposited, updated balance is -> " +
        this.getBalance()
    );
  }
  withdraw(amount) {
    let balance = this.getBalance();
    if (balance >= amount) {
      balance -= amount;
      this.setBalance(balance);
      console.log(
        "Amount of " +
          amount +
          " was withdrawn. Updated balance is " +
          this.getBalance()
      );
    } else {
      console.log("Insufficient balance");
    }
  }
}

const check = new CheckingAccount(1111, 1000, "Bruce");
const save = new SavingsAccount(2222, 100, "Tony");

check.withdraw(350); //Amount of 350 was withdrawn. Updated balance is 650
check.deposit(500); //Amount of -> 500 was deposited, updated balance is -> 1150
console.log("Current balance is -> " + check.getBalance()); //Current balance is -> 1150

save.withdraw(350); //Insufficient balance
save.deposit(500); //Amount of -> 500 was deposited, updated balance is -> 600
console.log("Current balance is -> " + save.getBalance()); //Current balance is -> 600
