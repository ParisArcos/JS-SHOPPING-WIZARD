function buildOrderVariables() {
    
    orderProductName.forEach(elm => elm.innerHTML = productOrder.name+' '+ productOrder.colorName);

    orderProductPrice.forEach(elm => elm.innerHTML = productOrder.price);

    orderProductImage.forEach(elm => elm.innerHTML = `<img class="img-fluid" src="${productOrder.imageSrc}">`);

    orderProductSize.forEach(elm => elm.innerHTML = productOrder.size);

    orderProductColor.forEach(elm => elm.style.backgroundColor = productOrder.hex);

    orderShippingName.forEach(elm => elm.innerHTML = shipping.type);

    orderShippingCost.forEach(elm => elm.innerHTML = shipping.amount);

    orderDeliveryDate.forEach(elm => elm.innerHTML = shipping.date);

    document.querySelector('#ch_user-name').innerHTML = user.name;


    let orderTotalAmount = () => {
        return product.price + shipping.amount;
    }
    console.log(orderTotalAmount());
    orderTotal.forEach( elm => elm.innerHTML = orderTotalAmount());

}