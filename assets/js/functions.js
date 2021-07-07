/**
 * Form Helper Functions
 */
function validatePassword(password, password2) {
  let errormsg = document.querySelector("#group__password2 .form__input-error");
  console.log(password.value === password2.value);
  if (password.value === password2.value) {
    errormsg.style.display = "none";
    password2.setCustomValidity("");
  } else {
    errormsg.style.display = "block";
    password2.setCustomValidity("Both passwords must be the same.");
  }
}

/**
 * Shipping Form Helpers
 */

function setStaringMinutes() {
  let minutes;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].id === "shipping") {
      minutes = 3;
    } else if (sections[i].id === "address") {
      minutes = 2;
    } else if (sections[i].id === "finish") {
      minutes = 4;
    }
  }
  return minutes;
}

function updateCountdown() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
  // console.log(time)
  if (minutes <= 0 && seconds == 0) {
    clearInterval(setTime);
    alert("Time is up!");
  }
}

for (let i = 0; i < sections.length; i++) {
  if (sections[i].id === "shipping") {
    profileIcon.style.backgroundColor = "black";
    addressIcon.style.backgroundColor = "black";
    shippingIcon.style.backgroundColor = "black";
  } else if (sections[i].id === "thank-you") {
    profileIcon.style.backgroundColor = "black";
    addressIcon.style.backgroundColor = "black";
    shippingIcon.style.backgroundColor = "black";
    finishIcon.style.backgroundColor = "black";
  } else if (sections[i].id === "profile") {
    profileIcon.style.backgroundColor = "black";
  } else if (sections[i].id === "address") {
    profileIcon.style.backgroundColor = "black";
    addressIcon.style.backgroundColor = "black";
  } else if (sections[i].id === "finish") {
    profileIcon.style.backgroundColor = "black";
    addressIcon.style.backgroundColor = "black";
    shippingIcon.style.backgroundColor = "black";
  }
}

// Form clear
function clearFunction() {
  form.reset();
  infoShipping.innerHTML = "";
}
