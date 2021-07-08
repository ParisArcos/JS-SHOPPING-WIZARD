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
productForm.addEventListener("submit", initCheckoutOrder);

//preven tab arround
document.addEventListener("keydown", preventTab);
