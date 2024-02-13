  
function writePassword() {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const symbols = "!@#$%^&*()_+=-";

  var passwordLength = 0;

  
  includeLower = true;
  includeUpper = true;
  includeNum = true;
  includeSym = true;

  function charPrompt() {
    var char = window.prompt("How many Characters do you want?");
    if (char < 8) {
      window.alert("You need at least 8 characters.");
      charPrompt();
    } else if (char > 128) {
      window.alert("The character max is 128");
      charPrompt();
    } else if (char >= 8 && char <= 128) {
      passwordLength = char;
    } else if (char !>= 8 || char !<=128){
      window.alert("You can only enter the number amount.");
      charPrompt();
    }
  }

  // Move charPrompt() inside the event listener
  document.getElementById('generate').addEventListener('click', function () {
    charPrompt();

    if (window.confirm("Do you want numbers?")) {
      includeNum = true;
    } else {
      includeNum = false;
    }

    if (window.confirm("Do you want lowercase letters?")) {
      includeLower = true;
    } else {
      includeLower = false;
    }

    if (window.confirm("Do you want uppercase letters?")) {
      includeUpper = true;
    } else {
      includeUpper = false;
    }

    if (window.confirm("Do you want special characters?")) {
      includeSym = true;
    } else {
      includeSym = false;
    }


    let allowedChars = "";
    let myPassword = "";

    allowedChars += includeLower ? lower : "";
    allowedChars += includeUpper ? upper : "";
    allowedChars += includeNum ? numbers : "";
    allowedChars += includeSym ? symbols : "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      myPassword += allowedChars[randomIndex];
    }

    var finishedpassword = document.getElementById('password');
    finishedpassword.innerText = myPassword;
  });
}

// Call the writePassword function without arguments initially
writePassword();