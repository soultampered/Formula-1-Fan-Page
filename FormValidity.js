//Checks form validity




  document.mainForm.myname.onfocus=function() {
    document.getElementById("mynamehint").innerHTML = "Enter your last name, then first";
  }

  document.mainForm.myname.onblur=function() {
    document.getElementById("mynamehint").innerHTML = "";
 
  } //Name hint








document.mainForm.email.onchange=function()  {
  if (document.mainForm.email.value==="") {
    document.getElementById("formerror").innerHTML = "Email address is required";
  }

document.mainForm.email.onchange=function()  {
  var noName = document.mainForm.email.value;

  if (noName.indexOf("@")) {
  document.getElementById("formerror").innerHTML = "Email address format invalid";
  }
} //Validation Error - Email Address
