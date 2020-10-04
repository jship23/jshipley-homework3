// Assignment Code
var characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]=<>/,.|~?";
//empty string
var passwordContains = "";

//click on generate password button
var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writePassword);

//prompt user for password criteria
function generatePassword() {
  
  
  //prompt how many characters
  var charLength = parseInt(prompt("How many characters do you want your password to have?"));
  if (charLength < 8) {
   alert("Password must be more than 8 characters")
   return;
  }
  if(charLength > 128) {
   alert("Password must be less than 128 characters")
   return;
  }
  console.log(charLength)

  //include uppercase
  var includeUpp = confirm("Do you want to include capital letters?")
  console.log(includeUpp)



  //include lowercase
  var includeLow = confirm("Do you want to include lowercase letters?")
  console.log(includeLow)

  if(includeLow) {
    passwordContains += characters.lower;
  };

  //include numbers
  var includeNum = confirm("Do you want to include numbers?")
  console.log(includeNum)

  if(includeNum) {
    passwordContains += characters.number;
  };


  //include special characters
  var includeSym = confirm("Do you want to include special characters?")
  console.log(includeSym)

  if(includeSym) {
    passwordContains += characters.symbol;
  };

  if (includeUpp === false && includeLow === false && includeNum === false && includeSym === false){
  alert("Your password must contain at least one uppercase letter, lowercase letter, number, or special character")
  };

  var password = "";
  for(var i=characters; i<0; i++) {
  password += passwordContains[Math.floor(Math.random() * passwordContains.length)]
  var password = generatePassword();
  };
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  
  console.log(password);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};


// Add event listener to generate button

 
