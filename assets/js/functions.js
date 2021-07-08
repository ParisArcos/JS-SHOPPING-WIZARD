/**
 * Product page Functions
 */
function buildColors() {
  for (let y = 0; y < product.combination.length; y++) {
    var img = document.createElement("img");
    if (y == 0) {
      img.setAttribute("class", "micro cursor selected");
      img.style.outline = product.combination[y].colorHex + " solid 2px";
    } else {
      img.setAttribute("class", "micro cursor");
    }

    img.setAttribute("data-Hex", product.combination[y].colorHex);
    img.src = product.combination[y].imageURL;
    img.title = product.combination[y].colorName;
    img.alt = product.combination[y].colorName;

    select2.appendChild(img);
  }
  drawImg();
}

function colorSlide(event) {
  var event = event.target;
  selected[0].style.outline = event.dataset.hex + " solid 0px";
  selected[0].classList.remove("selected");
  event.classList.add("selected");
  event.style.outline = event.dataset.hex + " solid 2px";
  drawImg();
}

function drawImg() {
  mainSlide.innerHTML = "";
  carrousel.innerHTML = "";

  product.combination.forEach((combination) => {
    if (combination.colorHex === selected[0].dataset.hex) {
      var imgB = document.createElement("img");
      imgB.setAttribute("class", "img-fluid");
      imgB.src = combination.imageURL;
      imgB.alt = combination.colorName;
      imgB.id = "img-big";
      mainSlide.appendChild(imgB);

      for (let i = 0; i <= combination.secondaryImg.length; i++) {
        var imgSmll = document.createElement("img");
        imgSmll.setAttribute("class", "mini cursor");
        imgSmll.src = combination.secondaryImg[i];
        imgSmll.alt = combination.colorName;
        imgSmll.title = combination.colorName;
        imgSmll.id = "mini";
        carrousel.appendChild(imgSmll);

        if (i == combination.secondaryImg.length) {
          imgSmll.setAttribute("class", "mini cursor active");
          imgSmll.src = combination.imageURL;
          imgSmll.alt = combination.colorName;
          imgSmll.title = combination.colorName;
          imgSmll.id = "mini";
          carrousel.appendChild(imgSmll);
        }
      }
    }
  });
}

function initCheckoutOrder() {
  event.preventDefault();
  var formValues = new FormData(productForm);
  for (const value of formValues.entries()) {
    value[0] == "productName" ? (productOrder.name = value[1]) : "";
    value[0] == "productPrice" ? (productOrder.price = value[1]) : "";
  }
  productOrder.colorName = selected[0].title;
  productOrder.imageSrc = selected[0].src;
  productOrder.size = select1.value;
  productOrder.hex = selected[0].dataset.hex;
  document.querySelector(".process").removeAttribute("hidden");
  document.getElementById("logo").setAttribute("hidden", true);
  moveMainSection();
  initCounter();
}

function buildSize() {
  for (let x = 0; x < product.size.length; x++) {
    var size = document.createElement("option");
    size.text = product.size[x];
    size.value = product.size[x];
    select1.appendChild(size);
  }
}

function buildProductText() {
  document.getElementById("name").innerHTML = product.name;
  document.getElementById("price").innerHTML = product.price + "€";
  document.getElementById("productName").value = product.name;
  document.getElementById("productPrice").value = product.price;
}

function bigSlide(event) {
  var event = event.target;
  if (event.id == "mini") {
    for (const iterator of minis) {
      iterator.classList.remove("active");
    }
    event.classList.add("active");
    mainSlide.childNodes[0].src = event.src;
  }
}

/**
 * Form Helper Functions
 */
function validatePassword(password, password2) {
  let errormsg = document.querySelector("#group__password2 .form__input-error");

  var valideJs =
    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/.test(
      password.value
    );

  console.log(password.value === password2.value);
  console.log(valideJs);

  if (password.value === password2.value) {
    if (valideJs) {
      errormsg.style.display = "none";
      password2.setCustomValidity("");
    } else {
      errormsg.style.display = "block";
      password2.setCustomValidity("Error Pattern");
    }
  } else {
    errormsg.style.display = "block";
    password2.setCustomValidity("Both passwords must be the same.");
  }
}

/**
 * Shipping Form Helpers
 */
/*
// Control timing
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
*/
// change color of icons in buying process

// Clear shipping form
function clearFunction() {
  shippingForm.reset();
  infoShipping.innerHTML = "";
}

/**
 * Move Main
 */
function moveMainSection() {
  positionMain -= 100;
  mainDiv.style.transform = "translateX(" + positionMain + "%)";

  if (positionMain === -100) {
    // Profile
    document.querySelector(".profile-icon").style.backgroundColor = "#000";
    document.querySelector('#product-section').style.height = '0px';
  }
  if (positionMain === -200) {
    // Address
    document.querySelector(".address-icon").style.backgroundColor = "#000";
    document.querySelector('#profile').style.height = '0px';
  }
  if (positionMain === -300) {
    // Shipping
    document.querySelector(".shipping-icon").style.backgroundColor = "#000";
    document.querySelector('#address').style.height = '0px';
  }
  if (positionMain === -400) {
    // Finish
    document.querySelector(".finish-icon").style.backgroundColor = "#000";
    document.querySelector('#shipping').style.height = '0px';
  }
}
