// Add input variable to js
var myForm = document.myform;
var fullname = myForm.fullname;
var email = myForm.email;
var account = myForm.account;
var postcode = myForm.postcode;
var password = myForm.password;
var repassword = myForm.repassword;
// Add input format notes variable to js 
var Textfullname = document.getElementById('errorfullname');
var Textemail = document.getElementById('errorEmail');
var Textaccount = document.getElementById('errorAccount');
var Textpostcode = document.getElementById('errorPostcode');
var Textpassword = document.getElementById('errorPassword');
var Textrepassword = document.getElementById('errorRepassword');

// create button variable for submit button
var button = document.getElementById("register");

// create onclick event to check the input 
button.addEventListener("click", function (event) {
    var fullnameValue = document.getElementById("fullname").value;
    var emailValue = document.getElementById("email").value;
    var accountValue = document.getElementById("account").value;
    var postcodeValue = document.getElementById("postcode").value;
    var passwordValue = document.getElementById("password").value;
    var repasswordValue = document.getElementById("repassword").value;
    var regExp = /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/; // this is the formate for postcode 
    var regExp1 = /^........+$/
    event.preventDefault(); //prevent the submit by event 

    // check if the input is empty
    if (fullnameValue == "") {

        window.alert("Please enter your fullname.");


    };

    //check if email has @
    if (emailValue.indexOf("@", 0) < 0) {

        window.alert("Please enter your email address.");


    };

    if (accountValue == "") {

        window.alert("Please enter account.");


    };
    //check if the postcode is in format of T0T0T0
    if (!regExp.test(postcodeValue)) {

        window.alert("Please enter a valid postcode.");


    };

    if (!regExp1.test(passwordValue)) {

        window.alert("Please enter at least 8 characters for passord.");


    };

    if (repasswordValue == "") {

        window.alert("Please enter your password again.");

    };


});

//create a onclick event to comfirm submit

var confirmBeforeSent = function (event) {


    event.preventDefault();

    var tfs = confirm("Do you really want to submit?");
    if (tfs === true) {
        document.myform.submit();
        console.log('Form is submit.');
    };


};


button.addEventListener("click", confirmBeforeSent); // on click function to comfirm submit

// create a onclick event to comfirm reset

var button1 = document.getElementById("back"); // add reset button to js

var confirmBeforeReset = function (event) {
    event.preventDefault();
    var tf = confirm("Do you really want to do this?");
    if (tf) {
        document.myform.reset();
        console.log('Form is reset.');
    }
}

button1.addEventListener("click", confirmBeforeReset);



Textemail.style.display = "none";
Textaccount.style.display = "none";
Textpostcode.style.display = "none";
Textpassword.style.display = "none";
Textrepassword.style.display = "none";
Textemail.style.display = "none";
// Add onfoucs function to input and hide when click another input
fullname.addEventListener("focus", function (event) {
    Textemail.style.display = "none";
    Textaccount.style.display = "none";
    Textpostcode.style.display = "none";
    Textpassword.style.display = "none";
    Textrepassword.style.display = "none";
    Textfullname.style.display = "block";

});
email.addEventListener("focus", function (event) {
    Textfullname.style.display = "none";
    Textaccount.style.display = "none";
    Textpostcode.style.display = "none";
    Textpassword.style.display = "none";
    Textrepassword.style.display = "none";
    Textemail.style.display = "block";
});
account.addEventListener("focus", function (event) {
    Textfullname.style.display = "none";
    Textemail.style.display = "none";
    Textpostcode.style.display = "none";
    Textpassword.style.display = "none";
    Textrepassword.style.display = "none";
    Textaccount.style.display = "block";
});
postcode.addEventListener("focus", function (event) {
    Textfullname.style.display = "none";
    Textemail.style.display = "none";
    Textaccount.style.display = "none";
    Textpassword.style.display = "none";
    Textrepassword.style.display = "none";
    Textpostcode.style.display = "block"
});
password.addEventListener("focus", function (event) {
    Textfullname.style.display = "none";
    Textemail.style.display = "none";
    Textaccount.style.display = "none";
    Textpostcode.style.display = "none";
    Textrepassword.style.display = "none";
    Textpassword.style.display = "block";
});
repassword.addEventListener("focus", function (event) {
    Textfullname.style.display = "none";
    Textemail.style.display = "none";
    Textaccount.style.display = "none";
    Textpostcode.style.display = "none";
    Textpassword.style.display = "none";
    Textrepassword.style.display = "block";
});