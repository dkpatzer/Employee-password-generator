// Assignment Code
// Define a function: generatePassword
// inside the function declare and intitate variables to include:
//    1. Length of password between 8 and 128 characters
//    2.define the characters to be used in the password-upper and lower case letters, numbers, and special characters
//    3.an empty string to store the generated password

// User is prompted to select lenth and then which of the three possible variables for 
// to include in the password

// A loop is created to generate a random character from the possible characters chosen
// and to append it onto the password string until the string reaches the desired length

// Return the generated password

// Call the generatePassword password function when the generatePassword password button is clicked and display it on the screen


var generateBtn = document.querySelector("#generate");
function generatePassword() {
  function pickPasswordAttributes() {
   var length = parseInt(prompt('Password Length'));
   if(length >= 8 && length <= 128) {
    console.log("Password must be between 8 and 128 characters");
    return null
  }
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
