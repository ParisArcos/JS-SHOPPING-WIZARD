// Store shipping info of customers
var shippingForm = document.querySelector("#shipping-form-submit");

/**
 * Shipping Form Logic
 */
shippingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(shippingForm);
  // Display the values
  for (var input of formData.entries()) {
    // shipping cost
    if (input[0] == "shipping-type") {
      shipping.type = input[1];
      if (shipping.type == "Extra shipping") {
        shipping.amount = 4.99;
      } else if (shipping.type == "Premium") {
        shipping.amount = 9.99;
      } else if (shipping.type == "Free shipment") {
        shipping.amount = 0;
      }
    }

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
  buildOrderVariables();
  moveMainSection();
});

shipBtns.forEach((shipBtn) => {
  shipBtn.addEventListener("click", (e) => {
    if (e.target.id == "extra") {
      var dt = new Date();
      dt.setHours(dt.getHours() + 48);
      var dtYear = dt.getFullYear();
      var dtMonth = dt.toLocaleString('en-IN', { month: "long" });
      var dtDate = dt.getDate();
      var dtHours = dt.getHours();
      var dtMin = dt.getMinutes();
      dt.setHours(dt.getHours() + 24);
      var dtMaxYear = dt.getFullYear();
      var dtMaxMonth = dt.toLocaleString('en-IN', { month: "long" });
      var dtMaxDate = dt.getDate();
      var dtMaxHours = dt.getHours();
      var dtMaxMin = dt.getMinutes();
    } else if (e.target.id == "premium") {
      var dt = new Date();
      dt.setHours(dt.getHours() + 24);
      var dtYear = dt.getFullYear();
      var dtMonth = dt.toLocaleString('en-IN', { month: "long" });
      var dtDate = dt.getDate();
      var dtHours = dt.getHours();
      var dtMin = dt.getMinutes();
      dt.setHours(dt.getHours() + 24);
      var dtMaxYear = dt.getFullYear();
      var dtMaxMonth = dt.toLocaleString('en-IN', { month: "long" });
      var dtMaxDate = dt.getDate();
      var dtMaxHours = dt.getHours();
      var dtMaxMin = dt.getMinutes();
    } else if (e.target.id == "free") {
      var dt = new Date();
      dt.setHours(dt.getHours() + 72);
      var dtYear = dt.getFullYear();
      var dtMonth = dt.toLocaleString('en-IN', { month: "long" });
      var dtDate = dt.getDate();
      var dtHours = dt.getHours();
      var dtMin = dt.getMinutes();
      dt.setHours(dt.getHours() + 24);
      var dtMaxYear = dt.getFullYear();
      var dtMaxMonth = dt.toLocaleString('en-IN', { month: "long" });
      var dtMaxDate = dt.getDate();
      var dtMaxHours = dt.getHours();
      var dtMaxMin = dt.getMinutes();
    }

    // For "shipping" section
    infoShipping.innerHTML = `
        <h4>Your order will arrive:</h4>
        <p>Between <span>${dtDate} of ${dtMonth} of ${dtYear} ${dtHours}:${dtMin}h</span> 
        and <span>${dtMaxDate} of ${dtMaxMonth} of ${dtMaxYear} ${dtMaxHours}:${dtMaxMin}h.</span></p>
        `;

    // For "finish" and "thank-you" section
    orderDeliveryDate.forEach(elm => elm.innerHTML = `
      <h4>Your order will arrive:</h4>
      <p>Between <span>${dtDate} of ${dtMonth} of ${dtYear} ${dtHours}:${dtMin}h</span> 
      and <span>${dtMaxDate} of ${dtMaxMonth} of ${dtMaxYear} ${dtMaxHours}:${dtMaxMin}h.</span></p>
    `);

  });
});

// Display gift information
function giftCheckFunction() {
  if (giftCheckMoreInfo.style.display === "block") {
    giftCheckMoreInfo.style.display = "none";
  } else {
    giftCheckMoreInfo.style.display = "block";
  }
}
