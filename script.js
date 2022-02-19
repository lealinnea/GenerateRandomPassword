// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // prompt number of characters between 8- 128
  var passwordNum = prompt("Enter a number between 8-128");
  //This resolves the users error when they type a value outside of 8-128
  if (passwordNum < 8 || passwordNum > 128) {
    alert("Please enter valid number between 8 - 128");
  }
  //confirms- asking user a yes or no question which would result in a true false
 
  //upper case
  var isUpperCase = confirm("Do you want upper case?")
  console.log(isUpperCase)
  //lower case
  var isLowerCase = confirm("Do you want lower case?")
  console.log(isLowerCase)
  //numbers
  var isNumber = confirm("Do you want numbers?")
  console.log(isNumber)
  //special characters
  var isSpecialCharacter = confirm("Do you want special characters?")
  console.log(isSpecialCharacter)


//splitting the characters so they stand alone
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  console.log(upperCase)
  var lowerCase = "abcdefghijklmnopqrstuvwxyx".split("");
  console.log(lowerCase)
  var numbers = "1234567890".split("");
  console.log(numbers)
  var specialCharacter = "~`!@#$%^&*()_-+<>?+={}[]|:;',.".split("");
  console.log(specialCharacter)
  
  //creating a variable to hold new password
  var newUserPassword = "";

// while loop is allowing it to be run many times
//new user password has to be less than or equal to passwordNum which declaired above is a number between 8-128 
//declairing i as a new value which is adding the length of the string-which turned into an arrray due to split function
//adding new user password + uppercase array to get a value for each one
  while (newUserPassword.length <= passwordNum)
    if (upperCase) {
      i = genRandom(upperCase.length);
      newUserPassword = newUserPassword + upperCase[i];
  }
  if (lowerCase) {
      i = genRandom(lowerCase.length);
      newUserPassword = newUserPassword + lowerCase[i];
  }
   if (numbers) {
      i = genRandom(numbers.length);
      newUserPassword = newUserPassword + numbers[i];
   }
    if (specialCharacter) {
      i = genRandom(specialCharacter.length);
      newUserPassword = newUserPassword + specialCharacter[i];
  }
  //stopping funtion and retruning a value in this case a new random password
       console.log(newUserPassword);
          return newUserPassword
  }

  function genRandom(max){
    //math floor rounding the number is in the () to the largest integer value and since there is a math.random that is genrating a random value x our arrays
  return Math.floor(Math.random() * max);
  }
  // Add event listener to generate button -- on click it creates a password
  generateBtn.addEventListener("click", writePassword);
