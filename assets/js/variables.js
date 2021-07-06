/**
 * User Global Variables
 */
var user = {
  userName: "",
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  birthday: "",
  firstAddress: "",
  secondAddress: "",
  postalCode: "",
  country: "",
  phoneCountryCode: "",
  phoneNumber: "",
};
/**
 * Product Global Variables
 */
var product = {
  name: "",
  price: "",
  size: "",
  colors: {
    color: "",
    imageURL: "",
  },
};
/**
 * Shipping Global Variables
 */
var shipping = {
  type: "",
  amount: "",
  date: "",
};
/**
 * Gift Global Variables
 */
var gift = {
  isset: "",
  message: "",
  image: "",
};
/**
 * Index Global Variables
 */

var slide = document.getElementById("img-big");
var minis = document.querySelectorAll(".mini");
var count = 0;
var productForm = document.getElementById("product-form");
var select1 = document.getElementById("selection1");
var select2 = document.getElementById("selection2");
//onclick event-> forOf-> currentSlide(index)
//
