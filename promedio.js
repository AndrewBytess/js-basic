// Media aritmetica

function CalcularMediaAritmetica(lista){

//     let sumaLista = 0;

//     for (let i =0 ; i  < lista.length; i++){
//         sumaLista = sumaLista  + lista[i];
//     }
const sumaLista = lista.reduce(
    function  (valorAcumulado = 0,nuevoElemeto){
    return valorAcumulado + nuevoElemeto;
    }
);

 const promedioLista = sumaLista / lista.length;


return promedioLista; 
}

//Mediana

const array =[5,6,7,4,3,12,91];

const lista  = array.sort(function(a, b){return a - b});

function CalcularMediana(lista){
const mitadLista = parseInt(lista.length / 2);

function esPar(numero){


if(numero % 2 === 0){
    return true;
}else{
    return false ;
}
}

let mediana;

if(esPar(lista.length)){
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
    const promedio1y2 = CalcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedio1y2;
}else{

    mediana = lista[mitadLista];
}
}

// Moda

const  numbers = [5,4,6,8,5,5,4,5,6,6,8,2,4,1,1]; 
const numbersCount = {};
numbers.map(
    function (elemento){
        if(numbersCount[elemento]){
            numbersCount[elemento] += 1;
        }else{
            numbersCount[elemento]  = 1;
        }
    }
);

const numberArray = Object.entries(numbersCount).sort(function(a,b) {return a[1] - b[1]}  );
 
const moda = numberArray[numberArray.length - 1];

//Media armonica

const  numbers = [5,4,6,8,5,5,4,5,6,6,8,2,4,1,1]; 

function calcularMediaArmonica(listas){
    let suma =[];
    for(let i = 0; i < listas.length; i++){
    let formulaSum =  (1/listas[i]);
    suma.push(formulaSum);
    }
    let sum = 0;
    for (let i = 0; i < suma.length; i++) {
        sum += suma[i];
    }
    const resultado = listas.length / sum;

    return resultado;
}


