/**
 * User Global Variables
 */
var user = {
  userName,
  email,
  password,
  firstName,
  lastName,
  birthday,
  firstAddress,
  secondAddress,
  postalCode,
  country,
  phoneCountryCode,
  phoneNumber,
};
/**
 * Product Global Variables
 */
var product = {
  name,
  price,
  size,
  colors: {
    color,
    imageURL,
  },
};
/**
 * Shipping Global Variables
 */
var shipping = {
  type,
  amount,
  date,
};
/**
 * Gift Global Variables
 */
var gift = {
  isset: false,
  message,
  image,
};

var slide = document.getElementById("img-big");
var minis = document.querySelectorAll(".mini");
var count = 0;
//onclick event-> forOf-> currentSlide(index)
//
