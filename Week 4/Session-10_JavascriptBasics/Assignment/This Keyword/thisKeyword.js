class Person {
  constructor(name, age, gender, nationality) {
    (this.name = name),
      (this.age = age),
      (this.gender = gender),
      (this.nationality = nationality);
  }
  introduce() {
    return `My name is ${this.name},Iam ${this.age} years old,Iam ${this.gender},and Iam ${this.nationality}.`;
  }
}

class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }
  study() {
    return console.log(this.introduce() + " Iam studying " + this.subject);
  }
}
const Person1 = new Person("John", 25, "male", "American");
const Person2 = new Person("Munawar", 26, "male", "Indian");
const Person3 = new Person("Jane", 30, "female", "Canadian");

console.log(Person1.introduce());
console.log(Person2.introduce());
console.log(Person3.introduce());
const student1 = new Student(
  "Sarah",
  25,
  "female",
  "indian",
  "Computer Science"
);
student1.study();
