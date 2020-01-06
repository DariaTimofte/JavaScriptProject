var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");

alert(rangeslider.value);
rangeslider.oninput = function() {
  alert(this.value);
}

function validateUsername(username) {
    var regex = /^[a-z0-9_-]{3,16}$/gim;

    if (username.match(regex) && username.length <= 16)
        return true;
    return false;
}

function validateEmail(email) {
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,3}$/gim;
    
    if (email.match(regex) && email.length <= 25) 
            return true;
    return false;
}

function validatePassword(password) {
    var validate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@$%^_&*]).{6,20}/g;

    if (password.match(validate) && password.length < 20) 
            return true;
    return false;
}

function validateGender() {
    var gender = document.getElementById("genderDropdown");
    if (gender.value === "") {
        //If the "Please Select" option is selected display error.
        alert("Please select an option!");
        return false;
    }
    return true;
}

function validateCheckBox(){
    var check = window.myForm.checkbox.checked;
    if (check == false) {
        alert("Please agree with the terms");
        return false;
    }
    return true;
}

function checkRadioButton(){
    var radios = document.getElementsByName("yesno");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) alert("Must check some option!");
    return formValid;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function validateInputs() {
    var username = $("#inputUsername").val();
    var email = $("#inputMail").val();
    var password = $("#passInput").val();
    var gender = $("#genderDropdown").val();
    var checkbox = $("#check").val();
    var radioBtn = $("#radio").val();

    if (validateEmail(email) && validatePassword(password) && validateUsername(username) && validateGender(gender) && checkRadioButton() && validateCheckBox()) {
        setCookie("username", username, 365);
        setCookie("email", email, 365);
        setCookie("password", password, 365);
        setCookie("gender", gender, 365);
        setCookie("checkbox", checkbox, 365);
        setCookie("radio", radio, 365);
        $(".formContainer").css("display", "none");
        window.location.replace("market.html");
    } else 
        alert("Please login");
        console.log(window.myForm.yesno.checked)
}

$("#inputSubmit").on("click", validateInputs);


