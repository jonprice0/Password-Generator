// initializing array components
const arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const arrayNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const arraySymbol = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]

// initializing workingArray and password variables in generatePassword() function
function generatePassword() {
  var workingArray = []
  var password = "";
// prompts and confirms for user input with validation code  
  var passwordLength = window.prompt("How many characters would you like your password to be?")
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please choose a password length of at least 8 characters but no more than 128 characters.");
      return "Try again!";
    }
    if (isNaN(passwordLength)) {
      alert("Please enter a number.");
      return "Try again!";
    };
  var lowerConfirm = confirm("Would you like your password to include lower-case letters?");
  var upperConfirm = confirm("Would you like your password to include upper-case letters?");
  var numberConfirm = confirm("Would you like your password to include numbers?");
  var symbolConfirm = confirm("Would you like your password to include symbols?");
};
// This is the end of my code and the beginning of the starter code

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
