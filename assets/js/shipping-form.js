var staringMinutes = setStaringMinutes();
var time = staringMinutes * 60;
var countdownEl = document.getElementById("countdown");

var setTime = setInterval(updateCountdown(sections), 1000);

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
    console.log(input);
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
      console.log(shipping.amount);
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
  moveMainSection();
});

shipBtns.forEach((shipBtn) => {
  shipBtn.addEventListener("click", (e) => {
    if (e.target.id == "extra") {
      var dt = new Date();
      dt.setHours(dt.getHours() + 48);
      var dtYear = dt.getFullYear();
      var dtMonth = dt.toLocaleString('default', { month: 'long' });
      var dtDate = dt.getDate();
      var dtHours = dt.getHours();
      var dtMin = dt.getMinutes();
      dt.setHours(dt.getHours() + 24);
      var dtMaxYear = dt.getFullYear();
      var dtMaxMonth = dt.toLocaleString('default', { month: 'long' });
      var dtMaxDate = dt.getDate();
      var dtMaxHours = dt.getHours();
      var dtMaxMin = dt.getMinutes(); 
    } else if (e.target.id == "premium") {
      var dt = new Date();
      dt.setHours(dt.getHours() + 24);
      var dtYear = dt.getFullYear();
      var dtMonth = dt.toLocaleString('default', { month: 'long' });
      var dtDate = dt.getDate();
      var dtHours = dt.getHours();
      var dtMin = dt.getMinutes();
      dt.setHours(dt.getHours() + 24);
      var dtMaxYear = dt.getFullYear();
      var dtMaxMonth = dt.toLocaleString('default', { month: 'long' });
      var dtMaxDate = dt.getDate();
      var dtMaxHours = dt.getHours();
      var dtMaxMin = dt.getMinutes(); 
    } else if (e.target.id == "free") {
      var dt = new Date();
      dt.setHours(dt.getHours() + 72);
      var dtYear = dt.getFullYear();
      var dtMonth = dt.toLocaleString('default', { month: 'long' });
      var dtDate = dt.getDate();
      var dtHours = dt.getHours();
      var dtMin = dt.getMinutes();
      dt.setHours(dt.getHours() + 24);
      var dtMaxYear = dt.getFullYear();
      var dtMaxMonth = dt.toLocaleString('default', { month: 'long' });
      var dtMaxDate = dt.getDate();
      var dtMaxHours = dt.getHours();
      var dtMaxMin = dt.getMinutes(); 
    }

    // For "shipping" section
    infoShipping.innerHTML = `
        <h4>Your order will arrive:</h4>
        <h4>estimate delivery date:</h4>
        <p>Between <span>${dtDate} de ${dtMonth} de ${dtYear} ${dtHours}:${dtMin}h</span> 
        and <span>${dtMaxDate} de ${dtMaxMonth} de ${dtMaxYear} ${dtMaxHours}:${dtMaxMin}h.</span></p>
        `;
    
    // For "finish" and "thank-you" section
    orderDeliveryDate.innerHTML = `
        <h4>estimate delivery date:</h4>
        <p>Between <span>${dtDate} de ${dtMonth} de ${dtYear} ${dtHours}:${dtMin}h</span> 
        and <span>${dtMaxDate} de ${dtMaxMonth} de ${dtMaxYear} ${dtMaxHours}:${dtMaxMin}h.</span></p>
        `; 
  });
    console.log(orderDeliveryDate.innerHTML)
}); 

// Display gift information 
function giftCheckFunction() {
  if (giftCheckMoreInfo.style.display === "block") {
    giftCheckMoreInfo.style.display = "none";
    console.log(giftCheckMoreInfo.style.display)
  } else {
    giftCheckMoreInfo.style.display = "block";
    console.log(giftCheckMoreInfo.style.display)
  }
}


// to check if a section is visible on viewport
/* var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
		console.log('Element is fully visible in screen');
}, { threshold: [0] });

observer.observe(document.querySelector("#profile")); */


