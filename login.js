let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let login = (event) => {
  event.preventDefault();
  let email = emailInput.value;
  let pass = passwordInput.value;
  let userIndex = users.findIndex((el) => el.email == email && el.pass == pass);
  userIndex == -1
    ? alert("Wrong username or password")
    : (window.location.href = "./foods&drinks/food&drinks.html");
};
