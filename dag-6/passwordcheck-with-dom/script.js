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

let logPassword = document.querySelector("h2");

const checkPassword = function (password) {
  if (password.length >= 16) {
    return true;
  } else if (password.length >= 12 && password.includes(`-`)) {
    return true;
  } else if (password.length >= 8) {
    let valid = specialChars.some((char) => password.includes(char));
    if (valid) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

let userPassword = document.querySelector("#passwordField").value;
document.querySelector("#myBtn").addEventListener("click", () => {
  let result = checkPassword(userPassword);
  if (result) {
    logPassword.innerHTML = `Ditt lösenord: ${userPassword}, är godkänt!`;
  } else {
    logPassword.innerHTML = `Ditt lösenord: ${userPassword}, är inte godkänt!`;
  }
});
document.querySelector("#passwordField").addEventListener("change", () => {
  userPassword = document.querySelector("#passwordField").value;
});
