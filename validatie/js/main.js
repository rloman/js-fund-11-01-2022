
let re = /\d{4}\s?[A-Z]{2}/;

function validateForm() {

    let postcode = data.postcode.value;
    let messages = "";

    console.error(data.password.value);

    let resultValidation = re.test(postcode);
    if(resultValidation == false) {
        messages += "U dient een geldige postcode (4 cijfers en dan 2 letters) in te voeren!\n";
    }

    if(data.address.value.trim() == "") {
        messages += "U dient een geldig huisadres in te voeren";
    }

    alert("password is readable!!!:"+data.password.value);

    if(messages != "") {
        alert(messages);

        return false;
    } else {
        return true;
    }
}
