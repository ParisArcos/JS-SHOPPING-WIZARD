/**
 * User Form Logic
 */
// Form on submit
userForm2.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(userForm2);
  // Display the values
  for (var input of formData.entries()) {
    if (input[0] === "username") {
      user.username = input[1];
    }
    if (input[0] === "email") {
      user.email = input[1];
    }
    if (input[0] === "password") {
      user.password = input[1];
    }
    if (input[0] === "fname") {
      user.firstName = input[1];
    }
    if (input[0] === "lname") {
      user.lastName = input[1];
    }
    if (input[0] === "birthday") {
      user.birthday = input[1];
    }
    if (input[0] === "address1") {
      user.firstAddress = input[1];
    }
    if (input[0] === "address2") {
      user.secondAddress = input[1];
    }
    if (input[0] === "pcode") {
      user.postalCode = input[1];
    }
    if (input[0] === "country") {
      user.country = input[1];
    }
    if (input[0] === "phonecode") {
      user.phoneCountryCode = input[1];
    }
    if (input[0] === "phone") {
      user.phoneNumber = input[1];
    }
    if (input[0] === "confirm") {
      user.regularAddress = input[1];
    }
  }
});

//Mensaje ayuda formulario
const inputs = document.querySelectorAll(".form__input");
var inputHelp = document.querySelectorAll(".form__input-error");
for (let index = 0; index < inputs.length; index++) {
  inputs[index].addEventListener("focus", function inputError() {
    inputHelp[index].style.display = "block";
  });
  inputs[index].addEventListener("blur", function inputnoError() {
    inputHelp[index].style.display = "none";
  });
}

// Asignación del código de país tlf.
let countryName = document.getElementById("country");
let phoneCode = document.getElementById("phonecode");
countryName.addEventListener("change", function (e) {
  phoneCode.value = countryName.value;
});

// Validación de la contraseña
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
password2.addEventListener("keyup", function () {
  validatePassword(password, password2);
});