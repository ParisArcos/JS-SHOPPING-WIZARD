/**
 * Time Counter
 */
var counter = 0; // in seg
function initCounter() {
  updateCounter(counter);
}

function updateCounter(counter) {
  counter++;

  // Display Modal every 60 secs
  if (counter % 60 === 0) {
    let timeToDisplay = counter / 60;
    showTimerModal(timeToDisplay);
    setTimeout(hideTimerModal, 5000);
  }

  // 300secs === 5min
  if (counter === 300) {
    alert("Time out! You must be quicker.");
    window.location.reload();
    return;
  }

  // When we get last page
  if (thankYouPageIsVisible()) {
    let timeToDisplay = counter / 60;
    displaySessionTime(timeToDisplay);
    return;
  }

  return setTimeout(updateCounter, 1000, counter);
}

function showTimerModal(timeToDisplay) {
  let minutes = "minutes";
  let timeDiv = document.querySelector(".timing");

  if (timeToDisplay <= 1) {
    minutes = "minute";
  }

  timeDiv.innerHTML = `
        <p>
            You started registering <span id="countdown">${timeToDisplay}</span> ${minutes} ago.
        </p>
        `;

  timeDiv.classList.add("show");
}

function hideTimerModal() {
  let timeDiv = document.querySelector(".timing");
  timeDiv.classList.remove("show");
}

function displaySessionTime(timeToDisplay) {
  let timeDiv = document.querySelector("#timer-sesion");
  let time = timeToDisplay.toFixed(2);
  let arrayTime = time.split(".");

  // Get an array with Min and Secs
  let provMinutes = parseInt(arrayTime[0]);
  let provSeconds = parseInt(arrayTime[1]);

  // To get the real Minutes when seconds is > 60
  var minutes = provMinutes + parseInt((provSeconds / 60).toFixed());
  var seconds = provSeconds % 60;

  timeDiv.innerHTML = `
        <p>Your registration took: <strong>${minutes} minutes and ${seconds} seconds</strong>.</p>
        `;
}

function thankYouPageIsVisible() {
  let elm = document.getElementById("thank-you");
  elm = elm.getBoundingClientRect();

  if (elm.left === 0) {
    return true;
  } else {
    return false;
  }
}
