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

//variable value (out)
productForm.addEventListener("submit", getValues);
function getValues(event) {
  var formValues = new FormData(productForm);
  for (const value of formValues.entries()) {
    value[0] == "productName" ? (product.name = value[1]) : "";
    value[0] == "productPrice" ? (product.price = value[1]) : "";
    console.log(value[1]);
  }
}

select1.addEventListener("submit", function () {
  product.colors.color = select1.value;
  console.log(select1.value);
});

select2.addEventListener("submit", function () {
  product.size = select2.value;
  console.log(select2.value);
});
