// Assignment code here
var startBtn = document.querySelector("#start");
var begin = document.querySelector(".card-start");
var selections = document.querySelector(".card");


startBtn.addEventListener("click", function() {
	begin.setAttribute("style", "display:none");
	selections.setAttribute("style", "display:block");
});

// reveals the card to generate the password.

var slider = document.getElementById("slider");
var dataLength = document.querySelector(".length-title");
function update() { dataLength.setAttribute("data-length", slider.value) };
slider.addEventListener("input", update);

// variables for updating the app for password length and displayed selection for password length

var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var complexity = "Undefined";

console.log(complexity);


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