// Protecting the object

const person = {
  _name: "Munawar",
  _age: undefined,
  _email: "test@example.com",

  get name() {
    return this._name;
  },

  get email() {
    return this._email;
  },

  set age(newAge) {
    this._age = newAge;
  },

  getAge() {
    return this._age;
  },

  setAge(newAge) {
    this._age = newAge;
  },
};
console.log(person.name);
console.log(person.email);

person.age = 25;
console.log(person.getAge());

person.setAge(30);
console.log(person.getAge());

// javascript prototype

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
Vehicle.prototype.getDetails = function () {
  return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
  getDetails() {
    return `${super.getDetails()}, Number of Doors: ${this.numDoors}`;
  }
}
// Create instances
const vehicle = new Vehicle("Toyota", "Camry", 2022);
const car = new Car("Tesla", "Model 3", 2023, 4);

// Log details
console.log(vehicle.getDetails());
console.log(car.getDetails());
