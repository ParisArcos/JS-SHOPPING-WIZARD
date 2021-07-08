function buildOrderVariables() {
    
    orderProductName.forEach(elm => elm.innerHTML = productOrder.name);

    orderProductPrice.forEach(elm => elm.innerHTML = productOrder.price);

    orderProductImage.forEach(elm => elm.innerHTML = `<img class="img-fluid" src="${productOrder.imageSrc}">`);

    orderProductSize.forEach(elm => elm.innerHTML = `Talla: ${productOrder.size}`);

    orderProductColor.forEach(elm => elm.innerHTML = productOrder.colorName);

    orderShippingName.forEach(elm => elm.innerHTML = shipping.type);

    orderShippingCost.forEach(elm => elm.innerHTML = shipping.amount);

    orderDeliveryDate.forEach(elm => elm.innerHTML = shipping.date);


    let orderTotalAmount = () => {
        return product.price + shipping.amount;
    }
    console.log(orderTotalAmount());
    orderTotal.forEach( elm => elm.innerHTML = orderTotalAmount());

}