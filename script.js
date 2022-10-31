// Assignment code here
var startBtn = document.querySelector("#start");
var begin = document.querySelector(".card-start");
var selections = document.querySelector(".card");


startBtn.addEventListener("click", function() {
	begin.setAttribute("style", "display:none");
	selections.setAttribute("style", "display:block");
});

// reveals the card to generate the password.



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);