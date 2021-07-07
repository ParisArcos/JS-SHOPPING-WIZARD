/**
 * Shipping Form Logic
 */
 shippingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(form);
  // Display the values
  for (var input of formData.entries()) {
    console.log(input);
    // shipping data
    if (input[0] == "shipping-type") {
      shipping.type = input[1];
      if (shipping.type == "Extra shipping") {
        shipping.amount = 4.99;
      } else if (shipping.type == "Premium") {
        shipping.amount = 9.99;
      }
      console.log(shipping.amount);
    }

    // shipping.date = infoShipping.innerHTML;

    // gift data
    if (input[0] == "gift-check") {
      gift.isset = input[1];
    }
    if (input[0] == "comment") {
      gift.message = input[1];
    }
    if (input[0] == "gift-wrapper") {
      gift.image = input[1];
    }
  }
});

// Display shipping time
shipBtns.forEach((shipBtn) => {
  shipBtn.addEventListener("click", (e) => {
    if (e.target.id == "extra") {
      infoShipping.innerHTML = `
        <h4>Your order will arrive:</h4>
        <h4>estimate delivery date:</h4>
        <p>Between <span>25 de Julio de 2020 14:00h</span> and <span>25 de Julio de 2020 20:00h.</span></p>
        `;
    } else if (e.target.id == "premium") {
      infoShipping.innerHTML = `
        <h4>Your order will arrive:</h4>
        <h4>estimate delivery date:</h4>
        <p>Between <span>21 de Julio de 2020 14:00h</span> and <span>21 de Julio de 2020 20:00h.</span></p>
        `;
    } else if (e.target.id == "free") {
      infoShipping.innerHTML = "";
    }
  });
});

// Display gift information 
infoGift.addEventListener("click", () => {
  let giftCheckMoreInfo = document.getElementsByClassName("giftCheckMoreInfo");
    if (giftCheckMoreInfo.style.display === "none") {
      giftCheckMoreInfo.style.display = "block";
    } else {
      giftCheckMoreInfo.style.display = "none";
    }
})