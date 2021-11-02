const specialChars = [
  "@",
  "$",
  "%",
  "*",
  "^",
  "<",
  ">",
  "?",
  "!",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "'",
];

let result = false;
let logPassword = document.querySelector("h2");

const checkPassword = function (password) {
  if (password.length >= 16) {
    result = true;
  } else if (password.length >= 12 && password.includes(`-`)) {
    result = true;
  } else if (password.length >= 8) {
    let valid = specialChars.some((char) => password.includes(char));
    if (valid) {
      result = true;
    } else {
      result = false;
    }
  } else {
    result = false;
  }
  if (result) {
    logPassword.innerHTML = `Ditt lösenord: ${userPassword}, är godkänt!`;
  } else {
    logPassword.innerHTML = `Ditt lösenord: ${userPassword}, är inte godkänt!`;
  }
};

let userPassword = document.querySelector("#passwordField").value;
document.querySelector("#myBtn").addEventListener("click", () => {
  checkPassword(userPassword);
});
document.querySelector("#passwordField").addEventListener("change", () => {
  userPassword = document.querySelector("#passwordField").value;
});
