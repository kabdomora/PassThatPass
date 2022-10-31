// Assignment code here
var startBtn = document.querySelector("#start");
var begin = document.querySelector(".card-start");
var selections = document.querySelector(".card");


startBtn.addEventListener("click", function() {
	begin.setAttribute("style", "display:none");
	selections.setAttribute("style", "display:block");
});

// reveals the card to generate the password.

const slider = document.getElementById("slider");
var dataLength = document.querySelector(".length-title");
function update() { dataLength.setAttribute("data-length", slider.value) };
slider.addEventListener("input", update);

// variables for updating the app for password length and displayed selection for password length


// random character formulas. function return one character at a time using math.floor+math.random 
// (math.floor ensures a whole integer; math.random will pick the random character in the string)
// there is a way to do this pulling from UTF charset directly but this seemed more intuitive to me
// less likely to produce undesired results from pointing to the wrong subset of string characters
// within UTF charset

function ramdomizeUpper() {
	const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return uppers[Math.floor(Math.random() * uppers.length)];
}

function ramdomizeLower() {
	const lowers = "abcdefghijklmnopqrstuvwxyz";
	return lowers[Math.floor(Math.random() * lowers.length)];
}

function ramdomizeNumber() {
	const numbers = "0123456789";
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function ramdomizeSpecial() {
	const special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
	return special[Math.floor(Math.random() * special.length)];
}

const passwordEl = document.getElementById("password");
// will refer to this for the function to update displayed, generated password


var complexity = "Undefined";
// potentially use this for the stored value for the generated password

const upperSelected = document.getElementById("uppercase");
const lowerSelected = document.getElementById("lowercase");
const numberSelected = document.getElementById("numerical");
const specialSelected = document.getElementById("special");
// constants for the generator function to refer to for checkbox values 
// will be ^^ element.value or element.checked


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
	const sliderEl = +slider.value;
	const upperEl = upperSelected.checked;
	const lowerEl = lowerSelected.checked;
	const numberEl = numberSelected.checked;
	const specialEl = specialSelected.checked;
	passwordEl.innerText = generatePassword(sliderEl, upperEl, lowerEl, numberEl, specialEl);
});

// pulling checkbox input fields







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);