function buildOrderVariables() {
    orderProductName.innerHTML = productOrder.name;
    orderProductPrice.innerHTML = productOrder.price;
    orderProductImage.innerHTML = `<img class="img-fluid" src="${productOrder.imageSrc}">`;
    orderProductSize.innerHTML = `Talla: ${productOrder.size}`;
    orderProductColor.innerHTML = productOrder.colorName;

    orderDeliveryDate.innerHTML = shipping.date;
    orderShippingName.innerHTML = shipping.type;
    orderShippingCost.innerHTML = shipping.amount;

    let orderTotalAmount = () => {
        return productOrder.price + shipping.amount;
    }

    orderTotal.innerHTML = orderTotalAmount;
}