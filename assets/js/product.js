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
