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


const upperSelected = document.getElementById("uppercase");
const lowerSelected = document.getElementById("lowercase");
const numberSelected = document.getElementById("numerical");
const specialSelected = document.getElementById("special");

const upperEl = upperSelected.checked;
const lowerEl = lowerSelected.checked;
const numberEl = numberSelected.checked;
const specialEl = specialSelected.checked;


console.log(upperEl);
console.log(lowerEl);
console.log(numberEl);
console.log(specialEl);


const passwordEl = document.getElementById("password");


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


// console.log(lowers);
// console.log(numbers);
// console.log(special);






// will refer to this for the function to update displayed, generated password




// constants for the generator function to refer to for checkbox values 
// will be ^^ element.value or element.checked


// Get references to the #generate element





// var generateBtn = document.querySelector("#generate");
// var selections = document.querySelectorAll("input[type='checkbox']");

// generateBtn.addEventListener("click", function() {
// 	const sliderEl = +slider.value;
// 	const upperEl = upperSelected.checked;
// 	const lowerEl = lowerSelected.checked;
// 	const numberEl = numberSelected.checked;
// 	const specialEl = specialSelected.checked;
// 	passwordEl.innerText = writePassword(sliderEl, upperEl, lowerEl, numberEl, specialEl);
// });





//this is an event listener only it will not generate the password





// let generatedPassword = false;

// function generatePassword(sliderEl, randomizeUpper, randomizeLower, randomizeNumber, randomizeSpecial) {
// 	const checkSelected = randomizeUpper + randomizeLower + randomizeNumber + randomizeSpecial;
// 	const checkArray = [{ randomizeUpper }, { randomizeLower }, { randomizeNumber }, { randomizeSpecial }].filter(item => Object.values(item)[0]);
// 	if (checkSelected === 0) {
// 		return "";
// 	}
// 	for (let i = 0; i < sliderEl; i++) {
// 		checkArray.forEach(type => {
// 			const generator = Object.keys(type)[0];
// 			generatedPassword += generate[generator]();
// 		});
// 	}
// 	return generatedPassword.slice(0, length)
// 	.split('').sort(() => Math.random() - 0.5)
// 	.join('');
// 	}

	


	



	
	// potentially use this for the stored value for the generated password




// function selectedString() {
// 	if(upperSelected && lowerSelected && numberSelected && specialSelected) {
// 		complexity = "yes all are checked"
// 	} else {
// 		complexity = "no"
// 	}};

// 	console.log(upperSelected.checked);




// Write password to the #password input



// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }





// Add event listener to generate button


// generateBtn.addEventListener("click", writePassword);






// var yesUpper = " 1";
// var yesLower = " 2";
// var yesNumber = " 3";
// var yesSpecial = " 4";

// var complexity = complexfunction();
// var selections = document.getElementById("selectionsup")


// upperSelected.addEventListener('change',  )

// function complexfunction() {
// 	if (upperSelected.checked) {
// 		console.log("Uppers Selected")
// 	} else {
// 		console.log("no uppers")
// 	}
// }

// upperSelected.addEventListener('change', function() {
// 	if (this.checked) {
// 		console.log("Uppers Selected");
// 		yesUpper = uppers;
// 		console.log(yesUpper)
// 	} else {
// 		console.log("no uppers")
// 	}
// });

// lowerSelected.addEventListener('change', function() {
// 	if (this.checked) {
// 		console.log("Lowers Selected");
// 		yesLower = lowers;
// 	} else {
// 		console.log("no lowers")
// 	}
// });

// numberSelected.addEventListener('change', function() {
// 	if (this.checked) {
// 		console.log("Numbers Selected");
// 		yesNumber = numbers;
// 	} else {
// 		console.log("no numbers")
// 	}
// });

// specialSelected.addEventListener('change', function() {
// 	if (this.checked) {
// 		console.log("Special Selected");
// 		yesSpecial = special;
// 	} else {
// 		console.log("no special")
// 	}
// });