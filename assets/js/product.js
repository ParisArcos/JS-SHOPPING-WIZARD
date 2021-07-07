// Init product page
buildProductText();
buildSize();
buildColors();

//------------------------------------------------------------- EVENTS --------------------------------------------------------------\\
//event carrousel
carrousel.addEventListener("click", bigSlide);
// event click on imgColores
for (const i of micros) {
  i.addEventListener("click", colorSlide);
}
// evento submit de form
productForm.addEventListener("submit", getValues);

//propagacion de eventos

//------------------------------------------------------------- FUNCTIONS --------------------------------------------------------------\\
function buildColors() {
  //colores
  for (let y = 0; y < product.combination.length; y++) {
    var img = document.createElement("img");
    img.setAttribute(
      "class",
      y == 0 ? "micro cursor selected" : "micro cursor"
    );
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
  selected[0].classList.remove("selected");
  event.classList.add("selected");
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

function getValues() {
  var formValues = new FormData(productForm);
  for (const value of formValues.entries()) {
    value[0] == "productName"
      ? (product.name =
          value[1] + "-" + selected[0].title + "-" + select1.value)
      : "";
    value[0] == "productPrice" ? (product.price = value[1]) : "";
  }
}

function buildSize() {
  //tallas
  for (let x = 0; x < product.size.length; x++) {
    var size = document.createElement("option");
    size.text = product.size[x];
    size.value = product.size[x];
    select1.appendChild(size);
  }
}

function buildProductText() {
  //variable value (in)
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
