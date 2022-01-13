let n = 13;
console.log(typeof(n) == "number");

n = "Veter";
console.log(typeof(n) == "string");

n = new Object
console.log(n);
console.log(typeof(n) == "object");

class Dog {

    // age: int
    constructor(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }

}

n = new Dog(13);
console.log(typeof(n) == "object");
console.log(typeof(n.getAge()) == "number");