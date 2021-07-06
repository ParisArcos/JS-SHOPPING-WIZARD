/**
 * User Global Variables
 */
var user = {
  username: "",
  email: "",
  password: "",
  password2: "",
  fname: "",
  lname: "",
  birthday: "",
  address1: "",
  address2: "",
  pcode: "",
  country: "",
  phone: "",
  phoneNumber: "",
};
/**
 * Product Global Variables
 */
var product = {
  name: "Camiseta básica",
  price: 9.99,
  size: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: [
    {
      colorName: "Arena",
      imageURL: "assets/img/arena.webp",
      colorHex: "#bbac9a",
    },
    {
      colorName: "Blanco",
      imageURL: "assets/img/arena.webp",
      colorHex: "#fff",
    },
    {
      colorName: "Gris medio",
      imageURL: "assets/img/arena.webp",
      colorHex: "#646174",
    },
    {
      colorName: "Kaki",
      imageURL: "assets/img/arena.webp",
      colorHex: "#c6d47d",
    },
    {
      colorName: "Lila",
      imageURL: "assets/img/arena.webp",
      colorHex: "#c6bbd5",
    },
    {
      colorName: "Lima",
      imageURL: "assets/img/arena.webp",
      colorHex: "#646174",
    },
    {
      colorName: "Negro",
      imageURL: "assets/img/arena.webp",
      colorHex: "#131217",
    },
  ],
};
/**
 * Shipping Global Variables
 */
var shipping = {
  type: "",
  amount: 0,
  date: "",
};
/**
 * Gift Global Variables
 */
var gift = {
  isset: false,
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
