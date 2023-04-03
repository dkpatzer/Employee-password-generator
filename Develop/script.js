
/* Assignment Code */

/* assign a button with id "generate to the variable "generateBtn"*/
/*Define a function: generatePassword*/


var generateBtn = document.querySelector("#generate");
function generatePassword() {
  
}
/* write function to be called when "Generate Password Button is clicked"*/
/*input field with id "pasword" password is assigned to the value property*/
/* Write password to the #password input*/
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/*generate password function includes variables to prompt user to enter chosen length and variables to confirm chosen characters*/


function generatePassword() {
  var length = prompt("Enter password length (8-128)");
  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

    /*Validate user input*/
  if (length < 8 || length > 128) {
      alert("Password length must be between 8 and 128 characters");
      return "";
  }

  if (!lowercase && !uppercase && !numeric && !special) {
      alert("At least one character type must be selected");
      return "";
  }
  /* create an array of character codes based on selected character types*/
  /*create a loop selecting random characters from the array until it gets to the last number in the lenghth chosen*/
  var charCodes = [];
  if (lowercase) {
    for (var i = 97; i <= 122; i++) {
      charCodes.push(i);
    }
  }
  if (uppercase) {
    for (var i = 65; i <= 90; i++) {
      charCodes.push(i);
    }
  }

  if (special) {
    var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    for (var i = 0; i < specialChars.length; i++) {
      charCodes.push(specialChars.charCodeAt(i));
    }
  }
 
  /* random password is generated using math.random() method*/

  var passwordArr = [];
  for (var i = 0; i < length; i++) {
    var randomCharCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordArr.push(String.fromCharCode(randomCharCode));
  }
/*random password is returned to empty string*/

  var password = passwordArr.join("");
  return password;
}

/* Add event listener to generate button which calls the writePassword function when the button is clicked*/
generateBtn.addEventListener("click", writePassword);