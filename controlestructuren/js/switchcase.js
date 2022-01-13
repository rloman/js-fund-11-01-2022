

let maand = parseInt(window.prompt("Wat is uw maandnummer (1-12 svp)?"));
let maandLengte;

switch (maand) {
    case 1: // dit wordt een fall-through genoemd
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        maandLengte = 31;
        break;
    case 2:
        maandLengte = 28;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        maandLengte = 30;
        break;
    default:
        maandLengte = -1;
        break;
}

if(maandLengte != -1) {
    document.write("Uw maand: " + maand + " heeft " + maandLengte + " dagen");
} else {
    document.write("Voer svp een geldige maandnummer in");
}

