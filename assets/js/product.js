// Init product page
buildProductText();
buildSize();
buildColors();

//------------------------------------------------------------- EVENTS --------------------------------------------------------------\\
// evento click en imgColores
for (const i of micros) {
  i.addEventListener("click", colorSlide);
}
// evento submit de form
productForm.addEventListener("submit", getValues);

//!cmabiar despues de img
select2.addEventListener("submit", function () {
  product.size = select2.value;
});

//------------------------------------------------------------- FUNCTIONS --------------------------------------------------------------\\
//draw images selected in colour selection
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
        imgSmll.setAttribute("onclick", "bigSlide(event)");
        imgSmll.src = combination.secondaryImg[i];
        imgSmll.alt = combination.colorName;
        imgSmll.title = combination.colorName;
        imgSmll.id = "mini";
        carrousel.appendChild(imgSmll);

        if (i == combination.secondaryImg.length) {
          imgSmll.setAttribute("class", "mini cursor active");
          imgSmll.setAttribute("onclick", "bigSlide()");
          imgSmll.src = combination.imageURL;
          imgSmll.alt = combination.colorName;
          imgSmll.alt = combination.colorName;
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
    value[0] == "productName" ? (product.name = value[1]) : "";
    value[0] == "productPrice" ? (product.price = value[1]) : "";
  }
  product.colors.color = select1.value;
}

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
    img.alt = product.combination[y].colorName;
    img.alt = product.combination[y].colorName;
    select2.appendChild(img);
  }
  drawImg();
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

function colorSlide(event) {
  var event = event.target;
  selected[0].classList.remove("selected");
  event.classList.add("selected");
  drawImg();
}

function bigSlide(event) {
  var event = event.target;
  for (const iterator of minis) {
    iterator.classList.remove("active");
  }
  event.classList.add("active");
  mainSlide.childNodes[0].src = event.src;
}
