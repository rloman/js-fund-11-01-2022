// deze var is global scoped, dus overal zichtbaar
var BTW_PERCENTAGE = 21;

function geefVoornaam() {

    return "Aart";
}

function kwadraat(x) {

    var result = x ** 2;
    result += 2;
    
    return result;

    // nu is result opgeruimd
}

function geefVermenigvuldiging(x, y) {

    return x * y;
}

function cube(number) {

    return number ** 3;
}


// vergeten te returnen
function badmuts(x) {
    var result = x*3;

    // return result;

}

