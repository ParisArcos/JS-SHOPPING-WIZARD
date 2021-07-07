//variable value (in)
document.getElementById("name").innerHTML = product.name;
document.getElementById("price").innerHTML = product.price + "€";
document.getElementById("productName").value = product.name;
document.getElementById("productPrice").value = product.price;
//tallas
for (let x = 0; x < product.size.length; x++) {
  var size = document.createElement("option");
  size.text = product.size[x];
  size.value = product.size[x];
  select1.appendChild(size);
}
//colores

for (let y = 0; y < product.combination.length; y++) {
  var img = document.createElement("img");
  img.setAttribute("class", y == 0 ? "micro cursor selected" : "micro cursor");
  img.setAttribute("data-Hex", product.combination[y].colorHex);
  img.src = product.combination[y].imageURL;
  img.alt = product.combination[y].colorName;
  select2.appendChild(img);
}
drawImg();

// evento click en colores
for (const i of micros) {
  i.addEventListener("click", colorSlide);
}

function colorSlide(event) {
  var event = event.target;
  for (const iterator of micros) {
    iterator.classList.remove("selected");
  }
  event.classList.add("selected");
  drawImg();
}

//variable value (out)
productForm.addEventListener("submit", getValues);
function getValues() {
  var formValues = new FormData(productForm);
  for (const value of formValues.entries()) {
    value[0] == "productName" ? (product.name = value[1]) : "";
    value[0] == "productPrice" ? (product.price = value[1]) : "";
  }
}

select1.addEventListener("submit", function () {
  product.colors.color = select1.value;
});
//cmabiar despues de img
select2.addEventListener("submit", function () {
  product.size = select2.value;
});

//draw images selected in colour selection
function drawImg() {
  mainSlide.innerHTML = "";
  carrousel.innerHTML = "";
  product.combination.forEach((combination) => {
    if (combination.colorHex === selected[0].dataset.hex) {
      //<img id="img-big" class="img-fluid" src="assets/img/600x400-1.png" alt="Main-Image" />
      var imgB = document.createElement("img");
      imgB.setAttribute("class", "img-fluid");
      imgB.src = combination.imageURL;
      imgB.alt = combination.colorName;
      imgB.id = "img-big";
      mainSlide.appendChild(imgB);
      for (let i = 0; i <= combination.secondaryImg.length; i++) {
        //<img class="mini cursor active" src="assets/img/600x400-1.png" alt="Small-Image1" /><!--img1-->
        var imgSmll = document.createElement("img");
        imgSmll.setAttribute("class", "mini cursor");
        imgSmll.src = combination.secondaryImg[i];
        imgSmll.alt = combination.colorName;
        imgSmll.id = "mini";
        carrousel.appendChild(imgSmll);
        if (i == combination.secondaryImg.length) {
          imgSmll.setAttribute("class", "mini cursor active");
          imgSmll.src = combination.imageURL;
          imgSmll.alt = combination.colorName;
          imgSmll.id = "mini";
          carrousel.appendChild(imgSmll);
        }
      }
    }
  });
}

//images carousel
for (const i of minis) {
  i.addEventListener("click", bigSlide);
}

function bigSlide(event) {
  var event = event.target;
  for (const iterator of minis) {
    iterator.classList.remove("active");
  }
  event.classList.add("active");
  mainSlide.childNodes[1].src = event.src;
}
