var currency = "USD";
var lastPrice = 0;
var lastPulseRate, currentPulseRate, emailsubmitted = 0;

window.onload = function() {
    init();
    resetPulse();
    emailPopupCheck();
    document.getElementById("submitEmail").addEventListener("click", submitEmailform); 
}

function init(){
    fetchPrice();
}

$(".currency-tag").on('click', function(){

    currency = $(this).attr('data-currency');
    fetchPrice();

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

});

function digitRound(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function ARSRound(value){

    if(isNaN(value) || value < 0){
        fetchPrice("?_=" + new Date().getTime());
    }
    else{
    
    milDigit = parseInt(value/1000000);
    milDecimalDigit = digitRound((value-(milDigit*1000000))/1000,0);
    returnValue = milDigit + "," + milDecimalDigit + "<small class=\"smallarsm\">m</small>";
    return returnValue;

    }
}

function thousandComma(value){

    if(isNaN(value) || value < 0){
        fetchPrice("?_=" + new Date().getTime());
    }

    else{

    thousandDigit = parseInt(value/1000);
    thousandDecimalDigit = value.toString().substring(thousandDigit.toString().length);
    returnValue = thousandDigit + "," + thousandDecimalDigit;
    return returnValue;

    }
}

function BRLperiod(value){
    
    if(isNaN(value) || value < 0){
        fetchPrice("?_=" + new Date().getTime());
    }

    else{
    
    thousandDigit = parseInt(value/1000);
    thousandDecimalDigit = value - (thousandDigit*1000);
    returnValue = thousandDigit + "." + thousandDecimalDigit;
    return returnValue;

    }
}

function representINR(value) {

    value=value.toString();
    var lastThree = value.substring(value.length-3);
    var otherNumbers = value.substring(0,value.length-3);
    if(otherNumbers != '') 
        lastThree = ',' + "<small class='counterColor inrClass'>" + lastThree + "</small>";
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    return res;
}

function changeColor(movement){

    var current = document.getElementsByClassName("counterColor");

    for(i = 0; i<current.length; i++) {
        current[i].className = current[i].className.replace(" greentag", "");
        current[i].className = current[i].className.replace(" redtag", "");
    
        if(movement == 1) {
            current[i].className += " greentag";
        }
        else {
            current[i].className += " redtag";
        }
    }
    
}

function fetchPrice(cachebuster){
    if(cachebuster) {
        localcachebuster = cachebuster
    }
    else {
        localcachebuster = "?_=" + new Date().getTime();
    }
    document.getElementById("currency-sym").innerHTML = "BTC" + currency;
    switch(currency) {
        case "USD":
            fetchPriceUSD(localcachebuster);
            break;
        case "EUR":
            fetchPriceEUR(localcachebuster);
            break;
        case "ARS":
            fetchPriceARS(localcachebuster);
            break;
        case "BRL":
            fetchPriceBRL(localcachebuster);
            break;
        case "INR":
            fetchPriceINR(localcachebuster);
            break;
        case "JPY":
            fetchPriceJPY(localcachebuster);
            break;
        case "CNY":
            fetchPriceCNY(localcachebuster);
            break;
        case "RUB":
            fetchPriceRUB(localcachebuster);
            break;
            
    }
}


function fetchPriceUSD(cachebuster){

    $.ajax({
        url: "https://api.bitcoinfullscreen.com/price/USD" + cachebuster,
        success: function(result){
            document.getElementById("price").innerHTML = thousandComma(result.value);
            document.getElementById("tfdiff").innerHTML = result.tfdiff + "<small class=\"smallarsm\">%</small>";
            changeColor(result.movement);
        }
    })

}

function fetchPriceEUR(cachebuster){
    $.ajax({
        url: "https://api.bitcoinfullscreen.com/price/EUR" + cachebuster,
        success: function(result){
            document.getElementById("price").innerHTML = thousandComma(result.value);
            document.getElementById("tfdiff").innerHTML = result.tfdiff + "<small class=\"smallarsm\">%</small>";
            changeColor(result.movement);
        }
    })
}

function fetchPriceARS(cachebuster){
    $.ajax({
        url: "https://api.bitcoinfullscreen.com/price/ARS" + cachebuster,
        success: function(result){
            document.getElementById("price").innerHTML = ARSRound(result.value);
            document.getElementById("tfdiff").innerHTML = result.tfdiff + "<small class=\"smallarsm\">%</small>";
            changeColor(result.movement);
        }
    })
}

function fetchPriceBRL(cachebuster){
    $.ajax({
        url: "https://api.bitcoinfullscreen.com/price/BRL" + cachebuster,
        success: function(result){
            document.getElementById("price").innerHTML = BRLperiod(result.value);
            document.getElementById("tfdiff").innerHTML = result.tfdiff + "<small class=\"smallarsm\">%</small>";
            changeColor(result.movement);
        }
    })
}


function fetchPriceINR(cachebuster){
    $.ajax({
        url: "https://api.bitcoinfullscreen.com/price/INR" + cachebuster,
        success: function(result){
            document.getElementById("price").innerHTML = representINR(result.value);
            document.getElementById("tfdiff").innerHTML = result.tfdiff + "<small class=\"smallarsm\">%</small>";
            changeColor(result.movement);
        }
    })
}


function fetchPriceJPY(cachebuster){
    $.ajax({
        url: "https://api.bitcoinfullscreen.com/price/JPY" + cachebuster,
        success: function(result){
            document.getElementById("price").innerHTML = ARSRound(result.value);
            document.getElementById("tfdiff").innerHTML = result.tfdiff + "<small class=\"smallarsm\">%</small>";
            changeColor(result.movement);
        }
    })
}


function fetchPriceCNY(cachebuster){
    $.ajax({
        url: "https://api.bitcoinfullscreen.com/price/CNY" + cachebuster,
        success: function(result){
            document.getElementById("price").innerHTML = thousandComma(result.value);
            document.getElementById("tfdiff").innerHTML = result.tfdiff + "<small class=\"smallarsm\">%</small>";
            changeColor(result.movement);
        }
    })
}


function fetchPriceRUB(cachebuster){
    $.ajax({
        url: "https://api.bitcoinfullscreen.com/price/RUB" + cachebuster,
        success: function(result){
            document.getElementById("price").innerHTML = thousandComma(result.value);
            document.getElementById("tfdiff").innerHTML = result.tfdiff + "<small class=\"smallarsm\">%</small>";
            changeColor(result.movement);
        }
    })
}

function resetPulse(){

// @Rod - Change below this line for setting the appropriate level of pulse.

    $.ajax({
        url: "https://api.bitcoinfullscreen.com/volume/diff" + "?_=" + new Date().getTime(),
        success: function(result){
            console.log(result.diffmeanandcurrent);

            if(result.diffmeanandcurrent <= 4){
                currentPulseRate = 'pulseone'
            }
            else if(result.diffmeanandcurrent <= 9){
                currentPulseRate = 'pulsetwo'
            }
            else if(result.diffmeanandcurrent <= 24){
                currentPulseRate = 'pulsethree'
            }
            else if(result.diffmeanandcurrent <= 50){
                currentPulseRate = 'pulsefour'
            }
            else if(result.diffmeanandcurrent <= 100){
                currentPulseRate = 'pulsefive'
            }

            applyPulse();

        }
    })
}

function applyPulse(){
    if(lastPulseRate != null){
        document.getElementById(lastPulseRate).media = 'none';
    }
    document.getElementById(currentPulseRate).media = '';
    lastPulseRate = currentPulseRate;
}

setInterval(() => {
    init();
}, 30000);

setInterval(() => {
    resetPulse();
}, 60000);

setInterval(() => {
    checkemailsubmission();
}, 3600000);

function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

function setCookie(name,value) {
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + (365*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function emailPopupCheck() {
    if(getCookieValue('emailSubmitted') == 1) {
        emailsubmitted = 1;
        $("#exampleModal").modal("hide");
    }
    else {
        $('#exampleModal').modal({backdrop: 'static', keyboard: false})
        $("#exampleModal").modal("show");
        setCookie('emailSubmitted', 0);
    }
}

function checkemailsubmission(){
    if(emailsubmitted != 1) {
        $("#exampleModal").modal("show");
    } 
}

function submitEmailform(){
    email = document.getElementById("emailValue").value;
    if(validateEmail(email)) {
        saveEmail(email);
    }
    else {
        alert('Incorrect Email');
    }


}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function saveEmail(email) {

$.ajax({
  type: "POST",
  url: "https://api.bitcoinfullscreen.com/email",
  data: {'email': email},
  success: postEmailSave,
});

}

function postEmailSave(){
$("#exampleModal").modal("hide");
setCookie('emailSubmitted', 1);
}