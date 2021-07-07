/**
 * User Global Variables
 */
var user = {
  username: "",
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  birthday: "",
  address1: "",
  address2: "",
  postalCode: "",
  country: "",
  phoneCountry: "",
  phoneNumber: "",
  regularAddress: false,
};
/**
 * Product Global Variables
 */
var product = {
  name: "Camiseta básica",
  price: 9.99,
  size: ["XS", "S", "M", "L", "XL", "XXL"],
  combination: [
    {
      colorName: "Arena",
      imageURL: "assets/img/products/arena/0.webp",
      colorHex: "#bbac9a",
      secondaryImg: [
        "assets/img/products/arena/1.webp",
        "assets/img/products/arena/2.webp",
        "assets/img/products/arena/3.webp",
        "assets/img/products/arena/4.webp",
      ],
    },
    {
      colorName: "Blanco",
      imageURL: "assets/img/products/blanco/0.webp",
      colorHex: "#fff",
      secondaryImg: [
        "assets/img/products/blanco/1.webp",
        "assets/img/products/blanco/2.webp",
        "assets/img/products/blanco/3.webp",
        "assets/img/products/blanco/4.webp",
      ],
    },
    {
      colorName: "Gris medio",
      imageURL: "assets/img/products/gris-medio/0.webp",
      colorHex: "#646174",
      secondaryImg: [
        "assets/img/products/gris-medio/1.webp",
        "assets/img/products/gris-medio/2.webp",
        "assets/img/products/gris-medio/3.webp",
        "assets/img/products/gris-medio/4.webp",
      ],
    },
    {
      colorName: "Kaki",
      imageURL: "assets/img/products/kaki/0.webp",
      colorHex: "#c6d47d",
      secondaryImg: [
        "assets/img/products/kaki/1.webp",
        "assets/img/products/kaki/2.webp",
        "assets/img/products/kaki/3.webp",
        "assets/img/products/kaki/4.webp",
      ],
    },
    {
      colorName: "Lila",
      imageURL: "assets/img/products/lila/0.webp",
      colorHex: "#c6bbd5",
      secondaryImg: [
        "assets/img/products/lila/1.webp",
        "assets/img/products/lila/2.webp",
        "assets/img/products/lila/3.webp",
        "assets/img/products/lila/4.webp",
      ],
    },
    {
      colorName: "Lima",
      imageURL: "assets/img/products/lima/0.webp",
      colorHex: "#646174",
      secondaryImg: [
        "assets/img/products/lima/1.webp",
        "assets/img/products/lima/2.webp",
        "assets/img/products/lima/3.webp",
        "assets/img/products/lima/4.webp",
      ],
    },
    {
      colorName: "Negro",
      imageURL: "assets/img/products/negro/0.webp",
      colorHex: "#131217",
      secondaryImg: [
        "assets/img/products/negro/1.webp",
        "assets/img/products/negro/2.webp",
        "assets/img/products/negro/3.webp",
        "assets/img/products/negro/4.webp",
      ],
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
  shippingCost: "",
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
var mainSlide = document.getElementById("mainSlide");
var carrousel = document.getElementById("carrousel");
var slide = document.getElementById("img-big");
var minis = document.getElementsByClassName("mini");
var micros = document.getElementsByClassName("micro");
var count = 0;
var productForm = document.getElementById("product-form");
var select1 = document.getElementById("selection1");
var select2 = document.getElementById("selection2");
var selected = document.getElementsByClassName("selected");
//onclick event-> forOf-> currentSlide(index)
