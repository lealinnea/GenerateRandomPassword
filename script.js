// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
// using parseInt so it will return an int 
  var passwordNum = parseInt(
    prompt('How many characters would you like your password to contain (8-128)?')
  );
  console.log(passwordNum)
  // prompt number of characters between 8- 128
  // var passwordNum = prompt("Enter a number between 8-128");
  //This resolves the users error when they type a value outside of 8-128
  if (passwordNum < 8 || passwordNum > 128) {
    alert("Please enter valid number between 8 - 128")
    return null;
  } else {


    //confirms- asking user a yes or no question which would result in a true false
    //upper case
    var isUpperCase = confirm("Do you want upper case?");
    console.log(isUpperCase);
    //lower case
    var isLowerCase = confirm("Do you want lower case?");
    console.log(isLowerCase)
    //numbers
    var isNumber = confirm("Do you want numbers?");
    console.log(isNumber)
    //special characters
    var isSpecialCharacter = confirm("Do you want special characters?");
    console.log(isSpecialCharacter)


    //declaring total options for password for each variable
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(upperCase)
    var lowerCase = "abcdefghijklmnopqrstuvwxyx";
    console.log(lowerCase)
    var numbers = "1234567890";
    console.log(numbers)
    var specialCharacter = "~`!@#$%^&*()_-+<>?+={}[]|:;',.";
    console.log(specialCharacter)


 //creating a variable to hold the total new password options
    var passwordOptions = '';

    //if isUpperCase is true then enter the conditional and add all of the uppercase options to passwordOptions
    if (isUpperCase) {
      passwordOptions += upperCase;
    }
    //if isLowerCase is true then enter the conditional and add all of the lowercase options to passwordOptions
    if (isLowerCase) {
      passwordOptions += lowerCase;
    }
    //if isNumber is true then enter the conditional and add all of the number options to passwordOptions
    if (isNumber) {
      passwordOptions += numbers;
    }
    //if isSpecialCharacter is true then enter the conditional and add all of the special character options to passwordOptions
    if (isSpecialCharacter) {
      passwordOptions += specialCharacter;
    }

    console.log(passwordOptions);


    //setting the new user password to empty string to add to in the for loop
    var newUserPass = '';

    //looping over total character options and randomizing the options based on index. This will go until it reaches the desired length of password
    for (var i = 0; i < passwordNum; i++) {
      newUserPass += passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
    }
    console.log(newUserPass);
  }
  //stopping funtion and retruning a value in this case a new random password
  return newUserPass;

}



// Add event listener to generate button -- on click it creates a password
generateBtn.addEventListener("click", writePassword);