//image carousel
for (const i of minis) {
  i.addEventListener("click", bigSlide);
}

function bigSlide(event) {
  var event = event.target;
  for (const iterator of minis) {
    iterator.classList.remove("active");
  }
  event.classList.add("active");
  slide.src = event.src;
}

//variable value (in)
document.getElementById("name").innerHTML = product.name;
document.getElementById("price").innerHTML = product.price + "€";
for (let x = 0; x < product.size.length; x++) {
  var size = document.createElement("option");
  size.text = product.size[x];
  size.value = product.size[x];
  select1.appendChild(size);
}

//variable value (out)
productForm.addEventListener("submit", getValues);
function getValues(event) {
  var formValues = new FormData(productForm);
  for (const value of formValues.entries()) {
    value[0] == "productName" ? (product.name = value[1]) : "";
    value[0] == "productPrice" ? (product.price = value[1]) : "";
  }
}

select1.addEventListener("submit", function () {
  product.colors.color = select1.value;
});

select2.addEventListener("submit", function () {
  product.size = select2.value;
});
