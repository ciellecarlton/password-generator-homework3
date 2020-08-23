document.querySelector("#generate").addEventListener("click", writePassword);



// Array of possible password characters 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt will pop-up to ask how many characters the user would like in their password-->
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

 // Loop if answer is outside the password criteria-->
  while(confirmLength <= 8 || confirmLength >= 128) {
    // this message will pop up if they entered a number <8 or >128 -->
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // recive alert of how many charactes the user will have in your password --> 
      alert(`Your password will have ${confirmLength} characters`);

     // Determine criteria of password 
     var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
     var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
     var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
     var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      // Loop if answer is outside the criteria 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

      // these confirms will determine the password criteria
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on the for-loop selecting random characters from the array for password
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}