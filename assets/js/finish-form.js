function buildOrderVariables() {
  orderProductName.forEach(
    (elm) => (elm.innerHTML = productOrder.name + " " + productOrder.colorName)
  );

  orderProductPrice.forEach((elm) => (elm.innerHTML = productOrder.price));

  orderProductImage.forEach(
    (elm) =>
      (elm.innerHTML = `<img class="img-fluid" src="${productOrder.imageSrc}">`)
  );

  orderProductSize.forEach((elm) => (elm.innerHTML = productOrder.size));

  orderProductColor.forEach(
    (elm) => (elm.style.backgroundColor = productOrder.hex)
  );

  orderShippingName.forEach((elm) => (elm.innerHTML = shipping.type));

  orderShippingCost.forEach((elm) => (elm.innerHTML = shipping.amount));

  //orderDeliveryDate.forEach(elm => elm.innerHTML = `<h4>Your order will be delivered</h4> ${shipping.date}`);

  document.querySelector("#ch_user-name").innerHTML = user.firstName;

  let orderTotalAmount = () => {
    return product.price + shipping.amount;
  };

  orderTotal.forEach((elm) => (elm.innerHTML = orderTotalAmount()));
}

document.querySelector("#ch_finish-form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (document.querySelector("#terms-and-conditions").checked == false) {
    document
      .querySelector("#ch_finish-form .alert-red")
      .removeAttribute("hidden");
  } else {
    moveMainSection();
  }
});
