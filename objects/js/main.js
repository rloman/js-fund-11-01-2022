



// Maak een object, dus een niet voorgedefinieerd type
let person = new Object();

person.firstName = "John";
person.lastName = "Smith";
person.age = 34;
person["zijn vrouw haar naam"] = "Linda";

document.write(person.firstName);
document.write(person["zijn vrouw haar naam"]);

for(let key in person) { // hier staat in ipv of bij onderdeel 'arrays'
    document.write(person[key]+"<br>");
}


class Dog {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

}

let wodan = new Dog("Wodan");

document.write(wodan.getName()+"<br>");
