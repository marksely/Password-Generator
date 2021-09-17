var numbers = [0,1,2,3,4,5,6,7,8,9];
var letters = ['a','b','c','d','e', 'f','g','h','i','j','k','l','m'];
var upperCaseLetters = ['A','B','C','D','E', 'F','H','I','J','K','L','M'];
var specialCharacters = ['!','#','&','@','+','/','?',';',']',')','+','(','.','"'];
let emptyArr = [];


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt user for criteria 
  var numOfCharacters = window.prompt('How many characters would you like your password to contain? Enter a value between 8 and 128');
  if(numOfCharacters >  128 || numOfCharacters < 8) {
    window.alert("Invaild input, try again")
    return;
  } 
  
  var lowerCase = window.confirm("Would you like the password to contain lowercase letters?");
  if(lowerCase) {
    var letterIndex = Math.floor(Math.random() * letters.length);
    var randomLetter = letters[letterIndex];
    emptyArr.push(randomLetter);
   }

  var upperCase = window.confirm("Would you like the password to contain uppercase letters?");
  if(upperCase) {
    var upperCaseIndex = Math.floor(Math.random() * upperCaseLetters.length);
    var randomUpper = upperCaseLetters[upperCaseIndex];
    emptyArr.push(randomUpper);
  }

  var numeric = window.confirm("Would you like your password to contain numbers?");
  if(numeric) {
    var numericIndex = Math.floor(Math.random() * numbers.length);
    var randomNumber = numbers[numericIndex];
    emptyArr.push(randomNumber);
  } 

  var special = window.confirm("Would you like your password to contain special characters?");
  if(special) {
    var specialIndex = Math.floor(Math.random() * specialCharacters.length);
    var randomSpecial = specialCharacters[specialIndex]; 
    emptyArr.push(randomSpecial);
  }
  
  //displays the password
  return emptyArr.join([]) + emptyArr.join([]) + emptyArr.join([]);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
