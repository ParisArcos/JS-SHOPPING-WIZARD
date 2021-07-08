function buildOrderVariables() {
    
    orderProductName.forEach(elm => elm.innerHTML = productOrder.name+' '+ productOrder.colorName);

    orderProductPrice.forEach(elm => elm.innerHTML = productOrder.price);

    orderProductImage.forEach(elm => elm.innerHTML = `<img class="img-fluid" src="${productOrder.imageSrc}">`);

    orderProductSize.forEach(elm => elm.innerHTML = productOrder.size);

    orderProductColor.forEach(elm => elm.style.backgroundColor = productOrder.hex);

    orderShippingName.forEach(elm => elm.innerHTML = shipping.type);

    orderShippingCost.forEach(elm => elm.innerHTML = shipping.amount);

    orderDeliveryDate.forEach(elm => elm.innerHTML = `Your order will be delivered ${shipping.date}`);

    document.querySelector('#ch_user-name').innerHTML = user.name;


    let orderTotalAmount = () => {
        return product.price + shipping.amount;
    }
    console.log(orderTotalAmount());
    orderTotal.forEach( elm => elm.innerHTML = orderTotalAmount());
}

document.querySelector('#ch_finish-form').addEventListener('submit', e => {
    e.preventDefault();

    if (document.querySelector('#terms-and-conditions').checked == false) {
        document.querySelector('#ch_finish-form .alert-red').removeAttribute('hidden');
    } else {
        moveMainSection();
    }
});