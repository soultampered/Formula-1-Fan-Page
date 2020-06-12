//Checks Contact form validity


// Gives the user a hint for how to fill out their name in the name field
document.mainForm.myname.onfocus=function() {
    document.getElementById("mynamehint").innerHTML = "Enter your last name, then first";
}

document.mainForm.myname.onblur=function() {
    document.getElementById("mynamehint").innerHTML = "";
} //Name hint




// Checks if there is a date of birth filled out
document.mainForm.date.onchange=function()  {
  var date = document.mainForm.date.value;

  if (date==="") {
    document.getElementById("dateError").innerHTML = "You must enter your birthdate";
  }
} //Validation Error - date




//Checks if there is an email address, and also if the email address is in a valid format
document.mainForm.email.onchange=function()  {
  var noName = document.mainForm.email.value;

  if (noName.indexOf("@")) {
  document.getElementById("emailrror").innerHTML = "Email address format invalid";
  }
}

document.mainForm.email.onblur=function()  {
  var noName = document.mainForm.email.value;

  if (noName === "") {
    document.getElementById("emailError").innerHTML = "Email address is required";
  }
} //Validation Error - Email Address