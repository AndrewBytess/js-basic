function descuentos(precio,descuento){
    const  porcentajeDeDescuento = 100 - descuento;
    const  precioFinal = (precio * porcentajeDeDescuento) / 100 ;
    return precioFinal;
    }
const uit = 4400;

function calcularEndeudamiento(){
    const boton = document.getElementById("salary");
    const sueldo = boton.value;

   const endeudamiento = sueldo * 0.40; 
    
    const mostratCapEndeuda = document.getElementById("answer");
    mostratCapEndeuda.innerText =  "Tu capasidad de endeudamiento es de:S/" + endeudamiento;
}
const tramo1 = uit * 5;
const tramo2 = uit * 20;
const tramo3 = uit * 35;
const tramo4 = uit * 45;
const tramo5 = uit * 46;


 function calcularImpuesto(){
    const input = document.getElementById("salaryYearly");
    const sueldoAnual = input.value;
    const porcentaje1 = 20;
    const descuentoPrimario = descuentos(sueldoAnual,porcentaje1);
    const descuentoUit =  7 *  uit;
    var descuentoSecundario = descuentoPrimario - descuentoUit;
    var resultado = 0;
    
        if(descuentoSecundario <= tramo1){
            resultado = descuentoSecundario * 0.08;
        }else if(descuentoSecundario <= tramo2){
            descuentoSecundario -=   tramo1;
               resultado =  descuentoSecundario * 0.14;
               resultado += tramo1 * 0.08;  
        }else if(descuentoSecundario <= tramo3){
            descuentoSecundario -=   tramo1 + tramo2;
              resultado = descuentoSecundario * 0.17;
              resultado += (tramo1 * 0.08) + (tramo2 * 0.14) ;
        }else if(descuentoSecundario <= tramo4){
            descuentoSecundario -=   tramo1 + tramo2 + tramo3;
              resultado =  descuentoSecundario * 0.20;
              resultado += (tramo1 * 0.08) + (tramo2 * 0.14) + (tramo2 * 0.17) ;
        }else{
            descuentoSecundario -=   tramo1 + tramo2 + tramo3 + tramo4;
              resultado =  descuentoSecundario * 0.30;
              resultado += (tramo1 * 0.08) + (tramo2 * 0.14) + (tramo2 * 0.17) + (tramo2 * 0.17);

     
    }
    const mostratCapEndeuda2 = document.getElementById("answerTaxes");
    mostratCapEndeuda2.innerText =  "Tienes que pagar:S/" + resultado +" en  impuestos.";
 }
 