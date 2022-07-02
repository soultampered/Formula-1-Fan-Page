//Checks Contact form validity
//WIP, not functional
var inputFields = document.mainForm.getElementsByTagName('input');

for (key in inputFields) {

    var myField = inputFields[key];
    var formError = document.getElementById("formerror");

    myField.onchange = function() {
      var myPattern = this.pattern;
      var myPlaceholder = this.placeholder;
      var isValid = this.value.search(myPattern) >= 0;

      if (!(isValid)) {
        formError.innerHTML = "Please enter the correct input. " + myPlaceholder;  //is not valid
      } else {
        formError.innerHTML = ""; //is valid
      }

    }

}