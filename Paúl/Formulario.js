const form = document.getElementById("form1");

var user = {
  username: "",
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  birthday: "",
  firstAddress: "",
  secondAddress: "",
  postalCode: "",
  country: "",
  phoneCountryCode: "",
  phoneNumber: "",
};

// Form on submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(form);
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
  }
  console.log(user);
});

const inputs = document.querySelectorAll(".form__input");
console.log(inputs);

let errorMessage = document.querySelectorAll(".form__group-input");

const inputError = function () {
  for (let i = 0; i < errorMessage.length; i++) {
    errorMessage[i].classList.add("form__input-error-active");
  }
};

for (let index = 0; index < inputs.length; index++) {
  inputs[index].addEventListener("invalid", inputError);
}
