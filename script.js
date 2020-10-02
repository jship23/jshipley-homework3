// Assignment Code
var characters = {
  "upper": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "lower": "abcdefghijklmnopqrstuvwxyz",
  "numbers": "0123456789",
  "special": "!@#$%^&*(){}[]=<>/,.|~?",
};


var generateBtn = document.querySelector("#generate");
  charLength = prompt("How many characters do you want your password to have?")



  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
