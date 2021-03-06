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
  firstAddress: "",
  secondAddress: "",
  postalCode: "",
  country: "",
  phoneCountryCode: "",
  phoneNumber: "",
  regularAddress: false,
};

/**
 * Product Global Variables
 */
var product = {
  name: "Basic t-shirt",
  price: 9.99,
  size: ["XS", "S", "M", "L", "XL", "XXL"],
  combination: [
    {
      colorName: "Sand",
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
      colorName: "White",
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
      colorName: "Medium grey",
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
      colorName: "Purple",
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
      colorName: "Lime",
      imageURL: "assets/img/products/lima/0.webp",
      colorHex: "#cbd683",
      secondaryImg: [
        "assets/img/products/lima/1.webp",
        "assets/img/products/lima/2.webp",
        "assets/img/products/lima/3.webp",
        "assets/img/products/lima/4.webp",
      ],
    },
    {
      colorName: "Black",
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
 * Order Object Var
 */
var productOrder = {
  name: "",
  price: 0,
  imageSrc: "",
  size: "",
  hex: "",
  colorName: "",
};

/**
 * Shipping Global Variables
 */
var shipping = {
  type: "",
  amount: 0,
  date: "",
  maxDate: "",
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
var positionMain = 0;
var mainDiv = document.querySelector("#main");
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

/**
 * Form Global Variables
 */
const userForm1 = document.getElementById("user-form-1");
const userForm2 = document.getElementById("user-form-2");

/**
 * Global Shipping Variables
 */
// process icon colors
var sections = document.getElementsByTagName("section");
var profileIcon = document.getElementsByClassName("profile-icon")[0];
var addressIcon = document.getElementsByClassName("address-icon")[0];
var shippingIcon = document.getElementsByClassName("shipping-icon")[0];
var finishIcon = document.getElementsByClassName("finish-icon")[0];

// Control information on shipping time and gift
var infoShipping = document.getElementById("infoShipping");
var shipBtns = document.querySelectorAll(".shippingType input");
var giftCheckMoreInfo = document.querySelector(".giftInfo");

/**
 * Global finish page Variables
 */
var termsAndConditionsForm = document.querySelectorAll("#ch_finish-form");

var orderProductName = document.querySelectorAll(".ch_product-name");
var orderProductImage = document.querySelectorAll(".ch_product-image");
var orderProductSize = document.querySelectorAll(".ch_product-size");
var orderProductColor = document.querySelectorAll(".ch_product-color");
var orderProductPrice = document.querySelectorAll(".ch_product-price");

var orderDeliveryDate = document.querySelectorAll(".ch_delivery-date");
var orderShippingName = document.querySelectorAll(".ch_shipping-name");
var orderShippingCost = document.querySelectorAll(".ch_shipping-cost");

var orderTotal = document.querySelectorAll(".ch_order-total");
