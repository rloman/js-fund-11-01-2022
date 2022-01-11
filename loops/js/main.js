

// 0 of vaker uitvoeren => while loop
// Voorbeeld uit de praktijk: iemand voert een aantal knikkers in en de invoer moet geldig zijn
let kaart = 1;
while ( kaart <= 10) {
    document.write("U heeft kaart: "+kaart+"<br>");
    kaart++;
}

kaart = 45;
// 1 of vaker uitvoeren => do while loop  ()
// Voorbeeld uit de praktijk: je leest een inputfile en je controleert per leesactie of er iets in zit
do {
    document.write("U heeft kaart: "+kaart+"<br>");
    kaart++;
} while(kaart <=10);

// for loop

/*
for(init; condition; verhoging) {
    body
}
*/

/*
    Elke loop kun je afbreken met : break
    Elke volgende loop-iteratie kun je nemen met : continue
*/


for(let i = 1; i<=25 ; i++) {
    if(i == 13) {
        continue;
    }

   document.write("In de for loop heeft i de waarde: "+i+"<br>");
}

for(let i = 25; i>=0 ; i--) {
    
    document.write("In de for loop heeft i de waarde: "+i+"<br>");
    // Als we 13 hebben, hebben we het resultaat gevonden.
    if( i == 13) {
        break; // beeindigt de loop en sprint dus onder de accolade die de for loop sluit
    }
 }

 kaart = 100;

 for(; kaart < 100;kaart++) {

 }

 // ander voorbeeld is een for ever loop
 for(;;) {
     let random = Math.ceil(Math.random() * 100);
     document.write(random+", <br>");
     if(random == 13) {
        break;
    }
 }



