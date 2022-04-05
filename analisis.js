const salariosPer = personas.map(
    function(persona){
      return  persona.salario;
    }
);
const salariosOrdenados =  salariosPer.sort(function(a,b){return a - b;});
 
function  esPar(numero){
    return (numero % 2 === 0);
}
function CalcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function  (valorAcumulado = 0,nuevoElemeto){
        return valorAcumulado + nuevoElemeto;
        }
    );
    
     const promedioLista = sumaLista / lista.length;
    
    
    return promedioLista; 
    }

function medianaSalarios (lista){
const   mitad = parseInt(lista.length / 2);

if(esPar(mitad)){
    const personaMitad1 = lista[mitad - 1];  
    const personaMitad2 = lista[mitad];
    const listaPersonas = [personaMitad1,personaMitad2];
    const mediana  = CalcularMediaAritmetica(listaPersonas);
    return mediana;
}else{
const personaMitad  = lista[mitad];  
return personaMitad ;
}

}

 const medianaGeneralDeSalariosPer = medianaSalarios(salariosOrdenados);
 const sliceStart = parseInt((salariosOrdenados.length * 90) / 100);
 const sliceCount = salariosOrdenados.length - sliceStart ;
 
 const salariosTop10 = salariosOrdenados.splice(sliceStart,sliceCount);
 
 const  medianaTop10Per  = medianaSalarios(salariosTop10);
console.log({
    medianaGeneralDeSalariosPer,
    medianaTop10Per,
    sliceStart ,
});
