function descuentos(precio,descuento){
const  porcentajeDeDescuento = 100 - descuento;
const  precioFinal = (precio * porcentajeDeDescuento) / 100 ;
return precioFinal;
}

function discountCalculate(){
    const price = document.getElementById("InputPrice");
    const priceValue = price.value ;
    const discount = document.getElementById("InputDiscount");
    const discountValue = discount.value ;
   const resultado = descuentos(priceValue,discountValue);
   const MostrarR = document.getElementById("ResoltP");
   MostrarR.innerText = "El precio con descuento es: $" + resultado;

}
//descuento con cupon
const coupons = [
    "papa",
    "mama",
    "hijo",
]


function buttonCuponCalculate(){
    const price = document.getElementById("InputPrice");
    const priceValue = price.value ;
    const discount = document.getElementById("InputCupon");
    const discountValue = discount.value ;
    if (!coupons.includes(discountValue)) {
        alert("El cupón " + discountValue + " no es válido");
    }
    let descuento;
    switch(discountValue){
        case   coupons[0]: 
        descuento = 15;
        break;
        case coupons[1]: 
        descuento = 30;
        break;
        case coupons[2]: 
        descuento = 50;
        break;
    }

   const resultado = descuentos(priceValue,descuento);
   const MostrarR = document.getElementById("ResoltP");
   MostrarR.innerText = "El precio con descuento es: $" + resultado;

}