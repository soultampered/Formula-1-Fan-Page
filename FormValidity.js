//Checks form validity -wip-


function validateName()
{
  var firstName = document.getElementById(id1);
  var lastName = document.getElementById(id1);

  if (firstName.validity.valueMissing, lastName.validity.valueMissing){    //if there is no data in the form
  
    input.setCustomValidtiy("Please enter your name");
    input.reportValidtiy();
  }

  else if (firstName.value.length > minlength, lastName.value.length > minlength) {  //if the text field is less than 2 character
    input.setCustomValidtiy("Names must be a minimum 2 characters");
    input.reportValidtiy();
  }

  else  {
    input.setCustomValidtiy("");
    input.reportValidtiy();
  }

}


// function validateGuests(){


// }
