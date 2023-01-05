/*
Team 1
UID LAB EVALUATION 3
Amrita Alumni Website

RAJENDRAPRASAD S 
CB.EN.U4CYS21064 

NO TEMPLATE USED
*/

function validateEmail() {
    var mailformat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    var x = document.getElementById("i1").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid email address!");
    }
}

function validateText2() {
    var mailformat = (/^[a-zA-Z\s]+$/);
    var x = document.getElementById("i2").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid name!");
    }
}

function validateText3() {
    var mailformat = (/^[a-zA-Z\s]+$/);
    var x = document.getElementById("i3").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid state!");
    }
}

function validateNumber() {
    var mailformat = (/^[0-9]+$/);
    var x = document.getElementById("i4").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid number!");
    }
}

function validateText5() {
    var mailformat = (/^[a-zA-Z]+$/);
    var x = document.getElementById("i5").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid first name!");
    }
}

function validateText6() {
    var mailformat = (/^[a-zA-Z]+$/);
    var x = document.getElementById("i6").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid last name!");
    }
}