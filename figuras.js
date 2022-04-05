// Codigo cuadrado
console.group("Cuadrados");
// const medidaCuadrado = 5;

// console.log("Los lados del cuadrado miden: "+ medidaCuadrado + "Ctm" );
function perimetroCuadrado (medida){
   return medida * 4;
};
// console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + "Ctm" );
function areaCuadrado (medida){
return  medida * medida;
};
// console.log("El area del cuadrado es: "+ areaCuadrado + "Ctm^2" );
console.groupEnd();

// Codigo triangulo
console.group("Triangulos");
// const medidatriangulo1 = 5;
// const medidatriangulo2 = 5;
// const medidatriangulobase = 7;
// const alturatriangulo = 5.5;
// console.log("Los lados del triangulos miden: "
//     + medidatriangulo1
//     + "Ctm, "  
//     + medidatriangulo2 
//     + "Ctm, " 
//     + medidatriangulobase
//     + "Ctm" 
// );

// console.log("La altura del triangulo es: "+ alturatriangulo + "Ctm" );

function perimetroTriengulo (lado1, lado2, base){
return  lado1 + lado2 + base;
};

// console.log("El perimetro del triangulo es: "+ perimetroTriengulo + "Ctm");

function areaTriangulo (base, altura){
return (base * altura) / 2;
}
// console.log("El area del Triengulo es: "+ areaTriangulo + "Ctm^2" );

console.groupEnd();

// Codigo Circulos
console.group("Circulos");

//Radio del circulo
// const radioCirculo = 6;
// console.log("El radio del circulo es: "+ radioCirculo + "Ctm" );

//Diametro del circulo
function diametroCirculo (area){
return area * 2;
}
// console.log("El diametro del circulo es: "+ diametroCirculo + "Ctm" );

//PI
const PI = Math.PI;
console.log("PI es: "+ PI);

//Perimetro del circulo
function perimetroCirculo (radio){
    const diametro = diametroCirculo (radio);
   return diametro * PI ;
}
// console.log("El perimetro del circulo es: "+ perimetroCirculo + "Ctm" );

//Area del circulo
function areaCirculo (radio){
    return (radio * radio) * PI ;
}
// console.log("El area del circulo es: "+ areaCirculo + "Ctm^2" );

console.groupEnd();
// Interaccion con HTML

function calcularPerimetroCuadrado (){
const input = document.getElementById("inputcuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);
alert(perimetro);
}

function calcularAreaCuadrado (){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
    }
    // funciones HTML triangulo

    function calcularPerimetroTriangulo (){
        const input = document.getElementById("inputTriangulo1");
        const valuee = input.value;
        const value = Number(valuee);

        const input2 = document.getElementById("inputTriangulo2");
        const valuee2 = input2.value;
        const value2 = Number(valuee2);

        const input3 = document.getElementById("inputTrianguloBase");
        const basee = input3.value;
        const base = Number(basee);


        const perimetro = perimetroTriengulo(value,value2,base);
        alert(perimetro);
        }

        function calcularAreaTriangulo (){
            
            const input2 = document.getElementById("inputTrianguloAltura");
            const altura = input2.value;
            const input3 = document.getElementById("inputTrianguloBase");
            const base = input3.value;
    
            const area = areaTriangulo(base,altura);
            alert(area);
            }
            // funciones circulo

            function calcularPerimetroCirculo (){
                const input = document.getElementById("inputCirculo");
                const value = input.value;
              
                const perimetro = perimetroCirculo(value);
                alert (perimetro);
                }
                
                function calcularAreaCirculo (){
                    const input = document.getElementById("inputCirculo");
                    const value = input.value;
                    const area = areaCirculo(value);
                    alert(area);
                    }
                    // Reto isoseles

                    function alturaisoseles(lado1,lado2,base) {
                        if (lado1 === lado2 && lado1 !== base){
                           const base1 = base / 2;
                           const pitagoras1 =  (lado1 * lado1) - (base1 * base1);
                           const pitagoras2 = Math.sqrt(pitagoras1);
                           return pitagoras2
                        }else{ return alert( "No es isoseles")}
                    }
                 function  calcularAlturaTriangulo(){
                    
                    const lado1 = document.getElementById("inputIsoseles1");
                    const lado1a = lado1.value;
                    const lado2 = document.getElementById("inputIsoseles2");
                    const lado2a = lado2.value;
                    const base = document.getElementById("inputIsoselesBase");
                    const base1 = base.value;
                    const altura = alturaisoseles(lado1a,lado2a,base1);
                    alert(altura);
                 }