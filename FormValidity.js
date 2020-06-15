//Checks Contact form validity

var inputFields = document.mainForm.getElementsByTagName('input');

for (key in inputFields) {

    var myField = inputFields[key];
    var formError = document.getElementById("formerror");

    myField.onchange = function() {
      var myPattern = this.pattern;
      var myPlaceholder = this.placeholder;
      var isValid = this.value.search(myPattern) >= 0;

      if (!(isValid)) {
        formError.innerHTML = "Input does not match expected pattern. " + myPlaceholder;  //is not valid
      } else {
        formError.innerHTML = ""; //is valid
      }

    }

}


// // Gives the user a hint for how to fill out their name in the name field
// document.mainForm.myname.onfocus=function() {
//     document.getElementById("mynamehint").innerHTML = "Enter your last name, then first";
// }

// document.mainForm.myname.onblur=function() {
//     document.getElementById("mynamehint").innerHTML = "";
// } //Name hint


// // Checks if there is a date of birth filled out
// document.mainForm.date.onchange=function()  {
//   var da te = document.mainForm.date.value;

//   if (date==="") {
//     document.getElementById("dateError").innerHTML = "You must enter your birthdate";
//   }
// } //Validation Error - date




// //Checks if there is an email address, and also if the email address is in a valid format
// document.mainForm.email.onblur=function()  {
//   var noEmail = document.mainForm.email.value;
//   var emailError = document.getElementById('formerror');

//   if (noEmail.indexOf("@") && noEmail.indexOf(".com") === -1) {
//     emailError.innerHTML = "Invalid Email format!";
  //   } else if (noEmail === "") {
  //     emailError.innerHTML = "Email Address is required!";
  //   } else {

//     emailError.innerHTML = "";
//   }
// }