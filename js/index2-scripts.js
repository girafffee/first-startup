function weight() {
    let pounds = parseInt(document.getElementById("kilo").value) * 2.205;
    let hundred = parseInt(document.getElementById("kilo").value) / 100;

    document.getElementById("pounds").innerHTML = pounds;
    document.getElementById("hundred").innerHTML = hundred;
}

function salary() {
    let hours = parseFloat(document.getElementById("hour").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let tax = parseFloat(document.getElementById("tax").value);
    let salary = hours * rate - hours * tax;
    if((hours > 0) && (rate > 0) && (tax > 0)) {
        document.getElementById("salary").innerHTML = salary + "$";
    }else
        document.getElementById("salary").innerHTML = "Enter all values";
}