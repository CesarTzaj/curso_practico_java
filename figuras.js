// Operacion cuadrado
console.group("Cuadrado");

function perimetroCuadrado (lado){
    return Number(( lado *4).toFixed(2));
}

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();
//Operacion triangulo
console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, base){

    return  Number((Number(lado1)+Number(lado2) +Number(base)).toFixed(2));
}
function areaTriangulo (altura, base){
    return   Number(((altura*base)/2).toFixed(2));
}
//console.log(`El area del cuadrado es: ${areaTriangulo}`);
console.groupEnd();

//Operacion Circulo
console.group("circulo");
const pi = Math.PI;
function perimetroCirculo (radio){
    return Number((radio*2 *pi).toFixed(2));
}
function areaCirculo (radio){
    return Number(((radio*radio)/pi).toFixed(2));
}
console.groupEnd();
// area de un triangulo isosceles
function AreaTrianguloIsosceles(lado1, lado2, lado3){
    if (lado1 == lado2){
        const cateto = (lado3 / 2);
    }if (lado1 == lado3) {
        const cateto =  lado2 /2;
    } else {
        
        console.log("el triangulo es isosceles");
    }
    return (Math.sqrt((cateto*cateto)+(lado1*lado1)));
    }



// 
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado").value;
    document.getElementById("ResultadoPerimetro").value= perimetroCuadrado(input);
    document.getElementById("ResultadoArea").value=areaCuadrado(input);
}
function CalcularPerimetroTriangulo(){
    var value1 = document.getElementById("InputLadoTriangulo1").value;
    var value2= document.getElementById("InputLadoTriangulo2").value;
    var value3= document.getElementById("InputBaseTriangulo").value;
    document.getElementById("PerimetroTriangulo").value=perimetroTriangulo(value3,value1,value2);
}
function CalcularAreaTriangulo(){
    var altura =document.getElementById("Altura").value;
    var base=document.getElementById("base").value;
    document.getElementById("area").value=areaTriangulo(altura,base);
}
function CalcularPerimetroCirculo(){
    const radio =document.getElementById("InputRadioCirculo").value;
    document.getElementById("PerimetroCirculo").value=perimetroCirculo(radio);
    document.getElementById("AreaCirculo").value=areaCirculo(radio)
}