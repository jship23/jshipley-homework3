// Assignment Code
var characters = {
  "upper": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "lower": "abcdefghijklmnopqrstuvwxyz",
  "numbers": [0,1,2,3,4,5,6,7,8,9],
  "special": "!@#$%^&*(){}[]=<>/,.|~?",
};


var generateBtn = document.querySelector("#generate").addEventListener('click', promptMe);

//prompt user for password criteria
function promptMe() {
  //prompt how many characters
  var charLength = prompt("How many characters do you want your password to have?");
  console.log(charLength)
  //include uppercase
  var includeUpp = confirm("Do you want to include capital letters?")
  console.log(includeUpp)
  //include lowercase
  var includeLow = confirm("Do you want to include lowercase letters?")
  console.log(includeLow)
  //include numbers
  var includeNum = confirm("Do you want to include numbers?")
  console.log(includeNum)
  //include special characters
  var includeSym = confirm("Do you want to include special characters?")
  console.log(includeSym)
};
  



  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
