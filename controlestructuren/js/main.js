// condities

let leeftijd = parseInt(window.prompt("Wat is uw leeftijd?"));

// && ::= and
// || ::= or
// ! ::= not (niet)
// == ::= gelijk aan 
// != ::= is niet gelijk aan is dus gelijk aan: !(a == b)

let isMale = false;
isMale = !isMale; // true

let personName = window.prompt("Wat is uw naam?");

if (personName == "Mieke" || personName == "Raymond") {
    document.write("Hello " + personName);
}
// } else if (personName == "Raymond") {
//     document.write("Hello " + personName);
// }
else {
    document.write("U staat niet in de lijst.");
}




