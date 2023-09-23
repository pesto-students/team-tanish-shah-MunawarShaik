class Calculator {
  add(num1, num2) {
    return console.log(num1 + num2);
  }
  subtract(num1, num2) {
    return console.log(num1 - num2);
  }
  multiply(num1, num2) {
    return console.log(num1 * num2);
  }
  divide(num1, num2) {
    return console.log(num1 / num2);
  }
}

class ScientificCalculator extends Calculator {
  square(num1) {
    return console.log(num1 * 2);
  }
  cube(num1) {
    return console.log(num1 ** 3);
  }
  power(num1, num2) {
    return console.log(num1 ** num2);
  }
}

const instance1 = new ScientificCalculator(10, 5);

// console.log(instance1.add())

instance1.add.call(instance1, 10, 5);
instance1.subtract.apply(instance1, [10, 5]);
const multiplyByTwo = instance1.prototype.multiply.bind(
  ScientificCalculator,
  2
);

const powerOfThree = ScientificCalculator.prototype.power.bind(
  ScientificCalculator,
  3
);

const result = multiplyByTwo(5);
console.log(result); // Output: 10

const resultPower = powerOfThree(2);
console.log(resultPower); //Output: 8
