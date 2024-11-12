let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");

let login = (event) => {
  event.preventDefault();
  let email = emailInput.value;
  let pass = passwordInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=])[\w\d@$#$%^&+=]{8,}$/;
  let emailTest = emailRegex.test(email);
  let passwordTest = passwordRegex.test(pass);
  passwordTest && emailTest
    ? (users.push({ email, pass }),
      localStorage.setItem("users", JSON.stringify(users)),
      (window.location.href = "../index.html"))
    : alert("Invalid Data ");
};
