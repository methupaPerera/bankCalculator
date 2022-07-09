function displayAbout() {
    document.getElementById("content").style.display = "none";
    document.getElementById("about").style.display = "block";
}

function reset() {
    document.getElementById("loan").value = "";
    document.getElementById("time").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("result").innerHTML = "...";
    
    document.getElementById("loan-i").value = "";
    document.getElementById("time-i").value = "";
    document.getElementById("rate-i").value = "";
    document.getElementById("result-i").innerHTML = "...";
}

function db() {
    let loan = parseFloat(document.getElementById("loan").value);
    let time = parseFloat(document.getElementById("time").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let monthlyValue = loan/time;
    let x = time+1;
    let y = time/2;
    let monthlyUnits = x*y;
    let unitCharge = monthlyValue*rate/100;
    let allCharge = monthlyUnits*unitCharge;
    let a = loan+allCharge;
    let result = a/time;
    document.getElementById("result").innerHTML = "&nbsp;" + result.toFixed(2);
}

function ioi() {

    let initialRate = document.getElementById("rate-i").value;
    let loan = document.getElementById("loan-i").value;
    let time = document.getElementById("time-i").value;
    let rate = initialRate/100;
    let total = loan;

    for (let i = 0; i < time; i++) {
        total = total*((rate*100)+100)/100;
    }
    document.getElementById("result-i").innerHTML = total.toFixed(2);
}