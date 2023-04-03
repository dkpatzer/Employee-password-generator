Description:
This is a password generator application  built to provide a secure password for an employee with access to sensitive information. It generates a random passord based on the user's input. It has been developed using HTML, CSS, and Javascript.

Instructions for Use
1. Click the "Generate Password" button.
2. Enter the desired length of the password.
3. Confirm which character types to use in the password. Choices include uppercase, lowercase, numeric, and/or special characters in the prompts.
4. The password generated will display in the input field field with the id password

Discussion of JavaScript code used:

generatePassword() declares a function that ultimately generates a user password based on the user's input of length and characters. It validates the users input and creates an array of character codes.It finally generates a random password by selecting characters from the array and returns the password as a string.

writePassword() funtion is triggered when the generate password button is clicked. It calls generatePassword to generate a password and displays it with the id "password".

The event listener listens for clicks on the Generate Password button and calls the writePassword function.

Credits:

The password generator was developed by David Patzer as part of the NU coding bootcamp. I obtained information from many sources to help put this together. This includes w3collective, MDN understanding Math.random(), Stack Overflow, www.AcsiiTable,com and a YouTube video by OpenJavaScript.


