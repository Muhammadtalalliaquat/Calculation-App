inputEl = document.querySelectorAll("input");
h2El = document.querySelectorAll("h2")
h3El = document.querySelectorAll("h3");
function addButn() {

    let retValue = inputEl[0].value;

    if(isNaN(retValue)) {
        h2El[0].innerHTML = "Count must be a number";
        h2El[0].className += " border-red";

    }
    else{
        h3El[0].innerHTML = Number(h3El[0].innerHTML) + Number(retValue);
        h2El[0].innerHTML = ""; 
        h2El[0].className = "";

    }
    
}
addButn();

function subtVAlue() {
    let retValue = inputEl[0].value;

    if(isNaN(retValue)) {
        h2El[0].innerHTML = "Count must be a number";
    }
    else{
        h3El[0].innerHTML = Number(h3El[0].innerHTML) - Number(retValue);
        h2El[0].innerHTML = ""; 
    }
}

subtVAlue();

function multiplyValue() {
    let retValue = inputEl[0].value;

    if(isNaN(retValue)) {
        h2El[0].innerHTML = "Count must be a number";
    }
    else{
        h3El[0].innerHTML = Number(h3El[0].innerHTML) * Number(retValue);
        h2El[0].innerHTML = ""; 
    }
}

multiplyValue();


function divideValue() {
    let retValue = inputEl[0].value;

    if(isNaN(retValue)) {
        h2El[0].innerHTML = "Count must be a number";
    }
    else{
        h3El[0].innerHTML = Number(h3El[0].innerHTML) / Number(retValue);
        h2El[0].innerHTML = ""; 
    }
}

divideValue();

function claerValue() {

    retValue = inputEl[0].value = "";
    if(isNaN(retValue)) {
        h2El[0].innerHTML = "";
    }
    else{
        h3El[0].innerHTML = Number(h3El[0].innerHTML) + Number(retValue);
        h3El[0].innerHTML = "0";
        h2El[0].innerHTML = ""; 
        h2El[0].className = "";
    }
       retValue = inputEl[0].value = "1";
    
}
claerValue();