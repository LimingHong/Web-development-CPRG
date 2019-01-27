// Add input to js
var myForm = document.myform;
var fullname = myForm.fullname;
var email = myForm.email;
var account = myForm.account;
var postcode = myForm.postcode;
var password = myForm.password;
var repassword = myForm.repassword;
// Add input format notes to js 
var Textfullname = document.getElementById('errorfullname');
var Textemail = document.getElementById('errorEmail');
var Textaccount = document.getElementById('errorAccount');
var Textpostcode = document.getElementById('errorPostcode');
var Textpassword = document.getElementById('errorPassword');
var Textrepassword = document.getElementById('errorRepassword');

// Add error notes to js
var errorfullname = document.getElementById('errorfullname1');
var erroremail = document.getElementById('errorEmail1');
var erroraccount = document.getElementById('errorAccount1');
var errorpostcode = document.getElementById('errorPostcode1');
var errorpassword = document.getElementById('errorPassword1');
var errorrepassword = document.getElementById('errorRepassword1');

//Add input confirmation notes to js
var fullnameValue = document.getElementById("fullname").value;
var emailValue = document.myform.fullname.value;
var accountValue = document.myform.account.value;
var postcodeValue = document.myform.postcode.value;
var passwordValue = document.myform.password.value;
var repasswordValue = document.myform.repassword.value;
console.log(fullnameValue);

var regExp = /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/;

if (regExp.test(postcodeValue)) {
    alert("Invalid postcode");
}



            function validate() {
                if (!fullnameValue) {
                    // event.preventDefault();
                    errorfullname.style.display = "block";
                    return false;
                };

                if (!emailValue) {
                    // event.preventDefault();
                    erroremail.style.display = "block";
                    return false;
                };


                if (!accountValue) {
                    // event.preventDefault();
                    erroraccount.style.display = "block";
                    return false;
                };


                if (!passwordValue) {
                    // event.preventDefault();
                    errorpassword.style.display = "block";
                    return false;
                };

                if (!repasswordValue | repasswordValue !== passwordValue) {
                    // event.preventDefault();
                    errorrepassword.style.display = "block";
                    return false;
                };
                return true;
            }

            // formate the postcode



            // var button = document.getElementById("register"); //Add submit button id to js 


            var button = document.getElementById("register");
            // button.addEventListener("click", function (event) {
            
            //             errorfullname.style.display = "none";
            //             erroremail.style.display = "none";
            //             erroraccount.style.display = "none";
            //             errorpassword.style.display = "none";
            //             errorrepassword.style.display = "none";
            var confirmBeforeSent = function (event) {


                event.preventDefault();
                var tfs = confirm("Do you really want to submit?");
                if (tfs === true) {
                    document.myform.submit();
                    console.log('Form is submit.');


                }
            }


            button.addEventListener("click", confirmBeforeSent); // on click function to comfirm submit


            var button1 = document.getElementById("back"); // add reset button to js

            var confirmBeforeReset = function (event) {
                event.preventDefault();
                var tf = confirm("Do you really want to do this?");
                if (tf) {
                    document.myform.reset();
                    console.log('Form is reset.');
                }

            }


            button1.addEventListener("click", confirmBeforeReset); // on click function to comfirm reset


            console.log(myForm);
            console.log(Textfullname);


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