var leeftijd; // definitie van de variable 'leeftijd'
leeftijd = 53; // initialisatie / toewijzing van een waarde aan de variable 'leeftijd'

leeftijd = leeftijd +1; // verhoog de leeftijd met 1

document.write(leeftijd); // print de inhoud van de variable leeftijd af.

// Binnen JavaScript zijn variabelen 'dynamic' en 'untyped'

var nameOfPersoon = 'Francien'; // string => aaneengesloten reeks van characters
document.write(nameOfPersoon);

var fruit = window.prompt("Wat is uw favoriete fruitsoort"); // var fruit is bedoeld als string
document.write("Uw favoriete fruitsoort is: " + fruit);

var Fruit = 33;


// namen van variabelen moeten voldoen aan:
/*
    geen spaties
    moeten beginnen met een letter of een _ of een $ (niet met een cijfer)
    Hoofdletters en kleine letters zijn verschillend. Dus case-sensitive
    de variable naam mag geen taalonderdeel zijn (dus geen keyword) (als var, for, if else ... )

*/


// variable types
 
// int zie boven, leeftijd
// String, zie boven, nameOfPersoon

// boolean

var isInsect = true;
isInsect = false;

var vergelijking = 5 > 4; // vergelijking krijgt nu de waarde true;

document.write(vergelijking);

// modulus operator (mod) ofwel soms de remainder genoemd: met de '%' operator

var minuten = 123;

var hours = Math.floor(minuten / 60);
var minutenBinnenHetUur = minuten % 60;

document.write(hours+":"+minutenBinnenHetUur);

// operator: 2x asterisk: dus '**' is machtsverheffen

document.write(2**3);

// om een ingevoerde waarde als String om te zetten naar een getal (int) passen we parseInt toe

var getalAsString = window.prompt("Wat is uw leeftijd!"); // getalAsString is nu een String
var getal = parseInt(getalAsString);

getal = getal + 1;

document.write("Uw leeftijd is nu verhoogd naar: "+getal);

// stel getal is hier: 12

getal++; // getal is nu 13

document.write(getal++); // postfix increment, er wordt geprint: 13, en dan is getal 14
// getal is nu 14
document.write(getal);

document.write(++getal); // prefix increment, eerst verhoogt ie getal en dan print ie.





